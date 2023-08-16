const star = document.querySelectorAll('.star');
const imojiContainer = document.getElementById('imojiContainer');

const starCount = 5;
const smileys = ['😢', '😞', '😐', '😀', '😎'];

let rating = 0;

star.forEach(s => {
    s.classList.add('star-empty')
})

function fillStar(count) {
    star.forEach((s, index) => {
        if (index < count) {
            s.classList.add('star-filled');
            s.classList.remove('star-empty');
        } else {
            s.classList.remove('star-filled');
            s.classList.add('star-empty');
        }
    });
}

function setSmiley(rating) {
    const index = Math.floor((smileys.length * rating) / starCount) - 1;
    imojiContainer.textContent = smileys[index];
}

function hoverListener(event) {
    const target = event.target;
    if (target.classList.contains('star')) {
        const index = +target.dataset.index + 1;
        fillStar(index);
    }
}

function clickListener(event) {
    const target = event.target;
    if (target.classList.contains('star')) {
        rating = +target.dataset.index + 1;
        fillStar(rating);
        setSmiley(rating);
    }
}

function leaveListener() {
    fillStar(rating);
}

star.forEach(s => {
    s.addEventListener("mouseover", hoverListener);
    s.addEventListener("mouseleave", leaveListener);
    s.addEventListener("click", clickListener);
});
