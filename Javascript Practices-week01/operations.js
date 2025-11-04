/ ---- unary-----

let isFalse= !true;
console.log(isFalse);
let x = -8;
console.log(x);

//------binary arithmatic-----
let a = 10 + 5;    
let b = 20 - 8;     
let c = 4 * 3;      
let d = 16 / 4;     
let e = 17 % 5;
console.log(c);

//-------comparision------
console.log(6 == '5');     
console.log(5 === 5);    
console.log(5 != '5');     
console.log(5 !== '5');

//------example----
let marks ="22";
if (marks >=35 ){
  console.log("You have passed!");
} else {
  console.log("You have to improve:(" );
}

//-----string comparision-------
console.log("away" == "awey");
console.log('' == false);
console.log(01 == 1);
console.log(null == undefined);