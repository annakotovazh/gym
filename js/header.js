document.write('\
\
<div class="logo">\
<img src="images/logo_image.png" alt="arm in a target" id="logo">\
    <a href="index.html">ML Strength</a>\
</div>\
<div class="menu" id="menu">\
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">\
        <i class="fa fa-bars"></i>\
    </a>\
    <ul id="myLinks">\
        <li><a href="index.html">Home</a></li>\
        <li><a href="about.html">About</a></li>\
        <li><a href="classes.html">Classes</a></li>\
        <li><a href="contact.html">Contact</a></li>\
        <li><a href="blog.html">Blog</a></li>\
    </ul>\
</div>\
');

function myFunction() {
  var x = document.getElementById("myTopnav");
  
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }

}