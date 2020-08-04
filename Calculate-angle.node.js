//functions that calculate the angles:
function theta_ah(a,h) {
 console.log((Math.acos(a/h))*180/Math.PI)
}

function radian_ah(a,h) {
 console.log(Math.acos(a/h))
}

function theta_oh(o,h) {
 console.log((Math.asin(o/h))*180/Math.PI)
}

function radian_oh(o,h) {
 console.log(Math.asin(o/h))
}

function theta_oa(o,a) {
 console.log((Math.atan(o/a))*180/Math.PI)
}

function radian_oa(o,a) {
 console.log(Math.atan(o/a))
}

//the function that collects the answers and displays them:
function calculate() {
  var tah = parseInt(theta_ah(document.getElementById("input1"),document.getElementById("input1")).value);
  var rah = parseInt(radian_ah(document.getElementById("input3"),document.getElementById("input3")).value);
  var toh = parseInt(theta_oh(document.getElementById("input2"),document.getElementById("input3")).value);
  var roh = parseInt(radian_oh(document.getElementById("input2"),documnet.getElementById("input3")).value);
  var toa = parseInt(theta_oa(document.getElementById("input2"),document.getElementById("input1")).value);
  var roa = parseInt(radian_oa(document.getElementById("input2"),document.getElementById("input1")).value);
  document.getElementById("tah").innerHTML = "In degrees, the angle of adjecent and hypotenuse lengths is: " + tah
  document.getElementById("rah").innerHTML = "In radians, the angle of adjecent and hypotenuse lengths is: " + rah
  document.getElementById("toh").innerHTML = "In degrees, the angle of opposite and hypotenuse lengths is: " + toh
  document.getElementById("roh").innerHTML = "In radians, the angle of opposite and hypotenuse lengths is: " + roh
  document.getElementById("toa").innerHTML = "In degrees, the angle of opposite and adjecent lengths is: " + toa
  document.getElemenetById("roa").innerHTML = "In radians, the angle of opposite and adjecent lengths is " + roa
}
