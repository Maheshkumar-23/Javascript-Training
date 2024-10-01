let arr=["idli","dosa","poori"]
let t=0
for(let i=0;i<arr.length;i++){
    switch(arr[i]){
        case "idli":
            t+=150;
            break;
        case "dosa":
            t+=200;
            break;
        case "poori":
            t+=120;
            break
    }
}
if(t>=500){
    console.log(t-(t*0.1));
}else{
    console.log(t);
}