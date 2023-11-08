var randsent=["hello","bye","hello again"]

function modify(arr){
    var modified =0;
    for(var i =0;i<arr.length;i++){
        arr[i]+="yay";
        modified++;
    }
    console.log(arr);
    console.log(modified);
}

modify(randsent);