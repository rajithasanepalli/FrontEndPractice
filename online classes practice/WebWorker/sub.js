this.onmessage = function (e) {
    const { data } = e;
    this.postMessage({ "sub": data.arg1 - data.arg2 });
}