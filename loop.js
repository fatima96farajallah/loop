
function forLoop(exp, element) {

    let arr = exp.split('of')[1];
    arr[1] = arr[1].replace("of");
    let array = eval(arr);
    let i = arr;
    for(arr.length,i=0; i<arr.length;i++){
        element.parent.innerHTML += element;
    }  
}
let obj = {
    exp: "n of arr",
    element: (forLoop)
  }