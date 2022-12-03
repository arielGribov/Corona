let startDay = new Date(2020, 2, 1);
let monthArr = [];

let valueBase = Math.random() * 300;
let valueBase2 = Math.random() * 50;
let valueBase3 = Math.random() * 100;
let data = [];
let data2 = [];
let data3 = [];
let theme = isDarkModeOn ? 'dark' : 'light';

for (let i = 1; i < 50; i++) {
    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push(Math.round(valueBase));
    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push(Math.round(valueBase2));
    valueBase3 = Math.round((Math.random() - 0.5) * 20 + valueBase3);
    valueBase3 <= 0 && (valueBase3 = Math.random() * 100);
    data3.push(Math.round(valueBase3));
}
for (let i = 0; i < 45; i++) {
    const date = new Date(startDay.getFullYear(), startDay.getMonth(), startDay.getDate() + i);
    monthArr[i] = [date.getDate(), date.getMonth() + 1].join('.');
}

const myChart1 = echarts.init(document.getElementById('graph1'), theme);
const option1 = {
    color: ['#50cbfd', '#b6ca51', '#1c7d7e'],
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        name: 'תאריך',
        nameLocation: 'center',
        nameTextStyle: {
            verticalAlign: 'top',
            padding: 18,
            fontSize: 14,
        },
        boundaryGap: true,
        data: monthArr,
    },
    yAxis: {
        type: 'value',
        name: 'מספר\nמאושפזים',
        nameTextStyle: {
            align: 'right',
        },
    },
    series: [
        {
            name: 'קשה',
            type: 'line',
            areaStyle: {},
            stack: 'Total',
            data: data,
        },
        {
            name: 'בינוני',
            type: 'line',
            areaStyle: {},
            stack: 'Total',
            data: data2,
        },
        {
            name: 'קל',
            type: 'line',
            areaStyle: {},
            stack: 'Total',
            data: data3,
        },
    ],
};
myChart1.setOption(option1);
window.addEventListener('resize', myChart1.resize);

const myChart2 = echarts.init(document.getElementById('graph2'), theme);
const option2 = {
    color: ['#50cbfd', '#b6ca51', '#1c7d7e'],
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        name: 'תאריך',
        nameLocation: 'center',
        nameTextStyle: {
            verticalAlign: 'top',
            padding: 18,
            fontSize: 14,
        },
        boundaryGap: true,
        data: monthArr,
    },
    yAxis: {
        type: 'value',
        name: 'תושבים\nנכנסים',
        nameTextStyle: {
            align: 'right',
        },
    },
    series: [
        {
            name: 'לא מחוסנים',
            type: 'line',
            data: data2,
        },
        {
            name: 'מחוסנים ללא תוקף',
            type: 'line',
            data: data3,
        },
        {
            name: 'מחוסנים',
            type: 'line',
            data: data,
        },
    ],
};
myChart2.setOption(option2);
window.addEventListener('resize', myChart2.resize);

const myChart3 = echarts.init(document.getElementById('graph3'), theme);
const option3 = {
    color: ['#50cbfd', '#b6ca51', '#1c7d7e'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        name: 'קבוצת גיל',
        nameLocation: 'center',
        nameTextStyle: {
            verticalAlign: 'top',
            padding: 18,
            fontSize: 14,
        },
        axisLabel: {
            rotate: 45,
        },
        boundaryGap: true,
        data: ['5-11', '12-15', '16-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90+'],
    },
    yAxis: {
        type: 'value',
        name: 'מספר\nחולים\nפעילים',
        nameTextStyle: {
            align: 'right',
        },
    },
    series: [
        {
            name: 'לא מחוסנים',
            type: 'bar',
            data: data3,
        },
        {
            name: 'מחוסנים ללא תוקף',
            type: 'bar',
            data: data,
        },
        {
            name: 'מחוסנים',
            type: 'bar',
            data: data2,
        },
    ],
};
myChart3.setOption(option3);
window.addEventListener('resize', myChart3.resize);

const myChart4 = echarts.init(document.getElementById('graph4'), theme);
const option4 = {
    color: ['#1c7d7e', '#ff7d67'],
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        name: 'תאריך',
        nameLocation: 'center',
        nameTextStyle: {
            verticalAlign: 'top',
            padding: 18,
            fontSize: 14,
        },
        boundaryGap: true,
        data: monthArr,
    },
    yAxis: {
        type: 'value',
        name: 'מספר\nנפטרים',
        nameTextStyle: {
            align: 'right',
        },
    },
    series: [
        {
            name: 'נפטרים',
            type: 'bar',
            data: data3,
        },
        {
            name: 'ממוצע נע נפטרים',
            type: 'line',
            data: data2,
        },
    ],
};
myChart4.setOption(option4);
window.addEventListener('resize', myChart4.resize);

const myChart5 = echarts.init(document.getElementById('graph5'), theme);
const option5 = {
    color: ['#50cbfd', '#b6ca51'],
    tooltip: {
        trigger: 'axis',
        valueFormatter: function (value) {
            return Math.abs(parseFloat(value));
        },
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: [
        {
            name: '% סה"כ',
            nameLocation: 'center',
            nameTextStyle: {
                verticalAlign: 'top',
                padding: 18,
                fontSize: 14,
            },
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: '#ededed',
                },
            },
            min: -30,
            max: 30,
            axisLabel: {
                formatter: function (value) {
                    return Math.abs(parseFloat(value));
                },
            },
        },
    ],
    yAxis: [
        {
            name: 'קבוצת\nגיל',
            type: 'category',
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ededed',
                },
            },
            axisTick: {
                show: false,
            },

            nameGap: 5,
            data: ['0-9', '9-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90+'],
        },
    ],
    series: [
        {
            name: 'גברים',
            type: 'bar',
            barWidth: '35%',
            stack: 'Total',
            label: {
                show: true,
                position: 'right',
                formatter: function (value) {
                    return value.value + '%';
                },
            },
            data: [3.2, 55, 3.4, 3.7, 22.9, 4.5, 4.2, 18.1, 6.66, 10],
        },
        {
            name: 'נשים',
            type: 'bar',
            stack: 'Total',
            label: {
                show: true,
                position: 'left',
                formatter: function (value) {
                    return Math.abs(parseFloat(value.value)) + '%';
                },
            },
            data: [-16.2, -11.3, -8, -15.3, -1.9, -2.3, -17.1, -5.89, -21.9, -1.11],
        },
    ],
};
myChart5.setOption(option5);
window.addEventListener('resize', myChart5.resize);
