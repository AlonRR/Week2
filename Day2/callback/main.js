/*
//ex1
const pushPull = action => action()
const push = function () {
    console.log("pushing it!")
  }
  
const pull = function () {
    console.log("pulling it!")
  }
  
pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

//ex2
const getTime = callBack => callBack(new Date()) 

const returnTime = function (time) {
    alert('The current time is: ' + time)
}

getTime(returnTime)

//ex3
const myLog = []
const logData = logMe => myLog.push(logMe)

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
displayData(alert, logData, "I like to party")

//ex4  
setTimeout(function () {
    alert("I'm... saying stuff in delay")}, 1000);

//ex5 
const iLikeToSum = (x,y,z) => x+y+z

//ex6
const capitalize = word => word[0].toUpperCase()+word.slice(1).toLowerCase()
//for(let p = 0 ; p<word.length; p++) word[p].toLowercase 
console.log(capitalize("bOb")) // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

//ex7
const commentOnWeather = num => `It's ${determineWeather(num)}`

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }
commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"
*/
//ex8

const explode = (lightFunc, soundFunc, sound) =>{
    lightFunc()
    soundFunc(sound)
}
const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
const makeSound = (sound) => alert(sound)
explode(shineLight,makeSound,"BOOM")