// Fetch Data Featured speakers
const speaker = document.querySelector('.speaker-list');

const speakersobject = [
  {
    id: 12,
    image: 'images/img1.jpg',
    name: 'Khadijah Mella',
    title:
      'The best United Kingdom Jockey in 2020',
    description:
      'The best United Kingdom jockey.  Learns from scracth within only 6 weeks before winning',
  },
  {
    id: 12,
    image: 'images/img2.jpg',
    name: 'Frankie Dettori',
    title:
      'The shy jockey who never loose the game unless if forget his horse behind him',
    description:
      'This jockey never complaint in his entire life.  He walk away after winning, and ehen asked about his secret ingridient, his reply is: I will let you know later in private.  But he will never.',
  },
  {
    id: 13,
    image: 'images/img3.jpg',
    name: 'Nina Carberry',
    title: 'The best Irland female jockey who eats chocale every day',
    description:
      'Wins 5 times in a row.  Named As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among scient technology, humanities, and the arts.',
  },
  {
    id: 14,
    image: 'images/img4.jpg',
    name: 'Oisin Murphy',
    title: 'The best France jockey',
    description:
      'Elected best jockey in Europen in 2015 and 2016.  He spends most his times drinking tea and eating dates to keep his fitness',
  },
  {
    id: 4,
    image: 'images/img5.jpg',
    name: 'Hamzah Jufri',
    title: 'The best Indonesia jockey who sleeps only 3 hours a day!',
    description:
      'Wins consecutively for 7 years in South East Asia but never takes the prize because he races just for fun.',
  },
  {
    id: 16,
    image: 'images/img6.jpg',
    name: 'Others',
    title: 'Best of the best jockeys from the continent',
    description:
      'These jockeys they never joke but they always smile and laugh when others joke.  They dont drink coffee except if its free of charge',
  },
];

function loadSpeakers() {
  speakersobject.forEach(({
    id, name, title, description, image,
  }) => {
    const li = document.createElement('li');
    const itemBody = `<li class='speaker-item'>
       <img
         class='thumbnail'
         src='${image}'
         alt='${name} ${id}'
       />
       <div>
         <h6 class='heading-3'>${name}</h6>
         ${title ? `<small class='caption-1 fs-italics fw-bold color-primary'>${title}</small>` : ''}
         <hr class='line-gray'>
         <p class='caption-1'>${description}</p>
       </div>
     </li>`;
    li.innerHTML = itemBody;
    speaker.appendChild(li);
  });
}

loadSpeakers();
