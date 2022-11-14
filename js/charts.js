let chartDom = document.getElementById('graph');
let myChart = echarts.init(chartDom);
let option;

let base = +new Date(2022, 3, 1);
let updatedNow = new Date();
let oneDay = 24 * 3600 * 1000;
let valueBase = Math.random() * 300;
let valueBase2 = Math.random() * 50;
let valueBase3 = Math.random() * 100;
let data = [];
let data2 = [];
let data3 = [];
let datesArr = [];
// console.log(new Date(+base + oneDay));
// console.log(updatedNow);
// console.log((updatedNow - base) / oneDay);

// for (let i = +base; i <= +updatedNow; i += oneDay) {
//     datesArr[i] = new Date(i);
//     // console.log(datesArr[i]);
// }
console.log(datesArr);
for (let i = 1; i < 10; i++) {
    let now = new Date((base += oneDay));
    let dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
    // console.log(dayStr);
    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);
    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push([dayStr, valueBase2]);
    valueBase3 = Math.round((Math.random() - 0.5) * 20 + valueBase3);
    valueBase3 <= 0 && (valueBase3 = Math.random() * 100);
    data3.push([dayStr, valueBase3]);
}

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
    // legend: {
    //   data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    // },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'time',
            // data: datesArr,
        },
    ],
    // boundaryGap: false,
    // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

    // axisPointer: {
    //     value: '2020-3-6',
    //     snap: true,
    //     lineStyle: {
    //         color: '#7581BD',
    //         width: 2,
    //     },
    // label: {
    //     show: true,
    //     formatter: function (params) {
    //         return echarts.format.formatTime('yyyy-MM-dd', params.value);
    //     },
    //     backgroundColor: '#7581BD',
    // },
    // handle: {
    //     show: true,
    //     color: '#7581BD',
    // },
    // },

    yAxis: [
        {
            type: 'value',
        },
    ],
    series: [
        {
            name: 'קשה',
            type: 'line',
            stack: 'a',
            color: '#50cbfd',
            areaStyle: {},
            data: data,
        },
        {
            name: 'בינוני',
            type: 'line',
            stack: 'a',
            color: '#b6ca51',
            areaStyle: {},
            data: data2,
        },
        {
            name: 'קל',
            type: 'line',
            stack: 'a',
            color: '#237d7d',
            areaStyle: {},
            data: data3,
        },
    ],
};

/*
option = {
    // title: {
    //     left: 'center',
    //     text: 'Tootip and dataZoom on Mobile Device',
    // },
    // legend: {
    //     top: 'bottom',
    //     data: ['Intention'],
    // },
    tooltip: {
        triggerOn: 'none',
        position: function (pt) {
            return [pt[0], 130];
        },
    },
    toolbox: {
        left: 'center',
        itemSize: 25,
        top: 55,
        feature: {
            dataZoom: {
                yAxisIndex: 'none',
            },
            restore: {},
        },
    },
    xAxis: {
        type: 'time',
        axisPointer: {
            value: '2016-10-7',
            snap: true,
            lineStyle: {
                color: '#7581BD',
                width: 2,
            },
            label: {
                show: true,
                formatter: function (params) {
                    return echarts.format.formatTime('yyyy-MM-dd', params.value);
                },
                backgroundColor: '#7581BD',
            },
            handle: {
                show: true,
                color: '#7581BD',
            },
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            inside: true,
        },
        splitLine: {
            show: true,
        },
        axisLabel: {
            inside: true,
            formatter: '{value}\n',
        },
        z: 10,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        // top: 110,
        // left: 15,
        // right: 15,
        height: 160,
        containLabel: true,
    },
    // dataZoom: [
    //     {
    //         type: 'inside',
    //         throttle: 50,
    //     },
    // ],
    series: [
        {
            name: 'Fake Data',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
                color: '#0770FF',
            },
            stack: 'a',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(58,77,233,0.8)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(58,77,233,0.3)',
                    },
                ]),
            },
            data: data,
        },
        {
            name: 'Fake Data',
            type: 'line',
            smooth: true,
            stack: 'a',
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
                color: '#F2597F',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(213,72,120,0.8)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(213,72,120,0.3)',
                    },
                ]),
            },
            data: data2,
        },
    ],
};

*/
option && myChart.setOption(option);
window.addEventListener('resize', myChart.resize);

/*
let base = +new Date(2016, 9, 3);
let oneDay = 24 * 3600 * 1000;
let valueBase = Math.random() * 300;
let valueBase2 = Math.random() * 50;
let data = [];
let data2 = [];
for (let i = 1; i < 10; i++) {
    let now = new Date((base += oneDay));
    let dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);
    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push([dayStr, valueBase2]);
}
option = {
    // title: {
    //     left: 'center',
    //     text: 'Tootip and dataZoom on Mobile Device',
    // },
    legend: {
        top: 'bottom',
        data: ['Intention'],
    },
    tooltip: {
        triggerOn: 'none',
        position: function (pt) {
            return [pt[0], 130];
        },
    },
    toolbox: {
        left: 'center',
        itemSize: 25,
        top: 55,
        feature: {
            dataZoom: {
                yAxisIndex: 'none',
            },
            restore: {},
        },
    },
    xAxis: {
        type: 'time',
        // axisPointer: {
        //     value: '2016-10-7',
        //     snap: true,
        //     // lineStyle: {
        //     //     color: '#7581BD',
        //     //     width: 2,
        //     // },
        //     label: {
        //         show: true,
        //         formatter: function (params) {
        //             return echarts.format.formatTime('yyyy-MM-dd', params.value);
        //         },
        //         backgroundColor: '#7581BD',
        //     },
        //     // handle: {
        //     //     show: true,
        //     //     color: '#7581BD',
        //     // },
        // },
        splitLine: {
            show: true,
        },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            inside: true,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            inside: true,
            formatter: '{value}\n',
        },
        z: 10,
    },
    grid: {
        top: 110,
        left: 15,
        right: 150,
        height: 160,
    },
    // dataZoom: [
    //     {
    //         type: 'inside',
    //         throttle: 50,
    //     },
    // ],
    series: [
        {
            name: 'Fake Data',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
                color: '#0770FF',
            },
            stack: 'a',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(58,77,233,0.8)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(58,77,233,0.3)',
                    },
                ]),
            },
            data: data,
        },
        {
            name: 'Fake Data',
            type: 'line',
            smooth: true,
            stack: 'a',
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
                color: '#F2597F',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(213,72,120,0.8)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(213,72,120,0.3)',
                    },
                ]),
            },
            data: data2,
        },
    ],
};

option && myChart.setOption(option);
*/
