

arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

//Destructing Arrayin en başından başlayarak elemanları veriyor.

// [number1,number2] = arr;

const [number1,number2] = arr;


console.log(number1,number2);

// Object Destructing

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
}; 

const {a:num1,c,e:num3} = numbers;

console.log(num1,c,num3);


// Fonksiyon Destructing
const getLangs = () => ["Python","Java","C++"];

const [lang1,lang2,lang3] = getLangs();

console.log(lang1,lang2,lang3);

// Obje

const person = {
    name:"Adnan Dedeoğlu",
    year:1996,
    salary:3000,
    showInfos : () => console.log("Bilgiler Gösteriliyor")
};

const {name:isim,year:yil,salary:maas} = person;

console.log(isim,yil,maas);

//Spread Operatörü

const arr1 = ["C++", "Python", "Java"];

// console.log(arr1[0],arr1[1],arr1[2]);

console.log(...arr1);

const arr2 = ["Javascript", "C#", ...arr1];

console.log(arr2);

const deger = [1,2,5];

const calc = (a,b,c) => {
    console.log(a*b*c);
}

calc(...deger);


