(() => {
    const headers = Array.from(document.querySelectorAll('.video-link'));
    headers.forEach(header => addFlicker(header));

    function addFlicker(element) {
        const delay = Math.floor(Math.random() * 1000) + 7000;
        setInterval(() => {
            const gaps = createFlicker();
            let accumulator = 0;
            const randomHeader = Math.floor(Math.random()) % 3;
            gaps.forEach(gap =>
                setTimeout(() => {
                    toggleFlicker(element);
                    accumulator += gap;
                }, gap + accumulator)
            );
        }, delay);
    }

    function createFlicker() {
        const randomGaps = [];
        for (let i = 0; i < 8; i++) {
            randomGaps.push(Math.random() * 800 + 800);
        }
        return randomGaps;
    }

    function toggleFlicker(element) {
        element.classList.toggle('flicker');
    }
})();