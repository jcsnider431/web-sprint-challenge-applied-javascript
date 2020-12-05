// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//

import axios from 'axios';
console.log(axios);
axios.get("https://lambda-times-api.herokuapp.com/articles")
.then((res)=>{
  const data = res.data.articles;
  console.log(data);
});
// Use your function to create a card for each of the articles, and append each card to the DOM.


function newArticle(article){
const cardDiv = document.createElement('div');
const headlineDiv = document.createElement('div');
const authorDiv = document.createElement('div');
const imgDiv = document.createElement('div');
const image = document.createElement('img');
const span = document.createElement('span');

headlineDiv.textContent = article.headline;
image.src = article.authorPhoto;
span.textContent =`By ${article.authorName}`;

cardDiv.classList.add('card');
headlineDiv.classList.add('headline');
authorDiv.classList.add('author');
imgDiv.classList.add('img-container');
cardDiv.appendChild(headlineDiv);
cardDiv.appendChild(authorDiv);
authorDiv.appendChild(imgDiv);
imgDiv.appendChild(image);
authorDiv.appendChild(span);

cardDiv.addEventListener('click',()=>{
    console.log(headlineDiv)
 })
return cardDiv
}
const card = document.querySelector('.cards-container');
 axios.get('https://lambda-times-api.herokuapp.com/articles')
     .then((res)=>{
         const data = Object.create(res.data);
         const cardData = Object.values(data.articles);
         cardData.map((obj)=>{
            obj.forEach(items =>{
                card.appendChild(newArticle(items))
            })
        })
    })

// axios.get('https://lambda-times-api.herokuapp.com/articles')
//      .then((res)=>{
//          let data = (res.data.articles)
//          data.forEach(obj => {

         
//          let data2 = Object.keys(obj).map((e) =>{
            
//            return obj[e]

//           })
//           data2.forEach(items =>{
//             card.appendChild(newArticle(items))
//           })
//         })
//      })
         // const result = data.filter(title => ){}
        //  const newCard = newArticle(data.filter(filterByID));
        //  cardCont.appendChild(newCard);
             

        // axios.get('https://lambda-times-api.herokuapp.com/articles')
        // .then((res)=>{
        //     let names = {}
        //     const data = res.data.articles;
        //     data.find(obj =>{
        //         if( obj === 'javescript'){
        //             names.push(obj);
        //         }else if( obj === 'bootstrap'){
        //             names.push(obj);
        //         }else if( obj === 'technoloy'){
        //             names.push(obj);
        //         }else if(obj === 'jquery'){
        //             names.push(obj);
        //         }else if(obj === 'node'){
        //             names.push(obj);
        //         }}
        //         names.forEach(item =>{
        //             card.appendChild(newArticle(names))
        //         })
        //         );
        //     })

