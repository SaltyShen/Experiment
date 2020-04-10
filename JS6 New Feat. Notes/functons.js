/*
        (Synatax) Functions:
    __________________________________________________________________________________________________________________________________
    1. If you create a <script> tag put it at the bottom of the body to prevent loading issues.
    2. Javascript runs from top to bottom. (kind of obvious, figured its good to note.)
    3. HTML elements can be created by javascript - (Template Streams)                                                                 */
            let html = 
            <p>
            <h2>${"Hello"}</h2> 
            <a>${"World"}</a>
            <span>${"!"}</span>
            </p>;
            
/*  
    4. functions can be defined in a Java-esk way, but javascript can also define a function expression by a variable name.             */
            const fun = function(){
                console.log('this is new.');
        };
/*
    5. Javascript can also support "Hoisting" where you can declare a function before it is defined. Generally speaking this 
        is bad practice.                                                                                                                */

            fun();
            
            let fun = function(){};
/*  ________________________________________________________________________________________________________________________
    
        (Syntax) Arrow Functions:
    ________________________________________________________________________________________________________________________
    1. Arrow functions are a more modern way to make functions.
        PROS:
        Shorter Syntax. You can omit many brackets.
        In general, more 'readable' than standard functions.
        No binding of 'this'. Normal functions you had to lexically declare 'this' to use the keyword.
        
        CONS:
        Syntactically anonymous and non-dynamic. Meaning it will be harder to bebug programs and you cannot self-reference. 
        (ie. recursion, event handlers, etc)                                                                                            */
     

            const fun = (parameter) => {
            console.log("I guess this is quicker to type out. This is faintly Ocaml-like.");
            return parameter;
        };
            //(when only 1 paremeter)
            const fun = parameter => parameter;
/*  ________________________________________________________________________________________________________________________

        (Syntax) Other Function Syntax:
    ________________________________________________________________________________________________________________________
    1. Callback Functions: 
       You can call a function as a perameter.                                                                                          */
        
        //standard notation
            someFun(function(perameter){
              //do something
              console.log(perameter)
            });

        //arrow notation
            const someFun = (callBackFun) => {
                //do something
                let someValue = "some value";
                callBackFun(someValue);
            };

            someFun(someValue => {
                //do something
                console.log(someValue);
            });
