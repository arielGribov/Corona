const linesContainer = document.getElementsByClassName('lines-container')[0];
const cellsSpan = linesContainer.getElementsByTagName('span');
const cellsDivs = linesContainer.getElementsByClassName('inner-div');
const sortButtons = document.getElementsByClassName('sort-button');

let hasButtonsChanged = [false, false, false];
let downTriangle = [];
let upTriangle = [];
let allData = [];

const renderTable = () => {
    for (let i = 0; i < cellsDivs.length; i++) {
        cellsDivs[i].classList.remove('red');
    }
    for (let i = 0; i < allData.length; i++) {
        for (let j = 0; j < 3; j++) {
            switch (j) {
                case 0:
                    cellsSpan[i * 3 + j].innerHTML = allData[i].hospitalName;
                    cellsSpan[i * 3 + j].innerHTML = ' בית חולים ' + cellsSpan[i * 3 + j].innerHTML;
                    cellsDivs[i * 3 + j].classList.add('display-none');
                    break;
                case 1:
                    cellsSpan[i * 3 + j].innerHTML = allData[i].scrollBarData1;
                    if (allData[i].scrollBarData1 > 100) {
                        cellsDivs[i * 3 + j].classList.add('red');
                    }
                    cellsSpan[i * 3 + j].innerHTML += '%';
                    break;
                case 2:
                    cellsSpan[i * 3 + j].innerHTML = allData[i].scrollBarData2;
                    if (allData[i].scrollBarData2 > 100) {
                        cellsDivs[i * 3 + j].classList.add('red');
                    }
                    cellsSpan[i * 3 + j].innerHTML += '%';
                    break;
            }
        }
    }
};
const clearArrows = (location) => {
    for (let i = 0; i < 3; i++) {
        if (i !== location) {
            downTriangle[i][0].classList.add('display-none');
            upTriangle[i][0].classList.add('display-none');
            hasButtonsChanged[i] = false;
        }
    }
};
const sortByParam = (param, array, isAscending) => {
    array.sort((obj1, obj2) => {
        if (isAscending) return obj1[param] - obj2[param];
        else return obj2[param] - obj1[param];
    });
};
const makeMokeData = () => {
    for (let i = 0; i < linesContainer.childElementCount; i++) {
        allData[i] = {
            hospitalName: i + 1,
            scrollBarData1: (Math.random() * 100 + i).toFixed(1),
            scrollBarData2: (Math.random() * 100 + i).toFixed(1),
        };
    }
};
makeMokeData();
for (let i = 0; i < sortButtons.length; i++) {
    downTriangle.push(sortButtons[i].getElementsByClassName('fa-caret-down'));
    upTriangle.push(sortButtons[i].getElementsByClassName('fa-caret-up'));
    let param;
    sortButtons[i].onclick = () => {
        if (i === 0) param = 'hospitalName';
        if (i === 1) param = 'scrollBarData1';
        if (i === 2) param = 'scrollBarData2';
        if (
            downTriangle[i][0].classList.contains('display-none') &&
            upTriangle[i][0].classList.contains('display-none')
        ) {
            downTriangle[i][0].classList.remove('display-none');
            hasButtonsChanged[i] = true;
            sortByParam(param, allData, true);
        } else if (!downTriangle[i][0].classList.contains('display-none')) {
            downTriangle[i][0].classList.add('display-none');
            upTriangle[i][0].classList.remove('display-none');
            sortByParam(param, allData, false);
        } else if (!upTriangle[i][0].classList.contains('display-none')) {
            if (hasButtonsChanged[i]) {
                downTriangle[i][0].classList.remove('display-none');
                upTriangle[i][0].classList.add('display-none');
                sortByParam(param, allData, true);
            }
        }
        clearArrows(i);
        renderTable();
    };
}
renderTable();
