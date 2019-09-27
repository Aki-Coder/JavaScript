//Expression

//prosti literali
/*
 5.6 - brojevni literali
 "akica" - string literal

 //rezervisane reci u js
 null
 true
 false

 //goli izrazi
 str - izraz procenjujemo kao string
 undefined - globalna promenljiva(nije kljucna rec kao npr null)
* */

//primeri
let y,j ;
j = y = 4*5;
console.log(y);
console.log(j);

//Operatori

/*
* 1+2
* 1 i 2 su operandi
* + je operator
* */

//Aritmeticki operatori
console.log(7.67+8.22);
console.log(3-5);
console.log(15.89/2);
console.log(5*9);
// % ostatak pri deljenju
console.log(5%3);
// unarni minus (10 -> -10)
// unarni plus (-10 -> 10)

//pre i post inkrement ++
let x,i = 5;
x = ++i;
console.log("Vrednost pre ikremeta je "+x);
let m,n = 5;
m = n++;
console.log("Vrednost post dekrmenta je "+m);
m+=n;
console.log("Vrednost post inkrementa je "+m);

//Operatori poredjenja
