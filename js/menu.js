const menuCrds = [
  {
    img: "images/portfolio/1.jpg",
    category: "Web Design",
  },
  {
    img: "images/portfolio/2.jpg",
    category: "Wordpress",
  },
  {
    img: "images/portfolio/3.jpg",
    category: "Photograph",
  },
  {
    img: "images/portfolio/4.jpg",
    category: "Web Design",
  },
  {
    img: "images/portfolio/5.jpg",
    category: "Photograph",
  },
  {
    img: "images/portfolio/6.jpg",
    category: "Wordpress",
  },
  {
    img: "images/portfolio/7.jpg",
    category: "Web Design",
  },
  {
    img: "images/portfolio/8.jpg",
    category: "Wordpress",
  },
  {
    img: "images/portfolio/9.jpg",
    category: "Photograph",
  },
  {
    img: "images/portfolio/10.jpg",
    category: "Web Design",
  },
  {
    img: "images/portfolio/11.jpg",
    category: "Photograph",
  },
  {
    img: "images/portfolio/12.jpg",
    category: "Wordpress",
  },
];
// console.log(menuCrds);
const portfolioCards = document.querySelector(".window.portfolio .cards");
const filterBtn = document.querySelector(".filter ul");
const lieghtbox = document.querySelector(".lieghtbox");
const prevBtn = document.querySelector(".controles .prev-btn");
const nextBtn = document.querySelector(".controles .next-btn");
window.addEventListener("load", (e) => {
  displayMenuItems(menuCrds);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<div class="card">
      <div class="image"><img src="${item.img}" alt="" /></div>
      <div class="info">
        <h3>${item.category}</h3>
        <div class="search"><i class="fa fa-search"></i></div>
      </div>
    </div>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  portfolioCards.innerHTML = displayMenu;
  changeItems();
}
function displayMenuButtons() {
  const categories = menuCrds.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const categoriesBtn = categories
    .map((category) => {
      return `<li class="filter-btn" data-id="${category}"> ${category} </li>`;
    })
    .join("");
  filterBtn.innerHTML = categoriesBtn;
  const portfoliobtns = filterBtn.querySelectorAll(".filter-btn");
  portfoliobtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      portfoliobtns.forEach((btn) => {
        btn.classList.remove("find");
      });
      btn.classList.add("find");
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menuCrds.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
          console.log("ues");
        }
      });
      if (category === "All") {
        displayMenuItems(menuCrds);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
// ####################
// start lieghtbox section
// ###################

const lieghtboxContent = document.querySelector(".lieghtbox-content");
function changeItems() {
  const cards = Array.from(portfolioCards.querySelectorAll(".card"));
  console.log(cards);
  for (let i = 0; i < cards.length; i++) {
    const lenghts = cards.length;
    const card = cards[i];

    let num = i;
    card.addEventListener("click", () => {
      lieghtbox.classList.add("sho");
      displaygaleri(card, num, lenghts);
      prevBtn.addEventListener("click", () => {
        prevItem();
      });
      nextBtn.addEventListener("click", () => {
        nextItem();
      });

      function prevItem() {
        if (num == 0) {
          num = cards.length - 1;
        } else {
          num--;
        }
        displaygaleri(cards[num], num, lenghts);
        
      }
      function nextItem() {
        if (num == cards.length - 1) {
          num = 0;
        } else {
          num++;
        }
        displaygaleri(cards[num], num, lenghts);
      }
      
    });
  }
}

function displaygaleri(menuItems, index , total) {
  const src = menuItems.querySelector(".image img").src;
  const category = menuItems.querySelector(".info h3").textContent;
  // const total = menuItems.parentElement.children.length;
  const number = index + 1;

  const galeri = `<div class="lieghtbox-closs">&times;</div>
    <div class="images"><img src="${src}"></div>
    <div class="lieghtbox-caption">
      <div class="category">${category}</div>
      <div class="counter"> ${number} of ${total}</div>`;
  lieghtboxContent.innerHTML = galeri;
  const image = lieghtboxContent.querySelector('.images');
  image.addEventListener('dblclick', () => {
    image.classList.toggle("zoom")
    console.log('es');
  })
  const clossBtn = lieghtboxContent.querySelector(".lieghtbox-closs");
  clossBtn.addEventListener("click", () => {
    lieghtbox.classList.remove("sho");
  });
}
