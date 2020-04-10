/*
        (Objects) General Object Instantiation:
    ________________________________________________________________________________________________________________________

    1. You can instantiate an object literal as:                                                                            */

            let object = {
                name: 'name',
                age: 24,
                location: "chicago",
                blog: ["I just made Okonomiyaki", "it was bomb."]
            };
        
/*  2. Some functions you can use are:                                                                                      
            
            object -> returns the object and will return as {attribute: value, attribute: value ....}
            object.name(object notation)-> returns the attribute value of the object.
            object['name'](bracket notation) -> does the same, but is better for querying.
            typeof object -> returns the type of object

    3. To include object functions you can also define them shorthand. Lets use the object above as an example.             */
            let object = {

                blog: [ 
                    {title: "I just made Okonomiyaki", likes:30},
                    {title:"it was bomb.", likes:50}
                ],

                login(){
                          console.log("Login successful!");
                },
                logout(){
                          console.log("Logout successful!");
                },
                logblog(){
                          this.blog.forEach(blog => {
                              console.log(blog.title, blog.likes);  //(Note: arrow functions take the context of 'this' )
                          } )
                }
            };

        object.logblog();
/*  __________________________________________________________________________________________________________________________

        (Objects) Arrays:
    __________________________________________________________________________________________________________________________
        let something = ["first" , "second", "third", ... ,"nth"];
        array.join("-"); -> joins the array via a symbol into a string. (ie. - | + | _ | , )
        array.concat(["one", "two"]); -> Joins data members to the end of array.
        array.push("hello"); -> destructive method alters origional value and pushes value at end.
        array.pop(); -> returns a value from the top of array.                                                                */
        
        /* Another array function that uses callback functions is array.forEach()
           This function allows manipulation of each element of an array. 
           for more details on callback, look at Other Function Syntax in syntax.js.                                          */

        //Standard
        array.forEach(function(element){//do something
        });
        //Arrow Function
        array.forEach(element => { // do something
        }); 
        //Optionally, you can use the perameter index
        array.forEach(element => { // do something
        }, index); 