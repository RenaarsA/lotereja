const vardi = ['Horace Slughorn', 'Tom Riddle', 'Ron Weasley', 'Albus Dumbledore'];
const balvas = ['Sorcerer stone', 'Resurection stone', 'Elder Wand', 'Invisibilty cloak,'];
const naudaKopa = 1000000;
let uzvaretajuSkaits = 3;
let balvuskaits = 3;
let rindas = document.querySelector('.rindas');//pievieno mainīgo



function randFunc(maxCipars){
    let random1=Math.floor(Math.random() *maxCipars);
    return random1;
}

function izlozet(){

    rindas.innerHTML='';//lai katru reizi izdzēš

for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand= randFunc(vardi.length);
    
//let rand = Math.random() * vardi.length;//vārdu skaits mainīgs
//rand = Math.floor(rand);//noapaļo uz leju
// console.log(vardi[rand]);
//šo visu var aizvietot ar "let rand-randFunc..."

    let uzvaretajs = vardi[rand];// console.log vietā
    rindas.innerHTML += `
    <tr>
    <td>${i + 1}</td>
    <td>${uzvaretajs}</td>
    </tr>`
    //index.html meta cods nozīmē kad atļautas ir garumzīme
}}