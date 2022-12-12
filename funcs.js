function isFive(num) {
  // Your code here
  if(num === 5 ){
    return true
  }
  else{
    return false
  }

}

function isOdd(number) {
  // Your code here
  if(typeof number === 'number'){
    if(number % 2 === 0){
      return false
    }
    else{
      return true
    }
  }
  else{
    throw new Error('Typer error: Number is not type of Number ')
  }
}

function myRange(min, max, step = 1) {
  // Your code here

  let newArray = []
  for(let i = min; i <= max; i += step ){
    newArray.push(i)
  }
  return newArray
}


module.exports = { isFive, isOdd, myRange };
