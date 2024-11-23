const card = document.getElementById('card');
const glass = document.getElementById('glass');

card.addEventListener("mousemove", (event) => {
    const pointerX = event.clientX;
    const pointerY = event.clientY;

    const cardRec = card.getBoundingClientRect();

    const halfWidth = cardRec.width / 2;
    const halfHeight = cardRec.height / 2;

    const cardCenterX = cardRec.left + halfWidth;
    const cardCenterY = cardRec.top + halfHeight;

    const deltaX = pointerX - cardCenterX;
    const deltaY = pointerY - cardCenterY;

    const rx = deltaY / halfHeight;
    const ry = deltaX / halfWidth;

    const distanceToTheCenter = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    const maxDistance = Math.max(halfWidth, halfHeight);
    const degree = distanceToTheCenter * 10 / maxDistance;

    card.style.transform = `perspective(400px) rotate3D(${-rx}, ${ry}, 0, ${degree}deg)`;

    glass.style.transform = `translate(${- ry}, ${- rx * 100}) scale(2.4)`;
    glass.style.opacity = (distanceToTheCenter * 0.6) / maxDistance;

    // console.log(cardRec);
});


card.addEventListener('mouseleave', () => {
    card.style = null;
    glass.style.opacity = 0;
});