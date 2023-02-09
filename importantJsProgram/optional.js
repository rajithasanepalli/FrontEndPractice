// function optional(arg1?: string, arg2?: number, arg3?: string): void {
//     console.log(arg1, arg2, arg3);
// }
// optional("hello", 12);
function fun_1(arg1, arg2, arg3) {
    if (arg2 === void 0) { arg2 = "Raji"; }
    var arg4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg4[_i - 3] = arguments[_i];
    }
    console.log(arg1, arg2, arg3, arg4);
}
fun_1("lalli", "roji", "", 12);
