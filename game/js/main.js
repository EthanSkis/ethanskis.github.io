// main.js - Entry point, menu handling, game loop

(function() {
    const game = new Game();
    let lastTime = 0;
    let running = false;

    // Menu elements
    const menuScreen = document.getElementById('menu-screen');
    const btnPlay = document.getElementById('btn-play');
    const btnControls = document.getElementById('btn-controls');
    const gameMode = document.getElementById('game-mode');
    const botDifficulty = document.getElementById('bot-difficulty');
    const botCount = document.getElementById('bot-count');
    const mapSelect = document.getElementById('map-select');

    btnPlay.addEventListener('click', () => {
        menuScreen.style.display = 'none';

        game.startMatch({
            map: mapSelect.value,
            mode: gameMode.value,
            difficulty: botDifficulty.value,
            botCount: parseInt(botCount.value),
        });

        running = true;
        lastTime = performance.now();
        requestAnimationFrame(gameLoop);
    });

    btnControls.addEventListener('click', () => {
        alert(
            'Controls:\n\n' +
            'WASD - Move\n' +
            'Mouse - Look\n' +
            'Left Click - Shoot\n' +
            'R - Reload\n' +
            'Space - Jump\n' +
            'C / Ctrl - Crouch\n' +
            'Shift - Sprint\n' +
            '1/2/3 - Switch Weapon\n' +
            'Scroll - Cycle Weapon\n' +
            'Tab - Scoreboard\n' +
            'Esc - Pause / Release Mouse'
        );
    });

    // Re-lock pointer on click during gameplay
    document.addEventListener('click', () => {
        if (game.isRunning && !document.pointerLockElement) {
            game.canvas.requestPointerLock();
        }
    });

    // Escape to release pointer
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && document.pointerLockElement) {
            document.exitPointerLock();
        }
    });

    function gameLoop(timestamp) {
        if (!running) return;

        const dt = Math.min((timestamp - lastTime) / 1000, 0.05); // Cap at 50ms
        lastTime = timestamp;

        game.update(dt);
        game.render();

        if (game.isRunning) {
            requestAnimationFrame(gameLoop);
        } else {
            running = false;
        }
    }

    // Initial render
    game.render();
})();
