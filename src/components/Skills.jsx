import React, { useState, useEffect } from 'react';
import '../styles/Skills.css';

function Skills() {

    return (
        <section id="SkillPage" className="SkillPage">
            <h2 className='TitlePage' id="titleSkillpage">Competence</h2>

            <div className="profile-skills">
                <div>

                    <ul className="skills skills1">
                        <li className="sk-cpp"><span>C&nbsp;++</span></li>
                        <li className="sk-jav"><span>Java</span></li>
                        <li className="sk-att"><span>assembleur &nbsp; AT&amp;T</span></li>
                        <li className="sk-jsc"><span>JavaScript</span></li>
                        <li className="sk-rrr"><span>R</span></li>
                        <li className="sk-pyt"><span>Python</span></li>

                    </ul>
                </div>
                <div>

                    <ul className="skills skills2">
                        <li className="sk-pro"><span>Programmation</span></li>
                        <li className="sk-mod"><span>Modelisation &nbsp; 3D</span></li>
                        <li className="sk-iaa"><span>IA</span></li>
                        <li className="sk-dis"><span>Design</span></li>
                        <li className="sk-alg"><span>Algorithmie</span></li>
                        <li className="sk-sys"><span>Systemes &nbsp;&amp;&nbsp; Reseaux</span></li>

                    </ul>
                </div>
                <div>

                    <ul className="skills skills3">
                        <li className="sk-css"><span>CSS</span></li>
                        <li className="sk-php"><span>PHP</span></li>
                        <li className="sk-sql"><span>SQL</span></li>
                        <li className="sk-htm"><span>HTML</span></li>
                        <li className="sk-nod"><span>Node&nbsp;.&nbsp;js</span></li>
                        <li className="sk-rct"><span>React.&nbsp;js</span></li>


                    </ul>
                </div>
            </div>

        </section >

    );
}

export default Skills;