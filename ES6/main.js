console.log('Hello world');
//var
var name = 'jack';
name = 'prakash';
const firstName = 'G';
let middleName;
console.log(middleName);

//object
const myAccount = {
    firstName : 'Gnana',
    lastName :'Prakash',
    degree: 'B.E'
}
myAccount.profession = 'software engineer';
myAccount.degree='B.E (electical)'
console.log(myAccount);

//array
var mytranscations = ['10001','20','20011','300055','200015','30012'];
mytranscations.push(1);
console.log('>>array-> ' , mytranscations);

//Foreach -> Foreach always accepts only arrow functions as a input param
mytranscations.forEach((transc)=>{
    console.log('>>forEach ' + transc);
});

//functions
function sayHello (){
    console.log('Hello how you doing');
}
sayHello();

//Normal function Use explanation-> 
//https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e 

let obj1 = {
    myvar : 'Gnana',
    myName: function(){
        console.log(this.myvar);
        setTimeout( function() {
            console.log('>>Normal function->'+this.myvar);
        }, 1000)
    }
}

obj1.myName();

let obj2 ={
    myVar : 'Prakash',
    myName: function(){
        console.log(this.myvar);
        let self = this;
        setTimeout( function() {
            console.log('>>Normal function->', self.myVar);
        }, 1)
        
    }
}

obj2.myName();

// Arrow function use
let obj = {
    myvar : 'Gnana',
    myName: function(){
        console.log(this.myvar);
        setTimeout( () => {
            console.log('>>Arrow function->'+this.myvar);
        }, 1000)
    }
}
obj.myName();


var fruits = ['Apple','Orange','grape','banana','jackfruit','mango'];
//map -> map always accepts only single line arrow functions as a input param
var newFruits = fruits.map((fruit)=>fruit+'s')
console.log('map'+newFruits);

//filter
var filterFruits = fruits.filter((fruit)=> fruit !== 'banana');
console.log('filter'+filterFruits);

//spread operator
var readBooks = ['Magic of thinking big','Power of habits','The Scret'];
var spreadOperator = ['Sapient', 'Think and grow rich', ...readBooks];
var Normal = ['Sapient', 'Think and grow rich', readBooks];
console.log( "Normal", Normal);
console.log("spreadOperator",spreadOperator);

var profile = {
    name: 'Gowshik',
    born: '04-march-2019',
}
var data = {
    ...profile,
    nationality: 'Indian'
}
console.log(data);

//Destructoring
const Myprofile = {
    Myname : 'Jhon Doe',
    address: {
        street: '40/1 Haridass mainroad',
        city: 'chennai'
    },
    hobbies: ['movies','read books']
};
// fetch variables from object
const { Myname } = Myprofile;
const { street } = Myprofile.address;

console.log( '>>prakash->' , Myprofile  );


//Call back example
const posts = [
    {
        name : "prakash",
        age : 25
    },
    {
        name :"Nithya",
        age : 26
    }
];

function getpost(){
    let output = '';
    posts.forEach(post =>{
        output += `<li>${post.name}</li>`
    });
    document.body.innerHTML = output ;
}
getpost();

function createPost(post, callback){

    setTimeout( ()=> {
        posts.push(post);
        callback();
    }, 2000);
    
}
createPost({ name : "pooji",age : 24},  getpost);
// call back example completed


//promise example
const datas = [
    {
        name : "mummy",
        age : 25
    },
    {
        name :"dady",
        age : 26
    }
];
function getdata(){
    let output = '';
    datas.forEach(data =>{
        output += `<li>${data.name}</li>`
    });
    document.body.innerHTML = output ;
}
getdata();

function createdata(data){
    return new Promise((resolve, reject) => {
        setTimeout( ()=> {
            datas.push(data);
            const error = false;
             if(!error){
                resolve();
             }else{
                 reject('error: something went wrong');
             }
        }, 5000)
    });
 
}

createdata({ name : "priya",age : 24})
    .then (getdata)
    .catch(err => console.log(err));

































