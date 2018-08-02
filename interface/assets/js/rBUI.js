function showdest()
{
	var x = document.getElementById("hide-dest-entry");
	if (x.style.display === "none") {
        	x.style.display = "block";
	} else {
        	x.style.display = "none";
	}
        window.location.href="#dest-entry";
}

function showtarget()
{
	var x = document.getElementById("hide-target-entry");
	if (x.style.display === "none") {
        	x.style.display = "block";
	} else {
        	x.style.display = "none";
	}
        window.location.href="#target-entry";
}

function showedittime()
{
	var x = document.getElementById("edit-time-div");
	if (x.style.display === "none") {
        	x.style.display = "block";
		document.getElementById("edit-time-div").innerHTML = "<label class='col-sm-4 col-form-label'>Select Time: </label><input type='time' id='setting-time' name='setting-time' required />";
		document.getElementById("show-edit-time").innerHTML = "Close";
	} else {
        	x.style.display = "none";
		document.getElementById("edit-time-div").innerHTML = " ";
		document.getElementById("show-edit-time").innerHTML = "Edit";
	}
}

function hidedest()
{
        document.getElementById("hide-dest-entry").style.display="none";
        window.location.href="#dest-entry";
}

function hidetarget()
{
        document.getElementById("hide-target-entry").style.display="none";
        window.location.href="#target-entry";
}

$(".card-header-right .icofont-close-circled").on('click', function() {
	var $this = $(this);
        var port = $($this.parents('.card').css("display","none"));
});

$(".icofont icofont-ui-delete").on("click", function() {
          $(this).parent().parent().parent().fadeOut();
      });

//Have to get rid of this function and replace it with an ajax call
$("#add-btn").on("click", function() {
	$(".md-form-control").removeClass("md-valid");
        var destination = $('.add_dest_field').val();
        if (destination == "") {
		alert("Please enter a Destination");
        } else {
	        var add_dest = $('<div class="destination-list"><span id="dest-entry-1"> ' + destination + '</span><div class="f-right"><a href="#!" class="edit_destination"><img class="img-dest-buttons" src="assets/images/edit.svg"></img></a>&nbsp;&nbsp;&nbsp;<a href="#!" class="delete_destination"><img class="img-dest-buttons" src="assets/images/recycle.svg"></img></a></div></div>');
        	$(add_dest).appendTo(".new-destination").hide().fadeIn(300);
                $('.add_dest_field').val('');
        }
});

$(".delete_destination").on("click", function() {
	$(this).parent().parent().fadeOut();
});

$('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2500,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });

//Start Graphing Section
var morrisLine;
initMorris();
getMorrisRange(); 

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

function getMorrisRange(histChoice) {
	$.ajax({
            url: 'pANxv/create-historical-graph.php',
            type: "POST",
            dataType: "json",
            data: { range : histChoice },
            success: function (data) {
	            setMorris(data);
            }
	});
}
//End Graphing Section

//back to main chatbar
    $('.back_logList').on('click', function() {
        var my_val = $('.pcoded').attr('vertical-placement');
        if (my_val == 'right') {
            var options = {
                direction: 'left'
            };
        } else {
            var options = {
                direction: 'right'
            };
        }
        $('.showChat_inner').toggle('slide', options, 500);
        $('.showChat').css('display', 'block');
    });
// /*chatbar js end*/

if ($(window).width() < 992) {
    $(".mobile-options-hide").on('click', function() {
        $(".nav-right").slideToggle('slow');
    });
}
    /*chat box scroll*/
    var a = $(window).height() - 50;
    $(".main-friend-list").slimScroll({
        height: a,
//        height: "80%",
        allowPageScroll: false,
        wheelStep: 10,
	touchScrollStep : 100,
        color: 'transparent'
    });

function showtargetlist (devicetype) {
	$.ajax({
            url: 'pANxv/target-list.php',
            type: "POST",
            data: { type : devicetype },
//	    encode: true,
            success: function (data) {
		$('#listtargets').html(data);
            }
	});
}


function showtargetlog (logidvalue) {
	$.ajax({
            url: 'pANxv/log-contents.php',
            type: "POST",
            data: { logid : logidvalue },
//	    encode: true,
            success: function (data) {
		$('#logcontents').html(data);
            }
	});
}


$(document).ready(function(){
	$('#listtargets').load('pANxv/target-list.php');
});
