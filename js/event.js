
const nameArray = [];

function display(cartPlayer) {
    console.log(cartPlayer);

    const allList = document.getElementById('ul-list');
    allList.innerHTML = '';

    for (let i = 0; i < cartPlayer.length; i++) {
        // console.log(nameArray[i].playerName);
        const name = nameArray[i].playerName;

        const ul = document.createElement('ul');
        ul.innerHTML = `
        <li>${name}</li>
        `
        allList.appendChild(ul);


    }

    if (cartPlayer.length >= 5) {
        alert('already select five players.')
    }

}

function addToCart(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName)

    const nameObj = {
        playerName: playerName,
        // goals: goals,
    }
    nameArray.push(nameObj)
    // console.log(nameArray);
    // console.log(nameArray.length)
    display(nameArray);
}




//calculate button

document.getElementById('calculate').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    // console.log(inputFieldValue)
    const array = nameArray.length;

    const totalField = document.getElementById('total').innerText = inputFieldValue * array;



})

//calculate total button
document.getElementById('cal-total').addEventListener('click', function () {

    const managerField = document.getElementById('manager');
    const managerFieldValueString = managerField.value;
    const managerFieldValue = parseFloat(managerFieldValueString);
    // console.log(managerFieldValue)


    const coachField = document.getElementById('coach');
    const coachFieldValueString = coachField.value;
    const coachFieldValue = parseFloat(coachFieldValueString);
    // console.log(coachFieldValue)

    const totalFieldValue = document.getElementById('total');
    const totalFieldString = totalFieldValue.innerText;
    const total = parseFloat(totalFieldString)




    const allField = managerFieldValue + coachFieldValue + total;
    // console.log(allField)

    const totalField = document.getElementById('sum-all');
    totalField.innerHTML = allField;

})

