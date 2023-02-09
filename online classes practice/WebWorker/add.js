this.onmessage = function (e) {
    const { data } = e;
    this.postMessage({ "result": data.num1 + data.num2 });
}
