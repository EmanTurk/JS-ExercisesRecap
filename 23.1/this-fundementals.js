//------------------Question 1----------------------\\
console.log(this);
//------------------Answer----------------------\\
/*It will print the global scope which is the browser- because it's a regular function and it will reference the global object which is the window- it will behave differently in different enviroments but I tried it in browser. */


//------------------Question 2----------------------\\

//------------------Answer----------------------\\
//a//- before we had arrow function, and they don't bind their own this, they inhert it from the parent scope. 

//------------------Answer----------------------\\
//b//-changed it to a regular function
const myObj = {
    name: "Timmy",
    greet: function (){
    console.log(`Hello ${this.name}`);
    
    }
}
    myObj.greet();
/*Hint-'this' behaves differently in arrow functions! arrow functions do not have their pwn 'this' context, they inherit it*/ 

//------------------Question 3----------------------\\

const myFuncDec = function () {
    console.log(this);
    };
//------------------Answer----------------------\\
//Undefined- since in strict mode, the default context (this) of a function is not set to the global object (like window in a web browser), as it is in non-strict mode



//------------------Question 4----------------------\\
const myFuncArrow = () => {
    console.log(this);
    };
    myFuncArrow();
    //------------------Answer----------------------\\
// since this is an arrow function the this is bined to the global scope in my case browser since I'm using it, to the window.myFuncArrow is defined in the global scope in a browser.


//------------------Question 5----------------------\\
document.querySelector(".element").addEventListener(function() {
    console.log(this);
});
//a//-
//the 'this' here won't point to the  dom class! since arrow funsction don't have their own this binding