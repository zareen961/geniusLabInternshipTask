export const barOptions = {
    chart: {
        id: 'basic-bar',
    },
    xaxis: {
        labels: {
            show: false,
        },
        categories: [1991, 1992, 1993, 1994, 1995, 1996],
    },
    yaxis: { show: false },
    grid: { show: false },
    legend: { show: false },
    fill: {
        colors: ['#3e97ff', '#3e97ff'],
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '25%',
            borderRadius: 5,
        },
    },
}

export const barSeries = [
    {
        name: 'series-1',
        data: [30, 20, 34, 30, 9, 30],
    },
]

export const donutOptions = {
    chart: {
        type: 'donut',
    },
    xaxis: {
        labels: {
            show: false,
        },
    },
    legend: { position: 'left' },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    // width: 200,
                },
                legend: {
                    position: 'left',
                },
            },
        },
    ],
    colors: ['#3e97ff', '#ddd', '#888'],
    labels: ['HTML', 'React', 'CSS'],
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        donut: {
            labels: {
                show: true,
            },
            total: {
                show: true,
                showAlways: true,
                label: '+',
                fontSize: '22px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: '#000',
                formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                        return a + b
                    }, 0)
                },
            },
        },
    },
}

export const donutSeries = [33, 34, 33]

export const areaOptions = {
    chart: {
        type: 'area',
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },

    xaxis: {
        labels: {
            show: false,
        },
        type: 'datetime',
        categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z',
        ],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm',
        },
    },
}

export const areaSeries = [
    {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41],
    },
]

export const doubleBarSeries = [
    {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
]

export const doubleBarOptions = {
    chart: {
        type: 'bar',
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
        },
    },
    colors: ['#3e97ff', '#ccc'],

    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return '$ ' + val + ' thousands'
            },
        },
    },
}
