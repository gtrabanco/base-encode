"use strict";


export module Encode {
    class Encode {


        constructor(private _alphabet: string = '0123456789abcdefhijkmnopqrsuvwxyzACBDEFHJKMNPQRSUVWXYZ') {
        }


        public encode(num: number): string {

            return this._encode(num);
        }

        public decode(str: string): number {
            return this._decode(str);
        }

        public base(): number {
            return this._alphabet.length;
        }

        private _encode(num: number, encoded: string = ''): string {

            const base = this.base();

            if (num > 0) {

                encoded += (this._alphabet[(num % base)]); //Remainder in division is the index in this._alphabet
                num = Math.floor(num / base); // The next number to generate is the quotient Int part

                return this._encode(num, encoded);

            } else {

                return encoded || '0';
            }
        }


        private _decode(str: string): number {

            const base = this.base();

            let result = 0;

            if (str.length > 0) {
                for (let x = 0; x < str.length; x++) {
                    //From right to left for the power so we need to get the power for
                    // the coded chars from left to right
                    let power = str.length - (1 + x); // equal to (str.length - 1 - x)

                    let charValue = this._alphabet.indexOf(str[power]);

                    result += charValue * (Math.pow(base, power))
                }
            }

            return result;
        }
    }
}