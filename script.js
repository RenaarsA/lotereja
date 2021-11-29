const vardi = ['Horace Slughorn', 'Tom Riddle', 'Ron Weasley', 'Albus Dumbledore'];
const balvas = ['Sorcerer stone', 'Resurection stone', 'Elder Wand', 'Invisibilty cloak,'];
const naudaKopa = 1000000;
let uzvaretajuSkaits = 3;
let rindas = document.querySelector('.rindas');//pievieno mainīgo


for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * vardi.length;//vārdu skaits mainīgs
    rand = Math.floor(rand);//noapaļo uz leju
    console.log(vardi[rand]);


    let uzvaretajs = vardi[rand];// console.log vietā
    rindas.innerHTML += `
    <tr>
    <td>${i + 1}</td>
    <td>${uzvaretajs}</td>
    </tr>`




    //index.html meta cods nozīmē kad atļautas ir garumzīme
}
