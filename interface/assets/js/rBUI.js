function showdest()
{
        document.getElementById("hide-dest-entry").style.display="block";
        window.location.href="#dest-entry";
//window.scrollTo(x-coord, y-coord);
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


$(document).ready(function(){
        document.getElementById("hide-dest-entry").style.display="none";
        document.getElementById("hide-target-entry").style.display="none";
});

