// if , else
let tex = "html";
if(tex === "js"){
    console.log("Siz JavaScriptni bilasiz");
}
else if(tex === "html"){
    console.log("Siz HTML ni bilasiz")
}
else if(tex === "html"){
    console.log("Siz HTML ni bilasiz")
}
else{
    console.log("Bunday texnologiyani bilmayman");
}


let narx = 100;
// Ternary = ternal operator
// shart ? true : false
narx>100 ? console.log("Narx qimmat") : console.log("Narx arzon");
if(narx>100){console.log("Narx qimmat")} else{console.log("Narx arzon")};

// switch - aniq bir qiymatga teng bo'lsa o'sha oraliqdagi shartni bajaradi
let meva = "tarvuz";
switch(meva){
    case "olma": console.log("Olmani tanladiz");
    break;
    case "nok": console.log("Nokni tanladiz");
    break;
    case "tarvuz": console.log("Tarvuzni tanladiz");
    break;
    default: console.log("Meva nomini yozing");
}
// switch va if farqi nimada? if ma'lum bir oraliqdagi qiymatlarni tekshiradi




let baxo = "5";
if(baxo === 5){
    console.log("Baxo togri");
}
else{
    console.log("Sonli qiymat kiriting")
}
