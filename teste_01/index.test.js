const test = require('tape')
const func = require('./teste')

test('Aplicar desconto padrão', (t) => {
    t.assert(func.aplicarDesconto(10,5) === 5, "Desconto 01")
    t.end()
})