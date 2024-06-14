AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Toggle language function
function toggleLanguage() {
  // Obtenemos el idioma actual
  const currentLang = localStorage.getItem('lang');

  // Si el idioma actual es español, cambiamos a inglés; de lo contrario, cambiamos a español
  const newLang = currentLang === 'es' ? 'en' : 'es';

  // Guardamos el nuevo idioma en el almacenamiento local
  localStorage.setItem('lang', newLang);

  // Recargamos la página para aplicar los cambios de idioma
  location.reload();
}

// Album functions
let albumImages = ["assets/images/album1.jpg", "assets/images/album2.jpg", "assets/images/album3.jpg"];
let currentIndex = 0;

function showAlbum() {
    document.getElementById("album-popup").classList.remove("d-none");
    document.getElementById("album-image").src = albumImages[currentIndex];
}

function hideAlbum() {
    document.getElementById("album-popup").classList.add("d-none");
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        document.getElementById("album-image").src = albumImages[currentIndex];
    }
}

function nextImage() {
    if (currentIndex < albumImages.length - 1) {
        currentIndex++;
        document.getElementById("album-image").src = albumImages[currentIndex];
    }
}

// Load language file based on user selection or browser default
const lang = localStorage.getItem('lang') || navigator.language.split('-')[0];
const langFile = lang === 'es' ? 'es.json' : 'en.json';

// Manejamos el evento de clic en el botón de cambio de idioma
document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

// Fetch and load language file
fetch(`./assets/lang/${langFile}`)
  .then(response => response.json())
  .then(data => {
    // Navigation links
    const homeLink = document.getElementById('home-link');
    const workLink = document.getElementById('work-link');
    const educationLink = document.getElementById('education-link');
    const contactLink = document.getElementById('contact-link');
    
    homeLink.innerText = data.home;
    workLink.innerText = data.work;
    educationLink.innerText = data.education;
    contactLink.innerText = data.contact;
    
    // Actualiza el atributo href para que los enlaces sigan funcionando correctamente
    homeLink.href = '#home';
    workLink.href = '#work';
   // educationLink.href = '#education';
    contactLink.href = '#contact';

    // Update document title
    document.getElementById('title').innerText = data.title;

    // Presentation
    const h1Element = document.getElementById('presentation');

    // Actualización del texto HTML con la traducción
    h1Element.innerHTML = data.presentation;
    const pElement = document.getElementById('presentation2');

    // Actualiza el contenido del elemento usando innerHTML en lugar de innerText
    pElement.innerHTML = data.presentation2;

    // Work button
    const workButton = document.getElementById('work-button');
    workButton.innerText = data['work-button'];

    // Work section

    // Projects header and title
    const projectsHeader = document.getElementById('projects-header');
    projectsHeader.innerText = data['projects-header'];
    
    const projectsTitle = document.getElementById('projects-title');
    projectsTitle.innerText = data['projects-title'];

    // Projects card content

    // Project card 1
    const projectName1 = document.getElementById('projectname1');
    projectName1.innerText = data['projectname1'];
    
    const projectInfo1 = document.getElementById('projectinfo1');
    projectInfo1.innerHTML = data['projectinfo1'];

    const readMore1 = document.getElementById('readmore1');
    readMore1.innerText = data['readmore1'];

    // Project card 2
    const projectName2 = document.getElementById('projectname2');
    projectName2.innerText = data['projectname2'];
    
    const projectInfo2 = document.getElementById('projectinfo2');
    projectInfo2.innerHTML = data['projectinfo2'];

    const readMore2 = document.getElementById('readmore2');
    readMore2.innerText = data['readmore2'];

    // Project card 3
    const projectName3 = document.getElementById('projectname3');
    projectName3.innerText = data['projectname3'];
    
    const projectInfo3 = document.getElementById('projectinfo3');
    projectInfo3.innerHTML = data['projectinfo3'];

    const readMore3 = document.getElementById('readmore3');
    readMore3.innerText = data['readmore3'];

    // Project card 4
    const projectName4 = document.getElementById('projectname4');
    projectName4.innerText = data['projectname4'];
    
    const projectInfo4 = document.getElementById('projectinfo4');
    projectInfo4.innerHTML = data['projectinfo4'];

    const readMore4 = document.getElementById('readmore4');
    readMore4.innerText = data['readmore4'];

  // education section

     // edu header and title
     const eduHeader = document.getElementById('education-header');
     eduHeader.innerText = data['education-header'];
     
     const eduTitle = document.getElementById('education-title');
     eduTitle.innerText = data['education-title'];

    // Study card content

    // Study card 1
    const studyName1 = document.getElementById('studyname1');
    studyName1.innerText = data['studyname1'];

    const studySchool1 = document.getElementById('studyschool1');
    studySchool1.innerHTML = data['studyschool1'];
    
    const studyInfo1 = document.getElementById('studyinfo1');
    studyInfo1.innerHTML = data['studyinfo1'];

    // Study card 2
    const studyName2 = document.getElementById('studyname2');
    studyName2.innerText = data['studyname2'];

    const studySchool2 = document.getElementById('studyschool2');
    studySchool2.innerHTML = data['studyschool2'];
    
    const studyInfo2 = document.getElementById('studyinfo2');
    studyInfo2.innerHTML = data['studyinfo2'];

    // Study card 3
    const studyName3 = document.getElementById('studyname3');
    studyName3.innerText = data['studyname3'];

    const studySchool3 = document.getElementById('studyschool3');
    studySchool3.innerHTML = data['studyschool3'];
    
    const studyInfo3 = document.getElementById('studyinfo3');
    studyInfo3.innerHTML = data['studyinfo3'];
  
    // Study card 4
    const studyName4 = document.getElementById('studyname4');
    studyName4.innerText = data['studyname4'];

    const studySchool4 = document.getElementById('studyschool4');
    studySchool4.innerHTML = data['studyschool4'];
    
    const studyInfo4 = document.getElementById('studyinfo4');
    studyInfo4.innerHTML = data['studyinfo4'];

    // Study card 5
    const studyName5 = document.getElementById('studyname5');
    studyName5.innerText = data['studyname5'];

    const studySchool5 = document.getElementById('studyschool5');
    studySchool5.innerHTML = data['studyschool5'];
    
    const studyInfo5 = document.getElementById('studyinfo5');
    studyInfo5.innerHTML = data['studyinfo5'];

    // Study card 6
    const studyName6 = document.getElementById('studyname6');
    studyName6.innerText = data['studyname6'];

    const studySchool6 = document.getElementById('studyschool6');
    studySchool6.innerHTML = data['studyschool6'];
    
    const studyInfo6 = document.getElementById('studyinfo6');
    studyInfo6.innerHTML = data['studyinfo6'];

    // Study card 7
    const studyName7 = document.getElementById('studyname7');
    studyName7.innerText = data['studyname7'];

    const studySchool7 = document.getElementById('studyschool7');
    studySchool7.innerHTML = data['studyschool7'];
    
    const studyInfo7 = document.getElementById('studyinfo7');
    studyInfo7.innerHTML = data['studyinfo7'];

  // Contact section

    const contactContact = document.getElementById('contact-contact');
    contactContact.innerText = data.contact;

    const contactHeader = document.getElementById('contact-header');
    contactHeader.innerText = data['contact-header'];

    // Contact form placeholders
    const placeholders = data.placeholders;
    Object.keys(placeholders).forEach(key => {
      const input = document.querySelector(`[data-placeholder-id="${key}"]`);
      if (input) {
        input.placeholder = placeholders[key];
      }
    });

    const contactButton = document.getElementById('contact-button');
    contactButton.innerText = data['contact-button'];

    // Obtener el texto del botón de idioma del archivo JSON
    const button = document.getElementById('language-toggle');
    button.innerHTML = data.languageToggle;
    
  })
  .catch(error => console.error('Error loading language file:', error));