const hamburgerButton = document.getElementsByClassName('fa-bars')[0];
const closingButton = document.getElementsByClassName('fa-xmark')[0];
const sideBar = document.getElementsByClassName('side-bar')[0];
const navContainer = document.getElementsByClassName('nav-container')[0];
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
const menuTitlesButtons = document.getElementsByClassName('menu-title');
const caretDowns = document.getElementsByClassName('fa-caret-down');
const caretLeft = document.getElementsByClassName('fa-caret-left');
const menuItemsContainer = document.getElementsByClassName('menu-items-container');

let bodyRect = document.body.getBoundingClientRect();
let cardsCounter = 0;
let isDarkModeOn = false;

hamburgerButton.onclick = () => {
    hamburgerButton.classList.add('display-none');
    closingButton.classList.remove('display-none');
    sideBar.classList.add('open-side-bar');
    navContainer.classList.add('open-tab');
};
closingButton.onclick = () => {
    hamburgerButton.classList.remove('display-none');
    closingButton.classList.add('display-none');
    sideBar.classList.remove('open-side-bar');
    navContainer.classList.remove('open-tab');
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
for (let i = 0; i < menuTitlesButtons.length; i++) {
    menuItemsContainer[i].style.height = `calc(${menuItemsContainer[i].childElementCount} * 50px)`;
    menuTitlesButtons[i].onclick = () => {
        caretDowns[i].classList.toggle('display-none');
        caretLeft[i].classList.toggle('display-none');
        menuItemsContainer[i].classList.toggle('height-zero');
        for (let j = 0; j < menuItemsContainer[i].childElementCount; j++) {
            menuItemsContainer[i].children[j].classList.toggle('display-none');
        }
    };
}
const closePanel = (i) => {
    panels[i].classList.toggle('display-none');
    angleDowns[i].classList.toggle('display-none');
    angleUps[i].classList.toggle('display-none');
}; 
window.onscroll = () => {
    for (let i = 0; i < sections.length; i++) {
        if (isElementInViewportHeight(sections[i])) {
            for (let el in scrollBarButtons) {
                if (scrollBarButtons[el].classList) {
                    if (scrollBarButtons[el].classList.contains('white-background'))
                        scrollBarButtons[el].classList.remove('white-background');
                }
            }
            scrollBarButtons[i].classList.add('white-background');
            if (!isElementInViewportWidth(scrollBarButtons[i]))
                scrollBar.scrollTo(scrollBarButtons[i].offsetLeft - 500, 0);
        }
    }
};
const isElementInViewportHeight = (el) => {
    let rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= (window.innerHeight / 2 || document.documentElement.clientHeight);
};
const isElementInViewportWidth = (el) => {
    let rect = el.getBoundingClientRect();
    return rect.left >= 0 && rect.right <= (window.innerWidth / 5 || document.documentElement.clientWidth);
};

const generalCovidMessage =
    '\n     xxxxxx  xxxxxx  xx     xx            xxxxxx  xxxxxx       xx   xxxxxxx \n     xx      x    x   x     x               xx    x    xx      xx   xx   xx \n     xx      x    x   xx   xx     xxxx      xx    x    xx      xx   xx   xx \n     xx      x    x    x   x      xxxx      xx    x    xx      xx   xxxxxxx \n     xx      x    x     xxx                 xx    x    xx      xx        xx \n     xxxxxx  xxxxxx      x                xxxxxx  xxxxxx       xx   xxxxxxx  ';
console.log(generalCovidMessage);
