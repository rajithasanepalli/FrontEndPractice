this.onmessage = function (e) {
    let str1 = e.data;
    let arr1 = Array.from(str1);
    let arr2 = arr1.reverse();
    let str2 = arr2.json;


    this.postMessage(str2);

}