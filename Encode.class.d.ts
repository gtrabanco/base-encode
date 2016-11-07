declare class Encode {
    constructor(private _alphabet:string);

    public encode (num:number):string;
    public decode (str:string):number;
    public base():number;
}