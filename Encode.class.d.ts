declare class Encode {
    constructor(alphabet:string);
    public encode (num:number):string;
    public decode (str:string):number;
    public base():number;
}