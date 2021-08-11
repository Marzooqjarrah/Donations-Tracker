' use strict'

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let donator = [];

function Donator(name, amount, age) {

    this.name = name,
    this.amount = amount,
    this.age = random;
    this.totalDonation = [];
 
}

random();


Donator.prototype.viewdonations = function () {

    for (let i = 0; i < donator.length; i++) {
        this.totalDonation.push(random(this.amount));

    }
}


let Ahmad = new Donator('Ahmad', 100);
let Mohammad = new Donator('Mohammad', 300);
let Ali = new Donator('Ali', 500);




let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);


function makeHeader() {

    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);


    let firstTh = document.createElement('th');
    headingRow.appendChild(firstTh);



}

Donator.prototype.render = function () {

    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    let namingTd = document.createElement('td');
    dataRow.textContent = this.name;

    for (let i = 0; i <donator.length; i++) {
let newDonate= document.createElement ('td');

dataRow.appendChild(namingTd);
namingTd.textContent=this.totalDonation[i];


    }
}

function makeFooter (){

    let foterRow = document.createElement('tr');
    table.appendChild(foterRow);

    let firstTh = document.createElement ('th');
    foterRow.appendChild (firstTh);

 

}

makeHeader();
makeFooter();


let form= document.getElementById ('container');

form.addEventListener('submit', submitter);

function submitter (event){

console.log( event);
}











