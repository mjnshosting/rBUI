$(document).ready(function() {

    // Extra chart
    Morris.Area({
        element: 'morris-extra-area',
        data: [{
                period: '2009',
                targets: 0,
                files: 0,
                usage: 0,
                duration: 0
            }, {
                period: '2011',
                targets: 50,
                files: 15,
                usage: 5,
                duration: 11
            }, {
                period: '2012',
                targets: 20,
                files: 50,
                usage: 65,
                duration: 67
            }, {
                period: '2013',
                targets: 60,
                files: 12,
                usage: 7,
                duration: 20
            }, {
                period: '2014',
                targets: 30,
                files: 20,
                usage: 120,
                duration: 89
            }, {
                period: '2015',
                targets: 250,
                files: 80,
                usage: 40,
                duration: 76
            }, {
                period: '2016',
                targets: 100,
                files: 10,
                usage: 10,
                duration: 46
            }, {
                period: '2017',
                targets: 10,
                files: 10,
                usage: 40,
                duration: 100
            }

        ],
        lineColors: ['#fb9678', '#7E81CB', '#01C0C8', '#c57ecb'],
        xkey: 'period',
        ykeys: ['targets', 'files', 'usage', 'duration'],
        labels: ['Targets', 'Files', 'Usage', 'Duration'],
        pointSize: 2,
        lineWidth: 0,
        resize: true,
        fillOpacity: 0.5,
        behaveLikeLine: true,
        gridLineColor: '#5FBEAA',
        hideHover: 'auto'

    });
});
