//kreiranje if else statement
/*
if(izraz)
  statement -- kad je izaraz tacan
else
  statement -- kad je izaraz netacan
*/

//primer
let vreme = 9;
if (vreme < 12) { //ovde su oba zazdovoljena, pa stampa obe poruke
  console.log("Dobro jutro lepi moj");
  if (vreme <= 9) {
    console.log("Otkrij okiceee");
  } else if (vreme < 18) {
    console.log("Dan je,ustaaaj")
  }
} else
  console.log("Noc je pocela");


//kreiranje switch-case bloka
/*
switch (expression) {
  case value1:
    rezultat ce da se izvrasava kada rezultat
    ima vrednost koja se poklapa sa value1
    [break];
  case value2:
    rezultat ce da se izvrasava kada rezultat
    ima vrednost koja se poklapa sa value2
    [break];
  default:
  izavrsava se kada se ni jedna vrednost ne poklapa sa expression
  [break];
}
*/

//primer
let odgovor = 1;
switch (odgovor) {
  case 1:
    console.log("Vas odabir je: 1 -- JavaScript");
    break;
  case 2:
    console.log("Vas odabir je: 2 -- Python");
    break;
  case 3:
    console.log("Vas odabir je: 3 -- PHP");
    break;
  case 4:
    console.log("Vas odabir je: 4 -- C++");
    break;
  default:
    console.log("Zeljeni jezik nije u ponudi");
    break;
}

//Petlje u Js
/*
1)while
2)do while
3)for
4)for in
*/

//while petlja
/*
while (izaraz)  //true {
  izajava1;
  izajava2;
  izajavaN;
}
*/
//primer while petlje-stampa brojeve od 0-9 u konzolu
let br = 0;
while (br < 10) {
  console.log(br);
  br++; // or br=br+1;
}

//Do while petlja
/*
    do {
      iskaz;
      iskaz2;
      iskazN;
    } while (izraz) ;

*/

//primer
let count = 5;
/*Kada bi vrednost brojaca bila 5-odstampao bi samo 5 i petlja se prekine,jer je uslov false*/
do { //ovaj blok se izvrsava najmanje jednom
  console.log("Vrednost brojaca je "+count); //stampanje vr brojaca u konzolu
  count++; //povecavanje brojaca za 1
} while (count < 5); //dokle brojac ide


//For petlja
/*
for (inicijalizacija; izraz; inkrment/dekrement) {
  izraz koji se izvrsava;
}
*/

//primer for Petlje
let i=0;
for(i=0; i<5; i++){
  console.log("Brojevi iz for petlje "+i);
}

/*Objasnjenje for petlje
1)inicijalizacija promenljive i njeno ime
2)procena izraza
3)izvrsavanje statement-a
4)inkrement/dekrement
*/

//primer visestruke promenljive
for(let i=0,j=5;i<5;i++,j--){
  console.log(i+" "+j);
}
  console.log("------------------------------")
//Nested for petlja
for(let i=1;i<4;i++){
  for(let k=1;k<4;k++){
    console.log(i+","+k);
  }
  console.log("\n");
}

/*Objasnjene Nested for Petlje
  i=1 na pocetku -true
  k=1 -true
  ulazi u stampanje konzole,nakon toga k se poveca
  pa se dobije:
  i=1
  k=2
  i=1
  k=3, posto 4 nije > od 4,preskace se stampanje iz konzole,
  pa izadje iz petlje i stampa novi red
  ulazi se u gornju petlju,gde je sad i=2,k=1, etc...
*/

//For in loop-petlja nad brojnim svojstvima
/*
for(promenljiva u objektu)
  statement;
*/

//primer
const obj = {a:1,b:2,c:3,d:4};
for(let o in obj){
  console.log(obj[o]); //stampa svojstva vrednosti na osnovu kljuca
  console.log(o); //stampa key
  console.log(o+" "+obj[o]); //key:value
}
/*Objasnjene:
variable o = a,b,c,d
console.log() 1,2,3,4
*/

//For of loop-koristi podnošljive predmete i prelazi preko generisanih vrednosti
/*
for(promenljiva of objekat)
  statement;
*/

//primer
//deklarisi niz
let niz = [1,2,3,4,5];
//startuj ovu petlju
for(let value of niz){
  console.log(value);//stampa elemente niza u konzolu
}
for(let value in niz){
  console.log(value);//stampa index-e niza u konzolu
}

//deklaracija string objekata
let s = "Andreja";
for(let value of s){
  console.log(value);
}
