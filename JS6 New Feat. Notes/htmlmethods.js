/*  Naturally there are front end interactions that javascript needs, afterall JS was 
    a language designed to run off a broswer. There are some methods that should be known.
    This will be very involved so be prepared.

    (Web) HTML Page Querying:
    _________________________________________________________________________________________ */

    // Grabs elements in html page as a node list.
    // We can use the list just like any other list in java.

    // Say for instance we have the element:
    <div class="error"> This is an error </div>   
    // We want to grab all divs with the class "error"
    const diverr = document.querySelector('div.error');

    // Say we want to grab ALL objects with class "error"
    const allerr = document.querySelectorAll(".error");
    // Say we want to grab ALL <p> elements. We use:
    const paras = document.querySelectorAll('p');
/*  ____________________________________________________________________________________________
    
    (Web) HTML Getting Elements from HTML:
    ____________________________________________________________________________________________ */

    // Grabs element by ID. Id should always be unique.
    <article id="blogs"> This is a article with id='blogs'</article>
    let blogList = document.getElementById('blogs');

    // Grab elements by Class. Returns a HTMLCollection.
    <p class="bodyOfArticle"> This is a paragraph in an article</p>
    let paraList = document.getElementsByClassName('bodyOfArticle');

    // Grab elements by tag name. Returns a HTMLCollection.
    let paras = documents.getElementsByTagName('p');

    // Note: You must convert HTMLCollections to arrays. Its more or less an extra step so query
    //       Is generally better unless you have a specific element you want to get.
/*  ____________________________________________________________________________________________ 

    (Web) Overwrite HTML Elements:                                                            
    ____________________________________________________________________________________________ */

    // grabs the inner text of html elements.
    const para = document.querySelector('div.error');
    para.innerText = "New Text";
    // say you want to overwrite all inner text.
    const para = document.querySelectorAll('div');
    para.forEach(para =>{
        console.log(para.innerText);
    });
    // say you want to append to all elements.
    const para = document.querySelectorAll('div');
    para.forEach(para =>{
        para.innerText += 'some new text';
    });

    // grabs the entire html of and element.
    const para = document.querySelector('div');
    para.innerHTML = <div class="content"> This div was given class='content'.</div>;
    // say you want to append an html element to the referenced html element.
    para.innerHTML += <div id="dog" src="./pictures/dogpictures/goodboy"> hes a good boy :)</div>
    // say we have an array of something. We can also append something dynamically.
    const dogs = ["boswer", "cherry", "george"];
    dogs.forEach(goodboy => {
        para.innerHTML += '<p>${dog}<p>';
    });

    // gets an anchor tag to an element
    const link = document.querySelectorAll('a');
    console.log(link.getAttribute('href'));

    // sets an anchor tag to an element
    link.setAttribute(href, "https://www.reddit.com/r/rarepuppers")
    style.setAttribute(style, "color:blue");

    // operators to add or remove class lists
    const content = document.querySelector('p');
    content.classList.add('error');
    content.classList.remove('error');

