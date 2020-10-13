const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav

const navMenu = document.querySelectorAll('a');

navMenu[0].textContent = siteContent['nav']['nav-item-1'];
navMenu[1].textContent = siteContent['nav']['nav-item-2'];
navMenu[2].textContent = siteContent['nav']['nav-item-3'];
navMenu[3].textContent = siteContent['nav']['nav-item-4'];
navMenu[4].textContent = siteContent['nav']['nav-item-5'];
navMenu[5].textContent = siteContent['nav']['nav-item-6'];

navMenu.forEach (element => element.style.color = 'green');
navMenu.forEach (element => element.style.backgroundColor = 'yellow');


// additional nav items

const home = document.createElement('a');
home.textContent = 'Home';
home.style.color = 'green';
home.style.backgroundColor = 'yellow';
document.querySelector('nav').prepend(home);


const login = document.createElement('a');
login.textContent = 'Login';
login.style.color = 'green';
login.style.backgroundColor = 'yellow';
document.querySelector('nav').appendChild(login);

//cta

const ctaTitle = document.querySelector('h1');
ctaTitle.textContent = siteContent['cta']['h1'];

//cta button
const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];
ctaButton.style.backgroundColor = 'yellow';

//cta img
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//content h4 p

const contentTitle = document.querySelectorAll('h4');


contentTitle[0].textContent = siteContent['main-content']['features-h4'];
contentTitle[1].textContent = siteContent['main-content']['about-h4'];
contentTitle[2].textContent = siteContent['main-content']['services-h4'];
contentTitle[3].textContent = siteContent['main-content']['product-h4'];
contentTitle[4].textContent = siteContent['main-content']['vision-h4'];

const contentText = document.querySelectorAll('p');
contentText[0].textContent = siteContent['main-content']['features-content'];
contentText[1].textContent = siteContent['main-content']['about-content'];
contentText[2].textContent = siteContent['main-content']['services-content'];
contentText[3].textContent = siteContent['main-content']['product-content'];
contentText[4].textContent = siteContent['main-content']['vision-content'];

//middle img

const middlePic = document.querySelector('.middle-img');
middlePic.setAttribute('src', siteContent['main-content']['middle-img-src']);

//contact
contentTitle[5].textContent = siteContent['contact']['contact-h4'];

contentText[5].textContent = siteContent['contact']['address'];
contentText[6].textContent = siteContent['contact']['phone'];
contentText[7].textContent = siteContent['contact']['email'];


//footer
contentText[8].textContent = siteContent['footer']['copyright'];




















/*
//nav bar
const nav = document.querySelector('nav');


const anchor = document.querySelectorAll('a');
anchor[0].textContent = 'services';
anchor[1].textContent = 'product';
anchor[2].textContent = 'vision';
anchor[3].textContent = 'feature';
anchor[4].textContent = 'about';
anchor[5].textContent = 'contact';

//nav styles

anchor.forEach (element => element.style.backgroundColor = 'yellow');
anchor.forEach (element => element.style.color = 'green');

// additional nav items

const home = document.createElement('a');
home.textContent = 'Home';
home.style.color = 'green';
home.style.backgroundColor = 'yellow';
nav.prepend(home);


const login = document.createElement('a');
login.textContent = 'Login';
login.style.color = 'green';
login.style.backgroundColor = 'yellow';
nav.appendChild(login);

// .cta

//???????????

const h1 = document.querySelector ('h1');
//h1.textContent = 'DOM IS AWESOME';

h1.setAttribute ('style', 'white-space: pre;');
h1.textContent += 'DOM \r\n';
h1.textContent += 'IS \r\n';
h1.textContent += 'awesome'

const button = document.querySelector('button');
button.textContent = 'Get Started';
button.style.backgroundColor = 'yellow';

const headerImg = document.querySelector('#cta-img');
headerImg.src = 'img/header-img.png';

// main content
// .top-content

const top_h4 = document.querySelectorAll ('.top-content h4');
top_h4[0].textContent = 'Features';
top_h4[1].textContent = 'About';

const top_p = document.querySelectorAll ('.top-content p');
top_p[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
top_p[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


//middle img

const middleImg = document.querySelector ('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

// bottom content

const bottom_h4 = document.querySelectorAll('.bottom-content h4');
bottom_h4[0].textContent = 'Services';
bottom_h4[1].textContent = 'Products';
bottom_h4[2].textContent = 'Vision';

const bottom_p = document.querySelectorAll ('.bottom-content p');
bottom_p[0].textContent = 'services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottom_p[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottom_p[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';



//contact section

const contact_h4 = document.querySelector('.contact h4');
contact_h4.textContent = 'Contact';

const contact_p = document.querySelectorAll ('.contact p'); 

//contact_p[0].textContent = '123 Way 456 Street Somewhere, USA';

contact_p[0].setAttribute('style', 'white-space: pre;');
contact_p[0].textContent = '123 Way 456 Street \r\n';
contact_p[0].textContent += 'Somewhere, USA';

contact_p[1].textContent = "1 (888) 888-8888";
contact_p[2].textContent = "sales@greatidea.io";


//footer

const footer_p = document.querySelector("footer p");
footer_p.textContent = "Copyright Great Idea! 2018";




*/


