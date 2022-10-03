const hamburgerButton = document.getElementsByClassName('fa-bars')[0];
const closingButton = document.getElementsByClassName('fa-xmark')[0];
const sideBar = document.getElementsByClassName('nav-container')[0];
const infoSymbol = document.getElementsByClassName('fa-circle-info');
const infoData = document.getElementsByClassName('info');

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
        console.log(i);
    };
    infoSymbol[i].onmouseout = () => {
        infoData[i].classList.add('display-none');
    };
}
