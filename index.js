const convertToCelsius = (Fahrenheit) =>{
    const result = ((Fahrenheit - 32) *5/9)
    return result
}
function describeTemperature(tempInCelsius){
    let description
    if(Math.round(tempInCelsius)<0){
        description = "very cold"
    }else if(Math.round(tempInCelsius)<20){
        description = "cold"
    }else if(Math.round(tempInCelsius)<30){
        description = "warm"
    }else if(Math.round(tempInCelsius)<40){
        description = "hot"
    }else{Math.round(tempInCelsius)>=40
        description = "very hot"
    }
    return `the temperature is ${tempInCelsius} degrees and it is ${description}`
    
}
const userInput = prompt("Please enter a degree in Fahrenheit")
const convertedTemp=convertToCelsius(userInput)
const finalAnswer = describeTemperature(convertedTemp)
alert(finalAnswer)