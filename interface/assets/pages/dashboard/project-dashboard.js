$(document).ready(function() {

    // Extra chart
    Morris.Area({
        element: 'morris-extra-area',
        data: [{
                period: '2010',
                iphone: 0,
                ipad: 0,
                itouch: 0,
                android: 0
            }, {
                period: '2011',
                iphone: 50,
                ipad: 15,
                itouch: 5,
                android: 11
            }, {
                period: '2012',
                iphone: 20,
                ipad: 50,
                itouch: 65,
                android: 67
            }, {
                period: '2013',
                iphone: 60,
                ipad: 12,
                itouch: 7,
                android: 20
            }, {
                period: '2014',
                iphone: 30,
                ipad: 20,
                itouch: 120,
                android: 89
            }, {
                period: '2015',
                iphone: 250,
                ipad: 80,
                itouch: 40,
                android: 76
            }, {
                period: '2016',
                iphone: 100,
                ipad: 10,
                itouch: 10,
                android: 46
            }, {
                period: '2017',
                iphone: 10,
                ipad: 10,
                itouch: 40,
                android: 100
            }

        ],
        lineColors: ['#fb9678', '#7E81CB', '#01C0C8', '#c57ecb'],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch', 'android'],
        labels: ['Site A', 'Site B', 'Site C', 'android'],
        pointSize: 2,
        lineWidth: 0,
        resize: true,
        fillOpacity: 0.5,
        behaveLikeLine: true,
        gridLineColor: '#5FBEAA',
        hideHover: 'auto'

    });
});
