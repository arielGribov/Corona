const forms = document.getElementsByTagName('form');

for (let i = 0; i < forms.length; i++) {
    forms[i].onsubmit = (event) => {
        event.preventDefault();
        switch (i) {
            case 0:
                filterChart1();
                break;
            case 1:
                filterChart2();
                break;
            case 2:
                filterChart3();
                break;
            case 3:
                filterChart4();
                break;
            case 4:
                filterChart5();
                break;
        }
        closePanel(i);
    };
}
const filterChart1 = () => {
    let conditionsChart1 = {};
    let timeOfConditionsChart1 = {};
    forms[0].querySelectorAll('[type="checkbox"]').forEach((element) => {
        conditionsChart1[element.value] = element.checked;
    });
    forms[0].querySelectorAll('[type="radio"]').forEach((element) => {
        timeOfConditionsChart1[element.value] = element.checked;
    });
    const updateMycharts1 = () => {
        let result = [];
        let monthArrTemp = [...monthArr];
        let i = 0;
        let howMuchDays;
        let allData = [data, data2, data3];
        for (let key in conditionsChart1) {
            result[i++] = conditionsChart1[key];
        }
        for (i = 0; i < result.length; i++) {
            if (!result[i]) allData[i] = null;
        }
        updateOption(option1, allData);
        for (let key in timeOfConditionsChart1) {
            if (timeOfConditionsChart1[key]) howMuchDays = key;
        }
        switch (howMuchDays) {
            case 'untilNow':
                break;
            case 'year':
                monthArrTemp.splice(0, 5);
                break;
            case 'sixMonths':
                monthArrTemp.splice(0, 10);
                break;
            case 'threeMonths':
                monthArrTemp.splice(0, 20);
                break;
            case 'lastMonth':
                monthArrTemp.splice(0, 25);
                break;
        }
        option1.xAxis.data = monthArrTemp;
        myChart1.setOption(option1);
        monthArrTemp = monthArr;
    };
    updateMycharts1();
};
const filterChart2 = () => {
    let conditionsChart2 = {};
    let timeOfConditionsChart2 = {};
    forms[1].querySelectorAll('[name="arrivers"]').forEach((element) => {
        conditionsChart2[element.value] = element.checked;
    });
    forms[1].querySelectorAll('[name="date2"]').forEach((element) => {
        timeOfConditionsChart2[element.value] = element.checked;
    });
    const updateMycharts2 = () => {
        let monthArrTemp = [...monthArr];
        let howMuchDays;
        if (conditionsChart2.confirmed) {
            updateOption(option2, [data2, data3, data], 2);
        } else {
            updateOption(option2, [data2, data3, data]);
        }
        for (let key in timeOfConditionsChart2) {
            if (timeOfConditionsChart2[key]) howMuchDays = key;
        }
        switch (howMuchDays) {
            case 'untilNow':
                break;
            case 'year':
                monthArrTemp.splice(0, 5);
                break;
            case 'sixMonths':
                monthArrTemp.splice(0, 10);
                break;
            case 'threeMonths':
                monthArrTemp.splice(0, 20);
                break;
            case 'lastMonth':
                monthArrTemp.splice(0, 25);
                break;
        }
        option2.xAxis.data = monthArrTemp;
        myChart2.setOption(option2);
        monthArrTemp = monthArr;
    };
    updateMycharts2();
};
const filterChart3 = () => {
    let conditionsChart3 = {};
    let timeOfConditionsChart3 = {};
    forms[2].querySelectorAll('[name="sickness"]').forEach((element) => {
        conditionsChart3[element.value] = element.checked;
    });
    forms[2].querySelectorAll('[name="annallisez"]').forEach((element) => {
        timeOfConditionsChart3[element.value] = element.checked;
    });
    const updateMycharts3 = () => {
        if (conditionsChart3.hardcorePatient) {
            updateOption(option3, [data3, data, data2], 5);
            if (timeOfConditionsChart3.absolutNum) {
                updateOption(option3, [data3, data, data2], 12);
            }
        } else if (timeOfConditionsChart3.absolutNum) {
            updateOption(option3, [data3, data, data2], 7);
        }
        if (conditionsChart3.activePatient && timeOfConditionsChart3.hundredNum) {
            updateOption(option3, [data3, data, data2]);
        }
        myChart3.setOption(option3);
    };
    updateMycharts3();
};
const filterChart4 = () => {
    let timeOfConditionsChart4 = {};
    let howMuchDays;
    let monthArrTemp = [...monthArr];
    forms[3].querySelectorAll('[type="radio"]').forEach((element) => {
        timeOfConditionsChart4[element.value] = element.checked;
    });
    for (let key in timeOfConditionsChart4) {
        if (timeOfConditionsChart4[key]) howMuchDays = key;
    }
    switch (howMuchDays) {
        case 'untilNow':
            break;
        case 'year':
            monthArrTemp.splice(0, 5);
            break;
        case 'sixMonths':
            monthArrTemp.splice(0, 10);
            break;
        case 'threeMonths':
            monthArrTemp.splice(0, 20);
            break;
        case 'lastMonth':
            monthArrTemp.splice(0, 25);
            break;
    }
    option4.xAxis.data = monthArrTemp;
    myChart4.setOption(option4);
    monthArrTemp = monthArr;
};
const filterChart5 = () => {
    let conditionsChart5 = {};
    let timeOfConditionsChart5 = {};
    let howMuchDays, divisions;
    forms[4].querySelectorAll('[name="divisions"]').forEach((element) => {
        conditionsChart5[element.value] = element.checked;
    });
    forms[4].querySelectorAll('[name="date5"]').forEach((element) => {
        timeOfConditionsChart5[element.value] = element.checked;
    });
    for (let el in conditionsChart5) {
        if (conditionsChart5[el]) divisions = el;
    }
    for (let key in timeOfConditionsChart5) {
        if (timeOfConditionsChart5[key]) howMuchDays = key;
    }
    switch (divisions) {
        case 'confirmed':
            updateOption(option5, [option5.series[0].data, option5.series[1].data], 1 / 1.1, false);
            break;
        case 'died':
            updateOption(option5, [option5.series[0].data, option5.series[1].data], 1 / 1.2, false);
            break;
        case 'inhailed':
            updateOption(option5, [option5.series[0].data, option5.series[1].data], 1 / 1.3, false);
            break;
        case 'critical':
            updateOption(option5, [option5.series[0].data, option5.series[1].data], 1 / 1.4, false);
            break;
        case 'sick':
            updateOption(option5, [option5.series[0].data, option5.series[1].data], 1 / 1.5, false);
            break;
    }
    switch (howMuchDays) {
        case 'untilNow':
            updateOption(option5, [option5.series[0].data, option5.series[1].data], 1.1, false);
            break;
        case 'year':
            updateOption(option5, [option5.series[0].data, option5.series[1].data], 1.2, false);
            break;
        case 'sixMonths':
            updateOption(option5, [option5.series[0].data, option5.series[1].data], 1.3, false);
            break;
        case 'threeMonths':
            updateOption(option5, [option5.series[0].data, option5.series[1].data], 1.4, false);
            break;
        case 'lastMonth':
            updateOption(option5, [option5.series[0].data, option5.series[1].data], 1.5, false);
            break;
    }
    myChart5.setOption(option5);
};
const divideValueBy = (data, divider, toRound) => {
    let result = [];
    for (let i = 0; i < data?.length; i++) {
        if (toRound) result[i] = Math.round(data[i] / divider);
        else result[i] = (data[i] / divider).toFixed(2);
    }
    return result;
};
const updateOption = (option, newData, divider = 1, toRound = true) => {
    for (let i = 0; i < newData.length; i++) {
        option.series[i].data = divideValueBy(newData[i], divider, toRound);
    }
};
