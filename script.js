var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn=document.createElement("button");
	btn.innerHTML="Delete";
	btn.setAttribute("class", "Div1");
	btn.addEventListener("click",deleteElement);
	li.appendChild(document.createTextNode(input.value));

	li.appendChild(btn);
	li.addEventListener("click",cutElement);
	ul.appendChild(li);
	console.log(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var l=document.querySelectorAll("li");

for(var i=0;i<l.length;i++)
{
	var btn=document.createElement("button");
	btn.innerHTML="Delete";
	btn.setAttribute("class", "Div1");

	l[i].appendChild(btn);
	
	
	
}
function cutElement(event)
{
	event.toElement.classList.toggle("done");
}
function deleteElement(event)
{
	event.toElement.parentNode.remove();
}
for(var i=0;i<l.length;i++)
{

	l[i].addEventListener("click",cutElement);
}
var b=document.querySelectorAll("button.Div1");
for(var i=0;i<b.length;i++)
{
	b[i].addEventListener("click",deleteElement);
}

