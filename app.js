let nameList = [];

function addName() {
	let input = document.getElementById('input').value;
	nameList.push(input);
	let listElement = document.getElementById('name-list');
	let li = document.createElement('li');
	li.textContent = input;
	listElement.appendChild(li);
}

function chooseWinner() {
	let winner = Math.floor(Math.random() * nameList.length);
	console.log(nameList[winner]);
	let p = document.getElementById('winner');
	p.textContent = `The winner is: ${nameList[winner]}`;
}
