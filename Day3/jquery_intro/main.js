/*
//ex1,2
$(".listname").append("<button class='button'>Click me!</button>")

const removeName = function(){
    $(this).hide()
}

const addName = function(){
    const newName = $("#name").val()
    $('.listName').append("<li class='oneOfTheNames'>" + newName + "</li>")
    $('#name').val("")
}
$("#myButton").on("click", addName)
$("body").on("click",".oneOfTheNames",removeName)

//ex3
const makeBox = function(c){
    $("body").append(`<div class='box'></div>`)
    switchToRed()
}
const switchToPurple = function(element){
    element.css("background-color","purple")
}
const switchToRed = function(){
    $(".box").css("background-color","rgb(255, 0, 0)")
}
const colorCheck = function(){
    // console.log($(this).css("background-color"))
    const x = $(this).css("background-color")
    if(x ==="rgb(255, 0, 0)"){
        switchToRed()
        switchToPurple($(this))
    }
}
makeBox(1)
makeBox(2)
$("body").on("mouseenter",".box",colorCheck)

//ex4
const printer = function(){

}
const displayMe = function(){
    console.log($(this).data().instock)
    if($(this).data().instock){
    $("#items").append(`<div class=cart-item>${$(this).text()}</div>`)
    }
}

$("body").on("click",".item",displayMe)
*/
//ex5
const divMaker = function(obj){
    $("#basket").append(`<div class="${obj.color}">${obj.name}</div>`)
}

const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
]

for (let obj of fruits){
    divMaker(obj)
}