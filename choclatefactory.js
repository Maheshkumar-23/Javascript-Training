let arr = [4, 5, 0, 1, 9, 0, 5, 0];
let n = 8;
let count = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
        arr[count++] = arr[i];
    }
}
let k=0;
while (count < n) {
    arr[count++] = 0;
    k++;
}
console.log(arr,k);
