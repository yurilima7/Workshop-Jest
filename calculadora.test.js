const Calculadora = require('./calculadora')

describe('Calculadora', () => {

  calculadora = new Calculadora()
  
  it('Deverá retornar a soma de dois números', () => {
    //Seu código aqui
    expect(calculadora.sum(2, 2)).toBe(4)
  })

  it('Deverá retornar a subtração de dois números', () => {
    //Seu código aqui
    expect(calculadora.sub(2, 2)).toBe(0)
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    //Seu código aqui
    expect(calculadora.mult(2, 2)).toBe(4)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    //Seu código aqui
    // expect(calculadora.div(2, 0)).toBe('Falha')
    expect(calculadora.div(0, 2)).toBe(0)
  })
})