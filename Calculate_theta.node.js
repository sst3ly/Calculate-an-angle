//radian_ah calculates degrees using adjacent and hypotenuse lengths(applies inverse cosine)
function theta_ah(a,h) {
 console.log((Math.acos(a/h))*180/Math.PI)
}
//theta_ah calculates radians using adjacent and hypotenuse lengths(applies inverse cosine)
function radian_ah(a,h) {
 console.log(Math.acos(a/h))
}
//radian_oh calculates degrees using opposite and hypotenuse lengths(applies inverse sine)
function theta_oh(o,h) {
 console.log((Math.asin(o/h))*180/Math.PI)
}
//theta_oh calculates radians using opposite and hypotenuse lengths(applies inverse sine)
function radian_oh(o,h) {
 console.log(Math.asin(o/h))
}
//radian_oa calculates degrees using opposite and adjacent lengths(applies inverse tan)
function theta_oa(o,a) {
 console.log((Math.atan(o/a))*180/Math.PI)
}
//theta_oa calculates radians using opposite and adjacent lengths(applies inverse tan)
function radian_oa(o,a) {
 console.log(Math.atan(o/a))
}
console.log(theta_oh(o,h))
