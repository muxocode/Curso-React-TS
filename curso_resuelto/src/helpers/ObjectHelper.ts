export class ObjectHelper{
    static Update<T, V>(oObj:T, field:string, value:V):void{
        (oObj as any)[field] = value;
    }
}