/*(function() {
let elems = document.getElementsByTagName("p"),
    classElems = document.getElementsByClassName("paragraph"),
    idElem = document.getElementById("four"),
    elemSelector = document.querySelector("p");
    elemsSelectorAll = document.querySelectorAll("p"),
    elemsInDiv = document.querySelectorAll("div p"),
    idElemSelector = document.querySelector("#four");

//console.log(classElems);    
//console.log(idElem); 
//console.log (elemSelector);
//console.log (elemsSelectorAll);
//console.log(elemsInDiv);
//console.log (idElemSelector);
//console.log(elems);

for (let i = 0, len = elems.length; i < len; i++ ) {
    //console.log( elems[i].tagName);
    //console.log( elems[i].parentNode);
    //console.log( elems[i].previousSibling);
    //console.log( elems[i].previousSibling.previousSibling);
    //console.log( elems[i].nextSibling.nextSibling);
    //console.log( elems[i].previousSibling.nodeName);
    //console.log( elems[i].nodeType);
    //console.log( elems[i].previousSibling.nodeType);

    //if (elems[i].nodeType === 1) {
    //    console.log ("this is the element node");
    //}

    //if (elems[i].previousSibling.nodeType === 3) {
    //    console.log ("this is a text node");
    //}
}    

//console.log(document.querySelector("div").childNodes);
//console.log(document.querySelector("div").children);
//console.log(document.querySelector("div").lastChild);
//console.log(document.querySelector("div").firstChild);
console.log(document.querySelector("div").innerHTML);

}) ();*/

/*

(function() {
    let doc = document,
        elem = doc.createElement("p");
        //content = doc.createTextNode("this is a dynamically created element"),
        wrappedP = doc.getElementById("wrapped");

    elem.innerHTML = '<strong>this is a dynamically created element</strong>';

    //wrappedP.parentNode.removeChild(elem);
    wrappedP.parentNode.removeChild(wrappedP);

    //elem.appendChild(content);
    //elem.setAttribute('id', 'mrDynamic');
    elem.id = 'mrDynamic';

    //wrappedP.parentNode.appendChild(elem);
    //wrappedP.parentNode.insertBefore(elem, wrappedP); 
    //wrappedP.parentNode.replaceChild(elem, wrappedP);

    console.log(elem);

}) (); */

/*
(function() {
    let div = document.getElementById('test');
        style = div.style;

        // style.color = "red";
        // style.backgroundColor = "black";
        // style.border = "1px solid blue";
        // style.padding = "3px";

        //div.className = " css-class  css-class-new "
        //div.className = ""; 
        //div.className = div.className.replace(" css-class-new ", "");

        div.classList.add("css-class");
        div.classList.add("css-class-new");

        //div.classList.remove("css-class");

        div.classList.toggle("css-class");
})(); */
/*
(function(){

    let delay = 100,
        i = 0,
        startTimer = function (pixels) {
            let elem = document.getElementById('circle'),
                bottom = elem.offsetTop;
                console.log( 'bottom' );

            if ((pixels > 0 && bottom > 350) || (pixels < 0 && bottom < 50)) {
                clearInterval(timer);
                timer = setInterval(function () {
                    startTimer(pixels * -1);}, delay);
            }   

            elem.style.top = bottom + pixels + 'px';
            i++; 
            // if (i < 10) {
                // console.log( 'function startTimer works' );
                // setTimeout(startTimer, delay);

                
            // } else {
                // clearInterval(timer);
            // } 
        };

    let timer = setInterval(function () {
        startTimer(10);}, delay);

    // let timer = setTimeout(startTimer, delay);

    // alert('hi');

    // clearTimeout(timer);

})();*/

/*(function () {
    // let el = document.getElementById('box');
    // el.onclick = function () {
    //     this.style.backgroundColor = "green";
    // };

    let buttons = document.getElementsByTagName('button');

    // for (let i=0, len = buttons.length; i < len; i++) {
//     buttons[i].onclick = function () {
    //         if (this.id === 'day') {
    //             document.body.className = 'day';
    //         } else if (this.id === 'night') {
    //             document.body.className = 'night';
    //         }
    //     };
    // };

    let changeColor = function (event) {
        // console.log(e.type);
        // console.log(e.target);
        // console.log(this);
        // console.log(e.currentTarget);

        // event.preventDefault();



        if (this.id === 'day') {
            document.body.className = 'day';
        } else if (this.id === 'night') {
            document.body.className = 'night';
        }
    };

    let sayHi = function () {
        alert('hi');
    };

    for (let i=0, len = buttons.length; i < len; i++) {

        let yandex = document.getElementById('yandex');



        buttons[i].addEventListener('click', changeColor, false);
        yandex.addEventListener('click', changeColor, false);
        buttons[i].addEventListener('click', sayHi, false);


        buttons[i].removeEventListener('click', sayHi, false);
    };

})();


(function () {

    let buttons = document.getElementsByTagName('button');
    let changeColor = function (e) {
        // e.preventDefault();
        e.returnValue = false;

        let elem = e.srcElement;

        if (elem.id === 'day') {
            document.body.className = 'day';
        } else if (elem.id === 'night') {
            document.body.className = 'night';
        }
    };

    for (let i=0, len = buttons.length; i < len; i++) {

        buttons[i].attachEvent('onclick', changeColor);
        buttons[i].detachEvent('onclick', changeColor);
        // buttons[i].removeEventListener('click', changeColor, false);
    };

})();*/
