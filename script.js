
const cardData = [
  { name: "John", age: 22, education: "B.Sc. Computer Science", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "89" },
  { name: "Jane", age: 24, education: "B.E", course: "Full Stack Web Development", image: "f student icon.jpg", lvl: "82" },
  { name: "Paul", age: 23, education: "B.Tech Mechanical", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "88" },
  { name: "Alice", age: 21, education: "B.Com", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "76" },
  { name: "Emily", age: 25, education: "MBA", course: "Full Stack Web Development", image: "f student icon.jpg", lvl: "74" },
  { name: "Michael", age: 27, education: "B.Sc. Physics", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "82" },
  { name: "David", age: 26, education: "B.Sc Electronics ", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "84" },
  { name: "Olivia", age: 22, education: "BCA", course: "Full Stack Web Development", image: "f student icon.jpg", lvl: "76" },
  { name: "Sirus", age: 28, education: "B.Tech Civil", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "96" },
  { name: "Daniel", age: 23, education: "B.Sc. IT", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "66" },
  { name: "Sarah", age: 24, education: "B.Tech AI/ML", course: "Full Stack Web Development", image: "f student icon.jpg", lvl: "63" },
  { name: "James", age: 25, education: "M.Sc. Computer Science", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "87" },
  { name: "Maria", age: 29, education: "B.Tech IT", course: "Full Stack Web Development", image: "f student icon.jpg", lvl: "93" },
  { name: "Lucas", age: 21, education: "MCA", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "89" },
  { name: "Lily", age: 23, education: "B.Tech CS", course: "Full Stack Web Development", image: "f student icon.jpg", lvl: "81" },
  { name: "Sophia", age: 24, education: "MBA", course: "Full Stack Web Development", image: "f student icon.jpg", lvl: "85" },
  { name: "Mayor", age: 22, education: "B.Sc. Mathematics", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "66" },
  { name: "Harper", age: 26, education: "M.Sc. Data Science", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "88" },
  { name: "Ethan", age: 27, education: "B.Tech AI", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "83" },
  { name: "Harry", age: 28, education: "BCA", course: "Full Stack Web Development", image: "student icon.jpg", lvl: "72" },
];

function createHeader() {
  const header = document.getElementById('header');
  const title = document.createElement('h1');
  title.textContent = 'Million coders - a coders zone';
  header.appendChild(title);

  header.style.textAlign = 'center';
  header.style.marginTop = '20px';
  header.style.fontFamily = 'Arial, sans-serif';
  header.style.fontSize = '2em';
  header.style.color = '#333';

  title.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.5)';

  const search = document.getElementById('box');
  search.style.margin = '20px auto';
  search.style.padding = '10px';
  search.style.fontSize = '1.2em';
  search.style.width = '80%';
  search.style.maxWidth = '600px';
  search.style.borderRadius = '8px';
  search.style.border = '1px solid #ccc';

}



function createCard(data) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.width = '200px';
  card.style.height = '400px';
  card.style.border = '1px solid #ccc';
  card.style.borderRadius = '8px';
  card.style.margin = '10px';
  card.style.padding = '10px';
  card.style.boxSizing = 'border-box';
  card.style.textAlign = 'center';
  card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
  card.style.backgroundColor = 'green';

  const img = document.createElement('img');
  img.src = data.image;
  img.alt = data.name;
  img.style.width = '100%';
  img.style.height = '150px';
  img.style.objectFit = 'cover';
  img.style.border = '1px solid #ccc';
  img.style.borderRadius = '8px';
  img.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
  img.style.cursor = 'pointer';

  const name = document.createElement('h3');
  name.textContent = data.name;

  const age = document.createElement('p');
  age.textContent = `Age: ${data.age}`;

  const education = document.createElement('p');
  education.textContent = `Education: ${data.education}`;

  const course = document.createElement('p');
  course.textContent = `Course: ${data.course}`;

  const dB = document.createElement('button');
  dB.textContent = `view-progress`;

  dB.addEventListener('click', () => {
    alert(`${data.name}'s Progress : ${data.lvl} % of course completed!`);
  });

  dB.style.cursor = 'pointer';
  dB.style.backgroundColor = 'skyblue';
  dB.style.borderRadius = '8px';

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(age);
  card.appendChild(education);
  card.appendChild(course);
  card.appendChild(dB);


  return card;
}

function createFooter() {
  const footer = document.getElementById('footer');
  const quotation = document.createElement('p');
  quotation.textContent = 'Let\'s start coding_task by Venkatesh Yenumula';
  footer.appendChild(quotation);

  footer.style.textAlign = 'center';
  footer.style.fontFamily = 'Arial, sans-serif';
  footer.style.marginTop = '20px';
  footer.style.fontSize = '1.2em';
  footer.style.color = '#333';
  footer.style.marginBottom = '20px';
}

function createCards() {
  const container = document.getElementById('card-container');
  let row = document.createElement('div');
  row.style.display = 'flex';
  row.style.flexWrap = 'wrap';
  row.style.justifyContent = 'center';

  cardData.forEach((data, index) => {
    const card = createCard(data);
    row.appendChild(card);

    if ((index + 1) % 5 === 0) {
      container.appendChild(row);
      row.style.marginBottom = '20px';
      row = document.createElement('div');
      row.style.display = 'flex';
      row.style.flexWrap = 'wrap';
      row.style.justifyContent = 'center';
    }
  });

  if (row.children.length > 0) {
    container.appendChild(row);
  }
}


createHeader();
createCards();
createFooter();

const search = document.getElementById('box');  // Search input box
const cardContainer = document.getElementById('card-container');  // Card container

search.addEventListener('input', (e) => {
  const match = e.target.value.toLowerCase();  // Get the search term and convert to lowercase

  // Select all the card elements within the card-container
  const cards = document.querySelectorAll('.card');  // Update this to select the individual card divs

  cards.forEach((card) => {
    const name = card.querySelector('h3').textContent.toLowerCase();  // Get the student's name in lowercase

    if (name.includes(match)) {  // If the name includes the search term
      card.style.display = 'block';  // Show the card
    } else {
      card.style.display = 'none';  // Hide the card
    }
  });
});




