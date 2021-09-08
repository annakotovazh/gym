
 

document.write('\
\
<div class="logo">\
    <a href="index.html">The Gym</a>\
</div>\
<div class="menu" id="menu">\
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">\
        <i class="fa fa-bars"></i>\
    </a>\
    <ul id="myLinks">\
        <li><a href="about.html">About</a></li>\
        <li><a href="timetable.html">Timetable</a></li>\
        <li><a href="membership.html">Membership</a></li>\
        <li><a href="contact.html">Contact</a></li>\
    </ul>\
</div>\
');

function myFunction() {
    var x = document.getElementById("myTopnav");
    /*
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
      */

    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

  }
