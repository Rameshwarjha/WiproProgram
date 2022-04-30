describe('Testing Calculator', function () {

    it('Testing add function ', function () {
        expect(add(2, 2)).toBe(4);
    });
    it('Testing sub function ', function () {
        expect(sub(5, 2)).toBe(3);
    });
    it('Testing mul function ', function () {
        expect(mul(5, 2)).toBe(10);
    });
    it('Testing div function ', function () {
        expect(div(6, 0)).toBe(Infinity );
    });

})