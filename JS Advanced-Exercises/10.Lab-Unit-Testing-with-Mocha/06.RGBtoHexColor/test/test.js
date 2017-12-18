let expect = require('chai').expect;
let rgbToHexColor = require('../rgb-to-hex.js').rgbToHexColor;

describe('rgbToHexColor(red,green,blue)', function() {
    describe('Typical cases (valid input)', function() {
        it('should return #FF9EAA for (255, 158, 170)', function() {
            let expectHex = rgbToHexColor(255, 158, 170);
            let actualHex = '#FF9EAA';
            expect(expectHex).to.be.equal(actualHex);
        });

        it('should return #000000 for (0, 0, 0)', function() {
            let expectHex = rgbToHexColor(0, 0, 0);
            let actualHex = '#000000';
            expect(expectHex).to.be.equal(actualHex);
        });

        it('should return #0C0D0E for (12, 13, 14)', function() {
            let expectHex = rgbToHexColor(12, 13, 14);
            let actualHex = '#0C0D0E';
            expect(expectHex).to.be.equal(actualHex);
        });

        it('should return #FFFFFF for (255, 255, 255)', function() {
            let expectHex = rgbToHexColor(255, 255, 255);
            let actualHex = '#FFFFFF';
            expect(expectHex).to.be.equal(actualHex);
        });
    });

    describe("Special cases (invalid input)", function() {
        it("should expect undefined on (-1, 0, 0), (0, -1, 0), (0, -1, 0)", function() {
            let hex = rgbToHexColor((-1, 0, 0), (0, -1, 0), (0, -1, -5));
            expect(hex).to.be.undefined
        });
        it("should expect undefined on (256, 0, 0), (0, 256, 0), (0, 0, 256)", function() {
            let hex = rgbToHexColor((256, 0, 0), (0, 256, 0), (0, 0, 256));
            expect(hex).to.be.undefined
        });
        it("should expect undefined on (3.14, 0, 0), (0, 3.14, 0), (0, 0, 3.14)", function() {
            let hex = rgbToHexColor((3.14, 0, 0), (0, 3.14, 0), (0, 0, 3.14));
            expect(hex).to.be.undefined
        });
        it('should expect undefined on ("5", [3], {8:9}), (empty input)', function() {
            let hex = rgbToHexColor(("5", [3], { 8: 9 }));
            expect(hex).to.be.undefined
        });
    });
});