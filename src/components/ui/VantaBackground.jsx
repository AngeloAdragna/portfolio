import React, { useEffect, useRef } from "react";

const VantaBackground = () => {
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaEffect = window.VANTA.WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.0,
            scaleMobile: 1.00,
            color: 0x05403F,
            shininess: 70.00,
            waveHeight: 45.00,
            waveSpeed: 0.9,
            zoom: 0.8
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return <div ref={vantaRef} style={{ height: "100vh", width: "100%" }} />;
};

export default VantaBackground;
