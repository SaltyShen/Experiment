/*  This MD will only note the difference of JS6 and Java alongwith key points and features of JS6. 
    It is strongly recommended that if you read this, you have a strong understanding of programming in Java before hand.
    I ommited many of the common opperators in most OOP languages.


     Variables:
    _______________________________________________________________________________________________________________________ */
        //older way of making variables. Can be used globally outside of scope.
        var a;
        
        //newer data type. Cannot start with a number. Can only be called within scope.
        let b;
        
        //static data type
        const c;
/*  _______________________________________________________________________________________________________________________
        
        (Primative) Booleans:
    _______________________________________________________________________________________________________________________  */
        //Returns true if a is included in string. Else false.
        string.includes("a");
        
        //Same as previous only with a string.
        string.includes("a string");
/*  _______________________________________________________________________________________________________________________
        
        (Primative) String:
    _______________________________________________________________________________________________________________________  */
        //outputs a variable value directly.
        var foo = "bar";
        console.log('lets meet at the ${foo}');

        //set string to upper or lowercase.
        string.toUpper();string.toLower();
        
        //Returns the index of the char a.
        string.lastIndexOf("a");

        //(see: https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring)
        //Returns the substring from index a to b.
        string.substr(a , b); 
        //Returns the substring of a string from index a to b.
        string.slice(a , b);
        
        //replaces char a with char b.
        string.replace(a, b);
