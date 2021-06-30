// Fetch Data Featured speakers
const speaker = document.querySelector('.speaker-list');

const speakers = [
  {
    id: 11,
    image: 'assets/images/img1.jpg',
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminial book The Wealth of Networkds in 2006.',
  },
  {
    id: 12,
    image: 'assets/images/img2.jpg',
    name: 'Kilnam Chon',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the internet Society (ISOC) Internet Hall of Fame',
  },
  {
    id: 13,
    image: 'assets/images/img3.jpg',
    name: 'SohYeong Noh',
    title: 'Director of Art Center Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among scient technology, humanities, and the arts.',
  },
  {
    id: 14,
    image: 'assets/images/img4.jpg',
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    description: "Europen ingetration, political democray and participation of youth through online as her major condem, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
  },
  {
    id: 4,
    image: 'assets/images/img5.jpg',
    name: 'Lila Tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 language and used by nearly half a billion people around the world every month.',
  },
  {
    id: 16,
    image: 'assets/images/img6.jpg',
    name: 'Ryan Merkley',
    title: 'CEO of Create Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
];

function loadSpeakers() {
  speakers.forEach(({
    id, name, title, description, image,
  }) => {
    const li = document.createElement('li');
    const itemBody = `<li class="speaker-item">
       <img
         class="thumbnail"
         src="${image}"
         alt="${name} ${id}"
       />
       <div>
         <h6 class="header-4">${name}</h6>
         ${title ? `<small class="caption-1 fs-italics fw-bold color-primary">${title}</small>` : ''}
         <p class="caption-1">${description}</p>
       </div>
     </li>`;
    li.innerHTML = itemBody;
    speaker.appendChild(li);
  });
}

loadSpeakers();
