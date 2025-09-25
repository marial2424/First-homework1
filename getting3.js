function calculator (a, b, operation) {
  if (typeof a === 'number') {
        
    } else {
        return false
    }
    if (typeof b === 'number') {
        
    }else {
        return false
    }
    if (typeof operation === 'string') {
        
    }else {
        return false
    }
    if ( operation === '+' ) {
     return a + b
    } else
    if ( operation === '-') {
        return a - b
    } else
    if ( operation === '*') {
        return a * b
    } else 
    if ( operation === '/') {
        return a / b
    } else{
        return false
    }
  
    
}


console.log(calculator(230, 450, '*'))
console.log(calculator(23, '23', '-'))
console.log(calculator(24, 4, '/'))
console.log(calculator(230, 40, 'ana'))
console.log(calculator('ele', 20, '*'))
