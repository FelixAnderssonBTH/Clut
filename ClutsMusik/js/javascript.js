$("#window").css("overflow", "hidden");
$("#button").show();
$("#button2").show();


document.getElementById("window").style.display = "block";
document.getElementById("window").style.overflow = "hidden";
var kör;
kör = setInterval(auto, 7000);
function auto(){
  var slider = $("#imgs");

  if (plats==0) {
    var wi = document.getElementById('window').offsetWidth;
    slider.animate({right::(wi-wi)+wi},2000)

    plats++;


  }else if (plats==1) {
    var wi = document.getElementById('window').offsetWidth;
    slider.animate({right:wi+wi},2000)

    plats++;

  }else if (plats==2) {
    var wi = document.getElementById('window').offsetWidth;
    slider.animate({right:wi-wi},2000)

    plats=0;

  }
  console.log(plats);
}
var plats = 0;

$("#button2").click(function(){

var slider = $("#imgs");

if (plats==0) {
  slider.animate({right:"+=804"},2000)

  plats++;


}else if (plats==1) {
  slider.animate({right:"+=804"},2000)

  plats++;

}else if (plats==2) {
  slider.animate({right:"-=1608"},2000)

  plats=0;

}
console.log(plats);
});
$("#button").click(function(){

var slider = $("#imgs");
if (plats==0) {
  slider.animate({right:"+=1608"},2000)


  plats=2;


}else if (plats==1) {
  slider.animate({right:"-=804"},2000)


  plats--;


}else if (plats==2) {
  slider.animate({right:"-=804"},2000)


  plats--;

}
console.log(plats);
});
