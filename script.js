var newItemCounter = 1;

var ourList = document.getElementById('our-list');
//document.querySelector("#our-list);is the right
var ourButton = document.getElementById('itemBtn');
//for querySelector # for id and . for class
var ourHeadline = document.getElementById('our-headline');

var listItems = document.getElementById('our-list').getElementsByTagName('li')
/*--- You can use querySelectorAll instead of get ElementById: document.querySelectorAll(#our-list li)
making code less coversome ---*/
ourList.addEventListener("click", activateItem);

function activateItem(e) {
  if(e.target.nodeName == "LI") {
     ourHeadline.innerHTML = e.innerHTML;
    for (i = 0; i < e.target.parentNode.children.length; i++) {
        e.target.parentNode.children[i].classList.remove("active");
      }
      e.target.classList.add("active")
     } 
}



ourButton.addEventListener('click', createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>something new " + newItemCounter + "</li>"; 
    newItemCounter++;
}