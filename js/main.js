const hamburgerButton = document.getElementsByClassName('fa-bars')[0];
const closingButton = document.getElementsByClassName('fa-xmark')[0];
const sideBar = document.getElementsByClassName('nav-container')[0];
const infoSymbol = document.getElementsByClassName('fa-circle-info');
const infoData = document.getElementsByClassName('info');
const cards = document.getElementsByClassName('card');
const cardsContainers = document.getElementsByClassName('cards-container');
const menuButtons = document.getElementsByClassName('fa-ellipsis-vertical');
const menuDivs = document.getElementsByClassName('menu');
const dropdownButtons = document.getElementsByClassName('dropdown-button');
const panels = document.getElementsByClassName('panel');
const angleDowns = document.getElementsByClassName('fa-angle-down');
const angleUps = document.getElementsByClassName('fa-angle-up');
const scrollBar = document.getElementsByClassName('scroll-bar')[0];
const scrollBarButtons = scrollBar.getElementsByTagName('button');
const sections = document.getElementsByTagName('section');
const darkModeButton = document.getElementsByClassName('brightness-dark')[0];
const cancelButtons = document.getElementsByClassName('cancelButton');

let bodyRect = document.body.getBoundingClientRect();
let cardsCounter = 0;
let isDarkModeOn = false;

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
darkModeButton.onclick = () => {
    isDarkModeOn = !isDarkModeOn;
    document.querySelector('html').classList.toggle('dark-mode');
    darkModeButton.firstElementChild.classList.toggle('display-none');
    darkModeButton.lastElementChild.classList.toggle('display-none');
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
        if (i == 0 || i == 1) {
            if (cardsContainers[i].contains(cards[cardsCounter])) {
                cards[cardsCounter].style.width = `calc((100% /${cardsContainers[i].children.length}) - 20px)`;
                cardsCounter++;
            }
        } else if (cardsContainers[i].contains(cards[cardsCounter])) {
            cards[cardsCounter].style.width = `calc((100% /3) - 20px)`;
            cardsCounter++;
        }
    }
}
for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].onclick = () => {
        menuDivs[i].classList.toggle('display-none');
        if (!menuDivs[i].classList.contains('display-none')) {
            menuDivs[i].onmouseout = (event) => {
                event.stopPropagation();
                menuDivs[i].classList.add('display-none');
            };
        }
    };
}
for (let i = 0; i < dropdownButtons.length; i++) {
    dropdownButtons[i].onclick = () => {
        closePanel(i);
    };
}
for (let i = 0; i < scrollBarButtons.length; i++) {
    scrollBarButtons[i].onclick = () => {
        window.scrollTo(0, sections[i].offsetTop - 125);
    };
}
for (let i = 0; i < cancelButtons.length; i++) {
    cancelButtons[i].onclick = () => {
        closePanel(i);
    };
}
const closePanel = (i) => {
    panels[i].classList.toggle('display-none');
    angleDowns[i].classList.toggle('display-none');
    angleUps[i].classList.toggle('display-none');
};
window.onscroll = () => {
    for (let i = 0; i < sections.length; i++) {
        if (isElementInViewport(sections[i])) {
            for (let el in scrollBarButtons) {
                if (scrollBarButtons[el].classList) {
                    if (scrollBarButtons[el].classList.contains('white-background'))
                        scrollBarButtons[el].classList.remove('white-background');
                }
            }
            scrollBarButtons[i].classList.add('white-background');
        }
    }
};
const isElementInViewport = (el) => {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
