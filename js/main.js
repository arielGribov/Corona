const hamburgerButton = document.getElementsByClassName('fa-bars')[0];
const closingButton = document.getElementsByClassName('fa-xmark')[0];
const sideBar = document.getElementsByClassName('nav-container')[0];
const infoSymbol = document.getElementsByClassName('fa-circle-info');
const infoData = document.getElementsByClassName('info');
const cards = document.getElementsByClassName('card');
const cardsContainers = document.getElementsByClassName('cards-container');
const menuButtons = document.getElementsByClassName('fa-ellipsis-vertical');
const menuDivs = document.getElementsByClassName('menu');
let cardsCounter = 0;

hamburgerButton.onclick = () => {
    hamburgerButton.classList.add('display-none');
    closingButton.classList.remove('display-none');
    sideBar.classList.remove('display-none');
};
closingButton.onclick = () => {
    hamburgerButton.classList.remove('display-none');
    closingButton.classList.add('display-none');
    sideBar.classList.add('display-none');
};
for (let i = 0; i < infoSymbol.length; i++) {
    infoSymbol[i].onmouseover = () => {
        infoData[i].classList.remove('display-none');
    };
    infoSymbol[i].onmouseout = () => {
        infoData[i].classList.add('display-none');
    };
}
for (let i = 0; i < cardsContainers.length; i++) {
    for (let j = 0; j < cardsContainers[i].children.length; j++) {
        if (cardsContainers[i].contains(cards[cardsCounter])) {
            cards[cardsCounter].style.width = `calc((100% /${cardsContainers[i].children.length}) - 20px)`;
            cardsCounter++;
        }
    }
}
for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].onclick = () => {
        menuDivs[i].classList.toggle('display-none');
        if (!menuDivs[i].classList.contains('display-none')) {
            menuDivs[i].onmouseout = () => {
                menuDivs[i].classList.add('display-none');
            };
        }
    };
}
