let article = {
  title: 'Why Accessibility Matters in UI UX Design',
  date: 'May 25, 2023',
  description: 'Accessibility is a word that is often thrown around in the design field. As a UI/UX Web Designer, you might have heard this word a few times and you might wonder why its imporant.'
}

let title = document.getElementById('title');
let date = document.getElementById('date');
let description = document.getElementById('description');

title.textContent = article.title;
date.textContent = article.date;
description.textContent = article.description;

let article2 = {
  title2:'Web Accessibility – Common ARIA Mistakes to Avoid',
  date2: 'January 11, 2023',
  description2: 'Accessible Rich Internet Applications – or ARIA – is a set of attributes and roles defined by the Web Accessibility Initiative. These make the web more accessible to people with disabilities.',

}

let title2 = document.getElementById('title2');
let date2 = document.getElementById('date2');
let description2 = document.getElementById('description2');

title2.textContent = article2.title2;
date2.textContent = article2.date2;
description2.textContent = article2.description2;

let article3 = {
  title3: 'Accessibility Resources for Developers',
  date3: 'September 5, 2023',
  description3: 'Accessibility is never a "nice-to-have" requirement when it comes to developing websites and apps. Its a "must-have" that should be an integral part of your design and development process.',
}

let title3 = document.getElementById('title3');
let date3 = document.getElementById('date3');
let description3 = document.getElementById('description3');

title3.textContent = article3.title3;
date3.textContent = article3.date3;
description3.textContent = article3.description3;
