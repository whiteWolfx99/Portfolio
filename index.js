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
    Title: 'profisional Art printing Data',
    paragraph:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: '/images/ImgsPlaceholder.png',
    firstImage: './images/html.png',
    secondImage: './images/bootstrap.png',
    thirdImage: './images/ruby.png',
    LiveDemo: 'https://whitewolfx99.github.io/Portfolio/',
    githubLink: 'https://github.com/whiteWolfx99/Portfolio',
  },
  {
    id: 1,
    Title: 'profisional Art printing Data',
    paragraph:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: '/images/ImgsPlaceholder.png',
    firstImage: './images/html.png',
    secondImage: './images/bootstrap.png',
    thirdImage: './images/ruby.png',
    LiveDemo: 'https://whitewolfx99.github.io/Portfolio/',
    githubLink: 'https://github.com/whiteWolfx99/Portfolio',
  },
  {
    id: 2,
    Title: 'profisional Art printing Data',
    paragraph:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: '/images/ImgsPlaceholder.png',
    firstImage: './images/html.png',
    secondImage: './images/bootstrap.png',
    thirdImage: './images/ruby.png',
    LiveDemo: 'https://whitewolfx99.github.io/Portfolio/',
    githubLink: 'https://github.com/whiteWolfx99/Portfolio',
  },
  {
    id: 3,
    Title: 'profisional Art printing Data',
    paragraph:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: '/images/ImgsPlaceholder.png',
    firstImage: './images/html.png',
    secondImage: './images/bootstrap.png',
    thirdImage: './images/ruby.png',
    LiveDemo: 'https://whitewolfx99.github.io/Portfolio/',
    githubLink: 'https://github.com/whiteWolfx99/Portfolio',
  },
  {
    id: 4,
    Title: 'profisional Art printing Data',
    paragraph:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: '/images/ImgsPlaceholder.png',
    firstImage: './images/html.png',
    secondImage: './images/bootstrap.png',
    thirdImage: './images/ruby.png',
    LiveDemo: 'https://whitewolfx99.github.io/Portfolio/',
    githubLink: 'https://github.com/whiteWolfx99/Portfolio',
  },
  {
    id: 5,
    Title: 'profisional Art printing Data',
    paragraph:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: '/images/ImgsPlaceholder.png',
    firstImage: './images/html.png',
    secondImage: './images/bootstrap.png',
    thirdImage: './images/ruby.png',
    LiveDemo: 'https://whitewolfx99.github.io/Portfolio/',
    githubLink: 'https://github.com/whiteWolfx99/Portfolio',
  },
];

function RpeatProjects() {
  let count;
  for (count = 0; count < Projectdetail.length; count += 1) {
    Myprojects.innerHTML
      += `<div class="BackgroundProjects${[count]}">
        <h2 class="TitleOfProjects">${Projectdetail[count].Title}</h2>
        <p class="projectparagraph">${Projectdetail[count].paragraph}</p>
        <ul class="frame">
            <li><a href=""><img class="skill-image-tag" src="${Projectdetail[count].firstImage}"
                        alt="Rubi"></a>
            </li>
            <li><a href=""><img class="skill-image-tag" src="${Projectdetail[count].secondImage}"
                        alt="Bootstrap"></a></li>
            <li><a href=""><img class="skill-image-tag" src="${Projectdetail[count].thirdImage}"
                        alt="HTML"></a></li>
        </ul>
        <button data-target="${Projectdetail[count].id}" type="submit" class="projectbutton">See Project</button>
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
                            <img id="X-sign-2" src="./images/close.svg" alt="close" />
                          </div>
                        </div>
                        <div class="Pop-Ups-row-2">
                          <p class="framework-item">html</p>
                          <p class="framework-item">bootstrap</p>
                          <p class="framework-item">Ruby on Rails</p>
                        </div>
                        <div class="Pop-Ups-row-3">
                          <div class="Pop-Ups-col-1">
                            <img
                              class="popimage"
                              src="./images/Portfolio.png"
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
    const popUpClose = document.getElementById('X-sign-2');
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
  const regix = /[A-Z]/;

  if (regix.test(emailsfield.value)) {
               alerterror.classList.remove('hidden');
                    event.preventDefault();
  }  
   else if (!alerterror.classList.classname === 'hidden') {
                 alerterror.classList.add('hidden');
  }
});