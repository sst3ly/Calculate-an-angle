var input1 = getElementById("input1").value;
var input2 = getElementById("input2").value;
var input3 = getElementById("input3").value;

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

function calculate() {
  var tah = theta_ah(input1,input3)
  var rah = radian_ah(input1,input3)
  var toh = theta_oh(input2,input3)
  var roh = radian_oh(input2,input3)
  var toa = theta_oa(input2,input1)
  var roa = radian_oa(input2,input1)
  getElementById("tah").innerHTML = "In degrees, the angle of adjecent and hypotenuse lengths is: " + tah
  getElementById("rah").innerHTML = "In radians, the angle of adjecent and hypotenuse lengths is: " + rah
  getElementById("toa").innerHTML = "In degrees, the angle of opposite and adjecent lengths is: " + toa
  getElementById("toa").innerHTML = "In radians, the angle of opposite and adjecent lengths is: " + roa
}
