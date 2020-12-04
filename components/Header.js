// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerDiv = document.createElement('div');
    const span1 = document.createElement('span');
    const header1= document.createElement('h1');
    const span2 = document.createElement('span');

    span1.textContent = 'MARCH 28, 2020';
    header1.textContent = 'Lambda Times';
    span2.textContent = '98°';

    headerDiv.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    headerDiv.appendChild(span1);
    headerDiv.appendChild(header1);
    headerDiv.appendChild(span2);

    return headerDiv;

}

const header_container = document.querySelector('.header-container');

header_container.appendChild(Header());