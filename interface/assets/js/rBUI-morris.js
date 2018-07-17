var morrisLine;
initMorris();
getMorris(); 

function initMorris() {
   morrisLine = Morris.Area({
    element: 'morris-extra-area',
	lineColors: ['#fb9678', '#7E81CB', '#01C0C8', '#c57ecb'],
        xkey: 'period',
        ykeys: ['targets', 'files', 'usage', 'duration'],
        labels: ['Targets', 'Files', 'Usage', 'Duration'],
        pointSize: 2,
        lineWidth: 2.5,
        resize: true,
        fillOpacity: 0.5,
        behaveLikeLine: true,
        gridLineColor: '#5FBEAA',
        hideHover: 'auto'
  });
}

function setMorris(data) {
  morrisLine.setData(data);
}

function getMorris() {
$.ajax({
            url: "pANxv/create-historical-graph.php",
            type: "POST",
            dataType: "json",
            success: function (data) {
	            setMorris(data);
            }
	});
}
