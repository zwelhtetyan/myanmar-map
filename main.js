const path = document.querySelectorAll('path');

const pointerState = document.createElement('div');
document.body.append(pointerState);

path.forEach((p) => {
    p.addEventListener('mouseover', (e) => {
        pointerState.classList.add('pointerState');
        pointerState.style.opacity = '1';
        let position = e.target.getBoundingClientRect();
        pointerState.style.top = position.top + 10 + window.scrollY + 'px';
        pointerState.style.left = position.left - 50 + 'px';
        pointerState.innerText =
            e.target.getAttribute('title') + ' ' + e.target.id;
    });
    p.addEventListener('mouseleave', () => {
        pointerState.style.opacity = '0';
    });
    pointerState.addEventListener('mouseover', () => {
        pointerState.style.opacity = '1';
    });
});
