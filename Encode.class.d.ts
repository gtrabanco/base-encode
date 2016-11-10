// Type definitions for base-encode
// Project: https://github.com/gtrabanco/base-encode
// Definitions by: Gabriel Trabanco Llano <https://gabi.soy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module Encode {

    interface Encode {
        constructor(alphabet: string);
        encode (num: number): string;
        decode (str: string): number;
        base(): number;
    }
}