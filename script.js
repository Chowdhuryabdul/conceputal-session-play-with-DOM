
/* how to traverse a single element - there are two methods -
--> get element by Id getelementbyid()
--> querySelector() */

// const title = document.getElementById('title')
// title.innerText = 'powerful'
// title.style.border = '2px red solid'
// console.log(title.innerText)

/* if there is a several tag or element with same class name such as several li. then queryselctor will get the first one */
// const title = document.querySelector('#title')
const title = document.querySelector('li')
title.textContent = 'i am done by selector'
// console.log(title)

/* how to traverse in multiple element---
--> getElementByTagName()
--> getElementByClassName()
-->querySelectorall() */


// const listContainer = document.getElementsByClassName('li-items')
/* basically it provides a array like object */
// console.log(listContainer)
// console.log(typeof listContainer)
// console.log(listContainer.length)

/* for(let item of listContainer){
    console.log(item)
} */

/* how to convert it into Array on the html colleciton */
// const myArray = Array.from(listContainer)
// console.log(myArray)

/* const listContainer1 = document.getElementsByTagName('li');
for(let item of listContainer1){
    // console.log(item)
    console.log(item.innerText)
    item.style.backgroundColor = 'gray'
} */


/* const listContainer2 = document.querySelectorAll('.li-items');
for(let item of listContainer2){
    item.style.backgroundColor = 'red'
    console.log(item.innerText);  
} */

/* what are the differents between nodeslist and html collection\elements\tags */

/* nodes - almost every thing in the html can be nodes. even empty line\space can be also nodes and comment also a nodes. all elements in html can be node but all the nodes in html can not be elements. when browser read the html, it reads all the items as nodes.  */
const bodyName = document.querySelector('body');
// console.log(bodyName.childNodes); /* through we can get the nodes */
// console.log(bodyName.children);  /* through we can get the tags or elements */


// const items = document.querySelector('ul');
// console.log(items.childNodes); /* it shows there are 11 things in the ul contianer, but there are not 11 Element. so it means that node usually count many different things as nodes such as blank space, attribute, comment, tags, text and others. it counts space as text node */ 

/* what is the parent and child relationship in javascript */

const ulListContainer = document.getElementById('li-container');
// console.log(ulListContainer.children); how to get cildren
// console.log(ulListContainer.parentElement) how to get parent element
// console.log(ulListContainer.nextSibling) to get nextSibling
// console.log(ulListContainer.previousElementSibling)
// console.log(ulListContainer.previousSibling)
console.log(ulListContainer.previousElementSibling.nextSibling)