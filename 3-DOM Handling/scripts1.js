// -----DOM-----

//examine the document object
// console.log(document);

//get properties
// console.log(document.URL);
// console.log(document.charset);
// console.log(document.lastModified);
// console.log(document.title);
// console.log(document.doctype);

// console.log(document.head);
// console.log(document.body);

// console.log(document.all);
// console.log(document.all[10]);

// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// change values
// document.title = "DOM"
// console.log(document.title)

//not the best way
// document.all[10].textContent = "Hi"

// Select element using ID
// console.log(document.getElementById("text1"));
// console.log(document.getElementById("frm"));

// Select element using class
// console.log(document.getElementsByClassName("listpart"));
// console.log(document.getElementsByClassName("colours"));

// Select element using tags
// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementsByTagName("button"));

// textContent, innerText & innerHTM

/*
    1. innerText ==> just the text, without spacing and inner element tags. And it cares about styling.
    2. innerHTML ==> returns the text, including all spacing and inner element tags.
    3. textContent ==> returns the text with spacing, but without inner element tags.
*/

// var text1 = document.getElementById("text1");
// console.log(text1);
// console.log(text1.textContent);
// console.log(text1.innerHTML);
// console.log(text1.innerText);

// var list = document.getElementsByTagName("li");
// console.log(list);
// console.log(list.textContent);
// console.log(list.innerHTML);
// console.log(list.innerText);







