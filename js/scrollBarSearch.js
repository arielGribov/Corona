const linesContainer = document.getElementsByClassName('lines-container')[0];
const cellsSpan = linesContainer.getElementsByTagName('span');
const cellsDivs = linesContainer.getElementsByClassName('inner-div');
const sortButtons = document.getElementsByClassName('sort-button');

// let scrollBarData1 = [];
// let scrollBarData2 = [];
// let hospitalNames = [];
// let dataAll = { scrollBarData1, scrollBarData2, hospitalNames };
let hasButtonsChanged = [false, false, false];
let downTriangle = [];
let upTriangle = [];

let allData = [];

// const renderTable = () => {
//     for (let i = 0; i < cellsSpan.length; i++) {
//         switch (i % 3) {
//             case 0:
//                 cellsSpan[i].innerHTML = hospitalNames[i];
//                 cellsDivs[i].classList.add('display-none');
//                 break;
//             case 1:
//                 cellsSpan[i].innerHTML = scrollBarData1[i];
//                 if (cellsSpan[i].innerHTML > 100) {
//                     cellsDivs[i].classList.add('red');
//                 }
//                 cellsSpan[i].innerHTML += '%';
//                 break;
//             case 2:
//                 cellsSpan[i].innerHTML = scrollBarData2[i];
//                 if (cellsSpan[i].innerHTML > 100) {
//                     cellsDivs[i].classList.add('red');
//                 }
//                 cellsSpan[i].innerHTML += '%';
//                 break;
//         }
//     }
//     for (let i = 0; i < 3; i++) {
//         downTriangle[i][0].classList.add('display-none');
//         upTriangle[i][0].classList.add('display-none');
//     }
// };
const renderTable = () => {
    for (let i = 0; i < allData.length; i++) {
        for (let j = 0; j < 3; j++) {
            switch (j) {
                case 0:
                    cellsSpan[i * 3 + j].innerHTML = allData[i].hospitalName;
                    cellsDivs[i * 3 + j].classList.add('display-none');
                    break;
                case 1:
                    cellsSpan[i * 3 + j].innerHTML = allData[i].scrollBarData1;
                    if (cellsSpan[i * 3 + j].innerHTML > 100) {
                        cellsDivs[i * 3 + j].classList.add('red');
                    }
                    cellsSpan[i * 3 + j].innerHTML += '%';
                    break;
                case 2:
                    cellsSpan[i * 3 + j].innerHTML = allData[i].scrollBarData2;
                    if (cellsSpan[i * 3 + j].innerHTML > 100) {
                        cellsDivs[i * 3 + j].classList.add('red');
                    }
                    cellsSpan[i * 3 + j].innerHTML += '%';
                    break;
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        downTriangle[i][0].classList.add('display-none');
        upTriangle[i][0].classList.add('display-none');
    }
};
const sortByParam = (param, array, isAscending) => {
    array.sort((obj1, obj2) => {
        if (isAscending) return obj1[param] - obj2[param];
        else return obj2[param] - obj1[param];
    });
};
// const sortData = (i) => {
//     switch (i) {
//         case 0:
//             hospitalNames.sort();
//             break;
//         case 1:
//             scrollBarData1.sort((a, b) => {
//                 return a - b;
//             });
//             break;
//         case 2:
//             scrollBarData2.sort((a, b) => {
//                 return a - b;
//             });
//             break;
//     }
// };
// const reverseData = (i) => {
//     switch (i) {
//         case 0:
//             hospitalNames.sort((a, b) => {
//                 return b - a;
//             });
//             break;
//         case 1:
//             scrollBarData1.sort((a, b) => {
//                 return b - a;
//             });
//             break;
//         case 2:
//             scrollBarData2.sort((a, b) => {
//                 return b - a;
//             });
//             break;
//     }
// };
const makeMokeData = () => {
    for (let i = 0; i < linesContainer.childElementCount; i++) {
        allData[i] = {
            hospitalName: ' בית חולים ' + (i + 1),
            scrollBarData1: (Math.random() * 100 + i).toFixed(1),
            scrollBarData2: (Math.random() * 100 + i).toFixed(1),
        };
        // hospitalNames.push(' בית חולים ' + (i / 3 + 1));
        // scrollBarData1.push((Math.random() * 100 + i).toFixed(1));
        // scrollBarData2.push((Math.random() * 100 + i).toFixed(1));
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
            console.log(downTriangle[i][0]);
            downTriangle[i][0].classList.toggle('display-none');
            console.log(downTriangle[i][0]);
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
            }
        }
        renderTable();
    };
}

renderTable();
