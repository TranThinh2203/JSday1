//Bài 1: Cho a = 2, b = 3.
//In ra tổng, hiệu, tích, thương và phần dư của 2 số trên.

let a = 2;
let b = 3;

let tong = a + b;
let hieu = a - b;
let tich = a * b;
let thuong = a - b;
let phanDu = a % b;

console.log("Bài 1:");
console.log("Tổng a + b =" + tong);
console.log("Hiệu a - b = " + hieu);
console.log("Tích a * b = " + tich);
console.log("Thương a / b = " + thuong);
console.log("Phần dư a % b = " + phanDu);

//Bài 2: Viết chương trình tính lũy thừa: Có a = 2, b = 3 -> in ra a^b = ?

let LuyThua = a ** b;

console.log("\nBài 2: ");
console.log(a + "^" + b + "=" + LuyThua);

