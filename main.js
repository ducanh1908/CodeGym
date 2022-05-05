//Cách 1 : gọi hàm inline
// function doSomething() {
//     var selectList = document.getElementById("list__car").value;
//     alert(selectList);
// }
//cách 2
//  var selectList = document.getElementById("list__car");
//     selectList.addEventListener("change", changeFunction);
//     function changeFunction(){
//         var selectValue = document.getElementById("list__car").value;
//         alert(selectValue);
//     }
// var selectList = document.getElementById("list__car");
// selectList.addEventListener("change", function (){
//     var selectValue = document.getElementById("list__car").value;
//     alert(selectValue);
// })
// let selectList = document.getElementById("list__car");
// selectList.addEventListener("change", function (){
//     let selectValue = document.getElementById("list__car").value;
//     alert(selectValue);
// })
// let mouseClick = document.getElementById("mouse");
// mouseClick.addEventListener("mouseover",mouseover);
// mouseClick.addEventListener("mouseout",mouseout);
//
// function mouseover() {
//     document.getElementById("mouse").style.color = "red";
// }
// function mouseout() {
//     document.getElementById("mouse").style.color = "blue";
// }
let clickMe = document.getElementById("mouse");
clickMe.addEventListener("click",function (){

});