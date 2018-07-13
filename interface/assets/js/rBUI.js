function showdest()
{
        document.getElementById("hide-dest-entry").style.display="block";
        window.location.href="#dest-entry";
}

function showtarget()
{
        document.getElementById("hide-target-entry").style.display="block";
        window.location.href="#target-entry";
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

$(document).ready(function(){
        document.getElementById("hide-dest-entry").style.display="none";
        document.getElementById("hide-target-entry").style.display="none";

	/*2nd todo*/
      $(".icofont icofont-ui-delete").on("click", function() {

          $(this).parent().parent().parent().fadeOut();
      });
      var i = 7;
      $("#add-btn").on("click", function() {
          $(".md-form-control").removeClass("md-valid");
          var task = $('.add_destination').val();
          if (task == "") {
              alert("Please enter a Destination");
          } else {
              var add_destination = $('<div class="destination-list" id="' + i + '"><div class="checkbox-fade fade-in-primary"><span>' + task + '</span><div class="f-right"><a href="#!" class="delete_destination"><i class="icofont icofont-ui-delete"></i></a></div><div class="f-right"><a href="#!" class="edit_destination"><i class="icofont icofont-pencil-alt-5" ></i></a></div></div>');
              i++;
              $(add_destination).appendTo(".new-destination").hide().fadeIn(300);
              $('.add_destination').val('');
          }
      });

      $(".delete_todolist").on("click", function() {


          $(this).parent().parent().fadeOut();
      });

});

