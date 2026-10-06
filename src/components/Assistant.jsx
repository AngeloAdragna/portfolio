import { useCallback, useEffect, useRef, useState } from "react";
import { fallback, greeting, greetingNext, intentById, matchIntent, placeholders } from "../assistant-data.js";
import AnswerBlock from "./AnswerBlock.jsx";
import { goToSection } from "../nav.js";
import { IconArrowUp, IconCheck, IconSource } from "./Icons.jsx";

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const STEP_MS = 650;
const CHARS_PER_TICK = 3;
const TICK_MS = 16;

const greetingIntent = {
  id: "greeting",
  steps: [],
  text: greeting,
  block: null,
  sources: [],
  next: greetingNext,
};

function Orb({ busy }) {
  return <span className={`orb${busy ? " is-busy" : ""}`} aria-hidden="true" />;
}

// Texte d'exemple qui s'écrit et s'efface dans le champ vide.
function usePlaceholder(active) {
  const [text, setText] = useState(placeholders[0]);
  useEffect(() => {
    if (!active || reduceMotion()) return;
    let i = 0;
    let n = placeholders[0].length;
    let dir = -1;
    let pause = 70;
    const t = setInterval(() => {
      if (pause > 0) { pause--; return; }
      const target = placeholders[i];
      n += dir;
      if (dir < 0 && n <= 0) {
        i = (i + 1) % placeholders.length;
        dir = 1;
        n = 0;
      } else if (dir > 0 && n >= placeholders[i].length) {
        dir = -1;
        pause = 70;
      }
      setText((dir < 0 ? target : placeholders[i]).slice(0, Math.max(n, 0)));
    }, 40);
    return () => clearInterval(t);
  }, [active]);
  return text;
}

export default function Assistant({ repos }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const busy = messages.some((m) => m.role === "assistant" && m.phase !== "done");
  const timers = useRef([]);
  const scroller = useRef(null);
  const placeholder = usePlaceholder(!focused && input === "");

  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));
  const update = (key, patch) =>
    setMessages((ms) => ms.map((m) => (m.key === key ? { ...m, ...(typeof patch === "function" ? patch(m) : patch) } : m)));

  const respond = useCallback((intent) => {
    const key = `a${Date.now()}${Math.random()}`;
    const instant = reduceMotion();
    setMessages((ms) => [
      ...ms,
      { key, role: "assistant", intent, phase: instant ? "done" : intent.steps.length ? "thinking" : "streaming", step: 0, shown: instant ? intent.text.length : 0 },
    ]);
    if (instant) return;

    // 1. étapes de réflexion
    intent.steps.forEach((_, i) => later(() => update(key, { step: i + 1 }), STEP_MS * (i + 1)));
    const streamStart = STEP_MS * intent.steps.length + (intent.steps.length ? 250 : 300);

    // 2. réponse en flux
    later(() => {
      update(key, { phase: "streaming" });
      let shown = 0;
      const t = setInterval(() => {
        shown = Math.min(shown + CHARS_PER_TICK, intent.text.length);
        const done = shown >= intent.text.length;
        update(key, { shown, phase: done ? "done" : "streaming" });
        if (done) clearInterval(t);
      }, TICK_MS);
      timers.current.push(t);
    }, streamStart);
  }, []);

  // Message d'accueil au chargement.
  useEffect(() => {
    setMessages([]);
    respond(greetingIntent);
    const ts = timers.current;
    return () => ts.forEach((t) => { clearTimeout(t); clearInterval(t); });
  }, [respond]);

  // Garde le dernier message visible dans la conversation.
  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const ask = (text, intent) => {
    if (busy || !text.trim()) return;
    setMessages((ms) => [...ms, { key: `u${Date.now()}`, role: "user", text: text.trim() }]);
    setInput("");
    respond(intent ?? matchIntent(text));
  };

  const last = [...messages].reverse().find((m) => m.role === "assistant");

  return (
    <div className="assistant">
      <div className="chat" ref={scroller} aria-live="polite" aria-busy={busy}>
        {messages.map((m) =>
          m.role === "user" ? (
            <div key={m.key} className="msg msg-user">
              <p>{m.text}</p>
            </div>
          ) : (
            <div key={m.key} className="msg msg-assistant">
              <Orb busy={m.phase !== "done"} />
              <div className="msg-body">
                {m.intent.steps.length > 0 && (
                  <ul className="steps" aria-label="Étapes">
                    {m.intent.steps.map((s, i) =>
                      i <= m.step ? (
                        <li key={s} className={i < m.step || m.phase !== "thinking" ? "is-done" : ""}>
                          {i < m.step || m.phase !== "thinking" ? <IconCheck /> : <span className="spinner" />}
                          {s}
                        </li>
                      ) : null
                    )}
                  </ul>
                )}
                {m.phase !== "thinking" && (
                  <p className="answer">
                    {m.intent.text.slice(0, m.shown)}
                    {m.phase === "streaming" && <span className="cursor" />}
                  </p>
                )}
                {m.phase === "done" && m.intent.block && (
                  <div className="block-in">
                    <AnswerBlock type={m.intent.block} repos={repos} />
                  </div>
                )}
                {m.phase === "done" && m.intent.sources.length > 0 && (
                  <p className="sources">
                    {m.intent.sources.map(([id, label]) => (
                      <button key={id} type="button" className="source" onClick={() => goToSection(id)}>
                        <IconSource /> {label}
                      </button>
                    ))}
                  </p>
                )}
              </div>
            </div>
          )
        )}
      </div>

      <div className="suggestions" aria-label="Questions suggérées">
        {!busy &&
          last &&
          (last.intent.next ?? fallback.next).map((id) => (
            <button key={id} type="button" className="suggestion" onClick={() => ask(intentById[id].question, intentById[id])}>
              {intentById[id].question}
            </button>
          ))}
      </div>

      <form
        className="composer"
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <label htmlFor="ask" className="sr-only">Poser une question sur Angelo</label>
        <input
          id="ask"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={focused ? "Posez une question sur mon parcours ou mes projets" : placeholder}
          autoComplete="off"
          maxLength={200}
        />
        <button type="submit" className="send" disabled={busy || !input.trim()} aria-label="Envoyer la question">
          <IconArrowUp />
        </button>
      </form>
      <p className="disclaimer">Réponses rédigées par Angelo, sans modèle de langage. Rien n'est inventé.</p>
    </div>
  );
}
