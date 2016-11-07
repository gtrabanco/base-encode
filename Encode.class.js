"use strict";
var Encode = (function () {
    function Encode(_alphabet) {
        if (_alphabet === void 0) { _alphabet = '0123456789abcdefhijkmnopqrsuvwxyzACBDEFHJKMNPQRSUVWXYZ'; }
        this._alphabet = _alphabet;
    }
    Encode.prototype.encode = function (num) {
        return this._encode(num);
    };
    Encode.prototype.decode = function (str) {
        return this._decode(str);
    };
    Encode.prototype.base = function () {
        return this._alphabet.length;
    };
    Encode.prototype._encode = function (num, encoded) {
        if (encoded === void 0) { encoded = ''; }
        var base = this.base();
        if (num > 0) {
            encoded += (this._alphabet[(num % base)]); //Remainder in division is the index in this._alphabet
            num = Math.floor(num / base); // The next number to generate is the quotient Int part
            return this._encode(num, encoded);
        }
        else {
            return encoded || '0';
        }
    };
    Encode.prototype._decode = function (str) {
        var base = this.base();
        var result = 0;
        if (str.length > 0) {
            for (var x = 0; x < str.length; x++) {
                //From right to left for the power so we need to get the power for
                // the coded chars from left to right
                var power = str.length - (1 + x); // equal to (str.length - 1 - x)
                var charValue = this._alphabet.indexOf(str[power]);
                result += charValue * (Math.pow(base, power));
            }
        }
        return result;
    };
    return Encode;
}());
exports.Encode = Encode;
//# sourceMappingURL=Encode.class.js.map