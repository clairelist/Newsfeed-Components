// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

import articleData from './articleData';
/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

//create selector for div.articles

const artDiv = document.querySelector('.articles');

function articleMaker({title,date,firstParagraph,secondParagraph,thirdParagraph}){

//first, we need to make our selectors


const articleClass = document.createElement('div');

const titleCont = document.createElement('h2');
const dateCont = document.createElement('p');

const firstParaCont = document.createElement('p');
const secondParaCont = document.createElement('p');
const thirdParaCont = document.createElement('p');

const expandBtnClass = document.createElement('button');

//next, append the needful so our data will look like the below
// artDiv.appendChild(expandBtnClass);

articleClass.classList.add('article','article-open');
articleClass.appendChild(titleCont);


dateCont.classList.add('date');
articleClass.appendChild(dateCont);

articleClass.appendChild(firstParaCont);
articleClass.appendChild(secondParaCont);
articleClass.appendChild(thirdParaCont);



//add text content to the above needfuls
//title, date, 3 paras

expandBtnClass.textContent = '+';

titleCont.textContent = title;
dateCont.textContent = date;
firstParaCont.textContent = firstParagraph;
secondParaCont.textContent = secondParagraph;
thirdParaCont.textContent = thirdParagraph;



//our returned dom node should look like this::
//<div class="article">
//<h2>{title of the article}</h2>
//<p class="date">{date of the article}</p>

////{three separate paragraph elements}

//<span class="expandButton">+</span>
//</div>

//step 2:: add an event listener to the expand button span
//on a click, toggle 'article-open' on article

expandBtnClass.onclick = function(){
  articleClass.classList.toggle('article-open');
}

//deprecated; as currently implemented, the button itself disappeared. Now we can click on the title itself and it will cause the article to expand/contract

titleCont.onclick = function(){
  articleClass.classList.toggle('article-open');
}

return articleClass;

}


// Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
// to create a div.article element and append it to the DOM inside div.articles (see index.html).



const articleElements = articleData.map(data=>{
  return articleMaker(data);
});

articleElements.forEach(elem=>{
  artDiv.appendChild(elem);
});

// Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
// Refresh the page to see the new article.