function hidePic(){
var z=document.getElementById("load_picture").style.display = "none";
z.style.transition = "all 2s"; 
}

function showPer() {
    var x = document.getElementById("PerInfo");
    var y = document.getElementById("main_div");
    if (x.style.display !== "none" && y.style.display !== "block") {
      x.style.display = "block";
      y.style.display = "none";
      
        } else {
          x.style.display = "none";
          y.style.display = "block";
        }
      };

function showEd(){
    var a=document.getElementById("education");
    if(a.style.display ==="none"){
        a.style.display= "block";
    } else{
        a.style.display = "none";
    }
}
function showWor() {
    var b = document.getElementById("workingEx");
    var c = document.getElementById("aside_div");
    if (b.style.display !== "none" && c.style.display !== "block") {
      b.style.display = "block";
      c.style.display = "none";
      
        } else {
          b.style.display = "none";
          c.style.display = "block";
        }
      };      
function showSkills() {
    var d = document.getElementById("techSkills");
    var e = document.getElementById("aside_div2");
    if (d.style.display !== "none" && e.style.display !== "block") {
      d.style.display = "block";
      e.style.display = "none";
      
        } else {
          d.style.display = "none";
          e.style.display = "block";
        }
      };      
function showContact() {
    var f = document.getElementById("contactInfo");
    var g = document.getElementById("footer_div");
    if (f.style.display !== "none" && g.style.display !== "block") {
      f.style.display = "block";
      g.style.display = "none";
      
        } else {
          f.style.display = "none";
          g.style.display = "block";
        }
      };      

