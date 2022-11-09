const navbarContainer = document.getElementById('Navbar-mob');
const showNavbar = document.getElementById('header-hamburgerrrs');
const closeNavbars = document.getElementById('X-sign');
const PoNavigation = document.getElementById('navigation-item-po');
const AbNavigation = document.getElementById('navigation-item-ab');
const CoNavigation = document.getElementById('navigation-item-co');
const Myprojects = document.getElementById('MyprojectsId');
const containerprojects = document.getElementById('container-of-Myprojects');
const buttons = containerprojects.getElementsByTagName('button');
const Popups = document.getElementById('popups');
const seeproject = document.getElementById('seeproject');
const closeproject = document.getElementById('X-sign-2');
const generalDocument = document.getElementById('html');

const Projectdetail = [
  {
    id: 0,
    Title: 'todo list project by react',
    paragraph:
      ' todo list website where you may add, edit, read, and delete tasks, built with React, if you refresh the page, your tasks will not be deleted.',
    description:
      'todo list website where you may add, edit, read, and delete tasks, built with React',
    image: '/images/screen1.png',
    skils: 'react',
    LiveDemo: 'https://whitewolfx99.github.io/Portfolio/',
    githubLink: 'https://github.com/whiteWolfx99/CRUD-React',
  },
  {
    id: 1,
    Title: 'blog project bult with react',
    paragraph:
      ' blog website where you may add, edit, read, and delete posts, built with React, if you refresh the page, your posts will not be deleted.',
    description:
    ' blog website where you may add, edit, read, and delete posts, built with React, if you refresh the page, your posts will not be deleted.',
    image: '/images/screen2.png',
    skils: 'react',
    LiveDemo: 'https://whitewolfx99.github.io/Portfolio/',
    githubLink: 'https://github.com/whiteWolfx99/BlogList',
  },
  {
    id: 2,
    Title: 'Encrypted data app built with vue',
    paragraph:
      'Encrypted data app built with vue, where you may encrypt your data and decrypt it. you can use it for password hashing.',
    description:
      'Encrypted data app built with vue, where you may encrypt your data and decrypt it. you can use it for password hashing.',
    image: '/images/screen3.png',
    skils: 'vue',
    LiveDemo: 'https://whitewolfx99.github.io/Portfolio/',
    githubLink: 'https://github.com/whiteWolfx99/Portfolio',
  },
  {
    id: 3,
    Title: 'awesome books built with javascript',
    paragraph:
      'awesome books project built with javascript, which is a library app that allows you to add books to a list, remove books from the list.',
    description:
      'awesome books project built with javascript, which is a library app that allows you to add books to a list, remove books from the list.',
    image: '/images/screen4.png',
    skils: 'javascript',
    LiveDemo: 'https://whitewolfx99.github.io/Portfolio/',
    githubLink: 'https://github.com/whiteWolfx99/Awesome-Books-Solo',
  },
  {
    id: 4,
    Title: 'todo list project by javascript',
    paragraph:
      ' todo list website where you may add, edit, read, and delete tasks, built with javascript, if you refresh the page, your tasks will not be deleted.',
    description:
      'todo list website where you may add, edit, read, and delete tasks, built with javascript',
    image: '/images/screen5.png',
    skils: 'javascript',
    LiveDemo: 'https://whitewolfx99.github.io/Portfolio/',
    githubLink: 'https://github.com/whiteWolfx99/todolist',
  },
  {
    id: 5,
    Title: 'confrere project by with html and css',
    paragraph:
      ' confrere project by with html and css, which is a website for student clubs in the university which is helping them to manage their activities.',
    description:
    ' confrere project by with html and css, which is a website for student clubs in the university which is helping them to manage their activities.',
    image: '/images/screen6.png',
    skils: 'html and css',
    LiveDemo: 'https://whitewolfx99.github.io/Portfolio/',
    githubLink: 'https://github.com/whiteWolfx99/module1_capstone-',
  },
];

function RpeatProjects() {
  let count;
  for (count = 0; count < Projectdetail.length; count += 1) {
    Myprojects.innerHTML
      += `<div class="BackgroundProjects${[count]}">
       <div class="Projectblack">
       <h2 class="TitleOfProjects">${Projectdetail[count].Title}</h2>
       <p class="projectparagraph">${Projectdetail[count].paragraph}</p>
       <ul class="frame">
       <li>
       <p class="frameworkss">${Projectdetail[count].skils}</p>
     </li>
       </ul>
       <button data-target="${Projectdetail[count].id}" type="submit" class="projectbutton">See Project</button>
       </div>
    </div>`;
  }

  function hideModal() {
    Popups.innerHTML = '';
    Popups.classList.add('hidden');
    generalDocument.classList.remove('scroll-null');
  }

  function showModal(button) {
    const pId = button.target.getAttribute('data-target');
    const project = Projectdetail.filter(
      (p) => parseInt(p.id, 10) === parseInt(pId, 10),
    );
    Popups.innerHTML = `<div class="Pop-Ups-container">
                        <div class="Pop-Ups-row-1">
                          <div class="Pop-Ups-row-1-col-1">
                            <h2>Keeping track of hundreds of components website</h2>
                          </div>
                          <div class="Pop-Ups-row-1-col-1">
                            <img id="X-sign-3" src="./images/close.svg" alt="close" />
                          </div>
                        </div>
                        <div class="Pop-Ups-row-2">
                        <p class="framework-item">${Projectdetail[0].skils}</p>
                        </div>
                        <div class="Pop-Ups-row-3">
                          <div class="Pop-Ups-col-1">
                            <img
                              class="popimage"
                              src="${project[0].image}"
                              alt="Portfolio"
                            />
                            
                          </div>
                          <div class="Pop-Ups-col-2">
                            <p>
                            ${project[0].description}                         
                            </p>
                            <h4 class="LivePlace">
                            <a
                              class="Livebutton"
                              href="${project[0].LiveDemo}"
                              >See Live <img src="./images/Icon-seelive.svg" alt=""
                            /></a>
                            <a class="Livebutton"
                                id="projectDetailButtonSource"
                                href="${project[0].githubLink}"
                                >See Source <img src="./images/githubpop.png" alt=""
                              /></a>
                            </h4>
                            </div>
                            </div>
                          </div>`;

    Popups.classList.remove('hidden');
    const popUpClose = document.getElementById('X-sign-3');
    popUpClose.addEventListener('click', hideModal);
    generalDocument.classList.add('scroll-null');
  }

  let i;
  for (i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', showModal.bind(buttons[i]));
  }
}

function openNavbar() {
  navbarContainer.classList.remove('hidden');
  showNavbar.classList.add('hidden');
}

function closeNavbar() {
  navbarContainer.classList.add('hidden');
  showNavbar.classList.remove('hidden');
}

function openpopups() {
  Popups.classList.remove('hidden');
}

function closepopups() {
  Popups.classList.add('hidden');
}

seeproject.addEventListener('click', openpopups);
closeproject.addEventListener('click', closepopups);
showNavbar.addEventListener('click', openNavbar);
closeNavbars.addEventListener('click', closeNavbar);
PoNavigation.addEventListener('click', closeNavbar);
AbNavigation.addEventListener('click', closeNavbar);
CoNavigation.addEventListener('click', closeNavbar);
document.addEventListener('DOMContentLoaded', RpeatProjects, false);

const makeform = document.getElementById('Contact-form');
const alerterror = document.getElementById('Alert-message');
const emailsfield = document.getElementById('email-form');

makeform.addEventListener('submit', (event) => {
  const reg = /[A-Z]/;

  if (reg.test(emailsfield.value)) {
    alerterror.classList.remove('hidden');
    event.preventDefault();
  } else if (!alerterror.classList.classname === 'hidden') {
    alerterror.classList.add('hidden');
  }
});