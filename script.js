//your code here
function myFunc() {
	let orderedList = document.getElementsByTagName("ol")[0];
	let insertedValue = document.getElementById("newTodoInput").value;

	let createList = document.createElement("li");
	createList.textContent = insertedValue;
	orderedList.appendChild(createList);
}
