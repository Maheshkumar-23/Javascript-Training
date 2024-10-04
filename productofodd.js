let m=1;
let n=3;
let prod=1;
if(m>n){
    console.log(-1);
}
for(let i=m;i<=n;i++){
    if(i%2!=0){
    prod*=i;
    }
}
console.log(prod);