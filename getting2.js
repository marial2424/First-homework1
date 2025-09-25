function temperature(Fahrenheit) {
    
    if (typeof Fahrenheit === "number") {
        const Celsius = (Fahrenheit - 32) * 5 / 9;
    return Celsius;    
    }else {
        return false
    }   
}

console.log(temperature(78))   
console.log(temperature("78"))
