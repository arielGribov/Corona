const hamburgerButton = document.getElementsByClassName('fa-bars')[0];
const closingButton = document.getElementsByClassName('fa-xmark')[0];
const sideBar = document.getElementsByClassName('side-bar')[0];

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
