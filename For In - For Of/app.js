const person = {
    name: "Adnan",
    age: "25",
    salary: "5000"
};

const langs =["Python","Java","C++","Php"];

const name = "Adnan";

for(let value in person){
    console.log(value,person[value]);
};

for(let index in langs){
    console.log(index,langs[index]);
};

for(let prop in name){
    console.log(prop,name[prop]);
};

for(let i of langs){
    console.log(i)
}
for(let i of name){
    console.log(i)
}


function rectangle(a,b){
    const rect = {
    length : (a),
    width : (b),
    perimeter : 2*(a+b),
    area : (a*b)
};
    for(let value in rect){
        console.log(rect[value]);
    };
};

rectangle(4,5);