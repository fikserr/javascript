let baho = 5;
switch(baho){
    case 2: console.log(`Sizning bahoyingiz 2`);
    break;
    case 3: console.log(`Sizning bahoyingiz 3`);
    break;
    case 4: console.log(`Sizning bahoyingiz 4`);
    break;
    case 5: console.log(`Sizning bahoyingiz 5`);
    break;
    default: console.log(`Bunday baxo mavjud emas`);
}

let cashback = 201;
if(cashback>0 && cashback<=50){
 console.log(`Sizga 2000 so'm keshbek taqdim etildi`);
}
else if(cashback>50 && cashback<=200){
    console.log(`Sizga 10 000 so'm keshbek taqdim etildi`);
}
else if(cashback>200){
    console.log(`Sizga 50 000 so'm keshbek taqdim etildi`);
}
else{
    console.log(`Sizga hech qanday keshbek berilmadi`);
}

// 1% keshbek = 0.01
let keshbek = 50000;
let daraja = 0.01;
if(keshbek>0){
    console.log(`Sizga ${keshbek*daraja} so'm keshbek berildi`);
}

// for - sikl operatori
for(let son=1;son<=20;son++){
    console.log("Abdulloh Assalomu alaykum");
    console.log("Salom");
}
// toq sonlar royxati
for(let i=1;i<=100;i++){
    if(i%2===1){
        console.log(i);
    }
}
// juft sonlar
for(let i=1;i<=100;i++){
    if(i%2===0){
        console.log(i);
    }
}
// 
for(let i=1;i<=100;i++){
    if(i%4===0)
        break;
        console.log(i);
}
// 
for(let i=1;i<=10;i++){
    for(let j=1;j<=1;j++){
        console.log(`${j}x${i} = ${j*i}`);
    }
}
// 2
for(let i=1;i<=10;i++){
    for(let j=2;j<=2;j++){
        console.log(`${j}x${i} = ${j*i}`);
    }
}
// 3
for(let i=1;i<=10;i++){
    for(let j=3;j<=3;j++){
        console.log(`${j}x${i} = ${j*i}`);
    }
}

// while
let qiymat = 1;
while(qiymat<=10){
    console.log(qiymat);
    qiymat++;
}
// do while
