// function optional(arg1?: string, arg2?: number, arg3?: string): void {
//     console.log(arg1, arg2, arg3);
// }
// optional("hello", 12);
function fun_1(arg1: string, arg2 = "Raji", arg3?: string, ...arg4: [number]) {
    console.log(arg1, arg2, arg3, arg4);

}
fun_1("lalli", "roji", "", 12);
