// require('../app/helpers/appendCharCode')
import appendCharCode from '../app/helpers/appendCharCode'


describe('appendCharCode', () => {
    test('append char', () => {
        let result = appendCharCode('hell', 'o'.charCodeAt(0))
        expect(result).toMatch(/hello/)
    })

    test('append to empty string', () => {
        let result = appendCharCode('', 'A'.charCodeAt(0))
        expect(result).toMatch(/A/)
    })

    test('append back space', () => {
        let result = appendCharCode('Here we go0', 8)
        expect(result).toMatch(/Here we go/)
    })
})