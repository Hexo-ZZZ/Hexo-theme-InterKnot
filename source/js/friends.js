(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const right = document.querySelector('main .right');
        const col1 = right.querySelectorAll('main .right .col')[0];
        const col2 = right.querySelectorAll('main .right .col')[1];
        const col3 = right.querySelectorAll('main .right .col')[2];
        const cols = right.querySelector('main .right .cols');
        right.addEventListener('scroll', () => {
            cols.style.marginTop = `${right.scrollTop}px`;
            col1.style.transform = `skewX(15deg) translateY(${-right.scrollTop}px)`;
            col2.style.transform = `skewX(15deg) translateY(${-right.scrollTop - 75}px)`;
            col3.style.transform = `skewX(15deg) translateY(${-right.scrollTop}px)`;
        });
        let cards = document.querySelectorAll('main .right .card');
        const bigName = document.querySelector("main .left .name")
        const bigAvatar = document.querySelector("main .left .avatar")
        for (let i = 0; i < cards.length; i++) {
            console.log(cards[i])
            let card = cards[i];
            if (card.classList.contains('empty')) {
                continue;
            }
            cards[i].addEventListener('mouseover', () => {
                let name = card.querySelector('.name').textContent;
                card.querySelector('.avatar img').onerror = function () {
                    card.querySelector('.avatar img').src = '/img/avatar/image.png';
                }
                let avatar = card.querySelector('.avatar img').src;
                bigAvatar.src = avatar;
                bigName.textContent = name;
            });
        }
    });
})();