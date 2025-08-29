myObjects = {name:'sophia',school:'unn', gender:'female', department:'computer science', hobby:'sleeping', state:'enugu', age:'134', color:'purple', food:'rice',pet:'dog'}

//delete two
delete myObjects.state;
console.log(myObjects);

//add three elements
myObjects.car = 'lamborghini';
myObjects.course = 'backend';
myObjects.house = 'duplex';
console.log(myObjects)

//length of values
const len =Object.values(myObjects).length;
console.log(len);

//length of keys
const length = Object.keys(myObjects).length;
console.log(length);

//array
myArray = [1234, 4, 4.5, 0.5, 80, 3.14, 300, 49, 0, 21]

//delete two
myArray.pop();
console.log(myArray);

myArray.pop();
console.log(myArray);

//change to an array of animals
myArray[0] = 'dog';
myArray[1] = 'cat';
myArray[2] = 'bird';
myArray[3] = 'snake';
myArray[4] = 'scorpion';
myArray[5] = 'chameleon';
myArray[6] = 'parrot';
myArray[7] = 'eagle';


console.log(myArray);


//condition statement
//if statement

const person =  {name:'sophia',school:'unn', gender:'female'} 
if( 'course' in person) {
  console.log('user has a proper name');
}


// if-else statement
const age = 18;
if(age >= 12){
    console.log('you can access the content');
}
else  {
     console.log('try again next year');
}

//else=if statement
let  input = sophia;
const hour = 23;
if (hour >= 0 && hour <= 11 ){
   console.log('good morning ', input ,'. It is', hour, 'am');
     
}
else if (hour >= 12 && hour <= 11) {
   console.log('Good afternoon', input ,'. It is', hour, 'pm');
}
else if (hour >= 16 && hour <= 19) {
   console.log('Good Evening', input ,'. It is', hour, 'pm');
   
}
else if (hour >= 20 && hour <= 23){
   console.log('Good Night', input ,'. It is', hour, 'pm');  
    
}

else {
    console.log(hour,'pm is not a valid time frame,',input);
} 
