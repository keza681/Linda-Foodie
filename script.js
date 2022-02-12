const foodLists = [
  {
    image: 'images/plate1.png',
    name: 'Burger Rafiné',
    prix: '4.5 USD',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim eu ante vitae imperdiet.',
  },
  {
    image: 'images/plate2.png',
    name: 'Cheeps special',
    prix: '6 USD',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum congue aliquam.',
  },
  {
    image: 'images/plate3.png',
    name: 'Pizza Zairois',
    prix: '8.8 USD',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet accumsan turpis eget lacinia.',
  },
  {
    image: 'images/plate1.png',
    name: 'Salad Avocat',
    prix: '12 USD',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id vulputate magna.',
  },
  {
    image: 'images/plate1.png',
    name: 'Smoothy',
    prix: '17 USD',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id vulputate magna.',
  },
  {
    image: 'images/plate1.png',
    name: 'Rapid coffee',
    prix: '11.5 USD',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id vulputate magna.',
  },
];

window.onload = () => {
  foodLists.forEach((foodList) => {
    document.querySelector('.deliveryCard').innerHTML += `
          <div class="card2">
              <img class="lecturerPic" src="${foodList.image}" alt="${foodList.name}">
              <div class="lecturer-info">
              <h3 class="lecturer-name">${foodList.name}</h3>
              <h4 class="lecturer-position">${foodList.prix}</h4>
              <div class="grey-line"></div>
              <p class="lecturer-detail">${foodList.description}</p>
              </div>
          </div>`;
  });
  document.querySelector('.foods').innerHTML = `
    <div class="card2">
        <img class="lecturerPic" src="${foodLists[0].image}" alt="${foodLists[0].name}">
        <div class="lecturer-info">
        <h3 class="lecturer-name">${foodLists[0].name}</h3>
        <h4 class="lecturer-position">${foodLists[0].prix}</h4>
        <div class="grey-line"></div>
        <p class="lecturer-detail">${foodLists[0].description}</p>
        </div>
    </div>
    <div class="card2">
        <img class="lecturerPic" src="${foodLists[1].image}" alt="${foodLists[1].name}">
        <div class="lecturer-info">
        <h3 class="lecturer-name">${foodLists[1].name}</h3>
        <h4 class="lecturer-position">${foodLists[1].prix}</h4>
        <div class="grey-line"></div>
        <p class="lecturer-detail">${foodLists[1].description}</p>
        </div>
    </div>`;
};

const menu = document.querySelector('.mobile-menu');
const list = document.querySelector('.mobile-menu-list');

function toggleMenu() {
  if (list.style.display === 'flex') {
    list.style.display = 'none';
    menu.innerHTML = "<img src='https://img.icons8.com/ios/50/000000/menu--v4.png'/>";
  } else {
    list.style.display = 'flex';
    menu.innerHTML = "<img src='https://img.icons8.com/ios/50/000000/delete-sign--v1.png'/>";
  }
}
menu.addEventListener('click', toggleMenu);

const desktopCards = document.querySelector('.deliveryCard');
const mobileCards = document.querySelector('.deliveryCard-preview');
const btn = document.querySelector('.food-btn');

function showCards() {
  if (desktopCards.style.display === 'grid') {
    desktopCards.style.display = 'none';
    mobileCards.style.display = 'block';
    btn.innerHTML = 'More <span> <i class="fa fa-angle-down"></i></span>';
  } else {
    mobileCards.style.display = 'none';
    desktopCards.style.display = 'grid';
    btn.innerHTML = 'Less <span> <i class="fa fa-angle-up"></i></span>';
  }
}

btn.addEventListener('click', showCards);