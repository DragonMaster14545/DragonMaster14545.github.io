particlesJS('particles-js', {
    particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: "#4a4a4a" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 2, random: true },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false },
            onclick: { enable: false },
            resize: true
        }
    },
    retina_detect: true
});
document.querySelectorAll('iframe').forEach(iframe => {
    // Access each iframe's document
    const iframeDoc = iframe.contentWindow.document;

    // Mute all audio and video elements inside each iframe
    iframeDoc.querySelectorAll('audio, video').forEach(media => {
        media.muted = true;
    });
});