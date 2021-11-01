const app = require('../convertjs');

describe('Testing Flight Number Format', function(){

    

    it('Checking if first letter is Uppercase', function(){
        var calc = app.convert('qr514');
        console.log(calc);
        expect(calc[0]).toBe(calc[0].toUpperCase())
    });

    it('Checking if second letter is Uppercase', function(){
        var calc = app.convert('qr514');
        console.log(calc);
        expect(calc[1]).toBe(calc[1].toUpperCase())
    });

    it('Checking if third letter is Space', function(){
        var calc = app.convert('qr514');
        console.log(calc);
        expect(calc[2]).toBe(' ')
    });

    it('Checking if fourth letter is Number', function(){
        var calc = app.convert('qr514');
        console.log(calc);
        expect(isNaN(calc[3])).toBe(false)
    });

    it('Checking if fifth letter is Number', function(){
        var calc = app.convert('qr514');
        console.log(calc);
        expect(isNaN(calc[4])).toBe(false)
    });

    it('Checking if sixth letter is Number', function(){
        var calc = app.convert('qr514');
        console.log(calc);
        expect(isNaN(calc[5])).toBe(false)
    });

    it('Checking size', function(){
        var calc = app.convert('qr514');
        console.log(calc);
        expect(calc.length).toBeLessThan(7)
    });
});