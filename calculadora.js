class Calculadora {
  //Implemente aqui
  sub(a, b) {
    return a - b
  }
  
  sum(a, b) {
    return a + b
  }

  mult(a, b) {
    return a * b
  }

  div(a, b) {
    if (b === 0) {
      return 'Falha'
    } 

    return a / b
  };
} 

module.exports = Calculadora