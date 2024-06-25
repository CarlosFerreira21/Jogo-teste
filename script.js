document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('fireworks').style.display = 'flex';
    startFireworks();
});

document.getElementById('no-button').addEventListener('mouseover', function() {
    const button = document.getElementById('no-button');
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});

function startFireworks() {
    const fireworks = document.querySelectorAll('.firework');
    fireworks.forEach(firework => {
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
    });
}