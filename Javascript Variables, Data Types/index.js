//console.log("JS faylga ulandi");
// variables = ozgaruvchi , JS da ozgaruvchilar soni 8ta
// 7 ta primitive va 1 ta no-primitive
// Primitive:
let abdullox = 22;
console.log(abdullox);
abdullox = 27;
// const mustaqillik = 1991;
// mustaqillik = 2021;
// console.log(mustaqillik);
let max = 9007199254740992;
// BigInt n qo'shiladi yoniga
console.log(9007199254740992n+1n);
// String - Satrli tip
let matn = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis illo, nostrum incidunt ex, ullam quis labore pariatur quos amet nulla distinctio, accusantium ipsa quae! Eligendi rerum facilis temporibus necessitatibus in.";
console.log(matn);
// ""  ''  ``
let mamlakat = "Uzbekiston";
let yoshi = 32;
console.log('Mening yurtim "Uzbekiston" '); 
console.log(`Mening yurtim ${mamlakat}; Yoshim ${yoshi} da`);
// Boolean = true , false
// Undefined
let nomalum;
console.log(nomalum+1);
// Null
let qiymatiyoq = null;
console.log(qiymatiyoq+5);
// Symbols
console.log(Symbol('matn'));
let simbol1 = Symbol('matn');
let simbol2 = Symbol('matn');
console.log(simbol1===simbol2);
// Objects = array , obj , function
// massiv
let massiv = ["Abdulloh" , 22 , {} , function(){}]; //Bir nechta va turli qiymatlarni index orqali chaqiriladi
console.log(massiv[1]);
//obyekt 
let obj = {ism: "Abdulloh", yosh: 22, manzil: "Qo'qon"}; // key 
console.log(obj.manzil);
//funksiya
let func = ()=>{};
function f1(){};
function elon(ism){
    // let ism = "Abdulloh";
    console.log("Bugun dars 7:00 da bo'ladi");
    console.log(`Darsga ${ism} keldi`);
}
elon("Sarvar");
