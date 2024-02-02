// Accessing Elements
// by ID
//const heading = document.getElementById('heading');


// by class
//const heading= document.getElementsByClassName('heading1');

//by tag name
const heading = document.getElementsByTagName('h1')

console.log(heading);

const listItems = document.querySelectorAll('#list li')

console.log(listItems[1]);

// Modifying Elements
//contents using innerHTML
heading[0].innerHTML = <em>Learning DOM Manipulation</em>;

// contents using textContent
heading[0].textContent = '<em>All About DOM Manipulation</em>';

