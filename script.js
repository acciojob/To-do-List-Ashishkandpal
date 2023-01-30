//your code here
function myFunc() {
	let orderedList = document.getElementByTagName("ol");
	let insertedValue = document.getElementbyId("newTodoInput").value;

	let createList = document.createElement("li");
	li.textContent = insertedValue;
	orderedList.appendChild(createList);
}
