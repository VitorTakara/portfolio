const publicWorkApi = (() => {
  const htmlParser = new DOMParser();
  const masterPage = document.querySelector('.master-page');
  const modalMain = document.querySelector('#modal-1-content');
  const modalViews = [{
    id: 0,
    title: 'Bank App',
    description: `Static HTML5 Fake Bank APP template. <b>( Technologies: SCSS, JS + ES6 and Gulp to production )</b>`,
    link: 'https://vitortakara.github.io/portfolio-demos/site_app/dist/',
    ghLink: null,
    video: 'bank_app.mp4'
  }, {
    id: 1,
    title: 'Guia Covid-19',
    description: `Guia COVID-19 is a volunteer project that I've made with other friends to help people showing in a clear way tips of the covid-19. Besides that, we also show some popular fake news, showing people if it's true or false. All these tips have sound to make a content more acessisable and references links to prove our truth <b>( Technologies: SCSS, Angular 9, Typescript and PWA )</b>`,
    link: 'https://vitortakara.github.io/guiacovid19/#/home',
    ghLink: 'https://github.com/VitorTakara/guiacovid19/tree/development',
    video: 'covid.mp4'
  }, {
    id: 2,
    title: 'Lite JS Pattern',
    description: `LiteJS is a Javascript Pattern based on <b>Google Javacript Pattern and Airbnb Javascript Pattern</b>. It's a compiled and simplified pattern to make code more standardized without reading many pages of rules. It's a simplified pattern created to our team here on <b>Itaú BBA</b> teaching our front-ends, back-ends and fullstacks how to code front-end in the project`,
    link: 'https://vitortakara.github.io/lite-js-pattern/dist/',
    ghLink: 'https://github.com/VitorTakara/lite-js-pattern',
    video: 'lite.mp4'
  }, {
    id: 3,
    title: 'Reduce Image',
    description: `Reduce image is a simple tool created to help me in a project to simplify my work time, it's not more or less than a simple image reducer that can reduce multiple images in few seconds. This repo is open source and I've recently update it to Gulp 4. <b>( Technologies: Batch File, JS and Gulp )</b>`,
    link: 'https://github.com/VitorTakara/reduce-image',
    ghLink: 'https://github.com/VitorTakara/reduce-image',
    video: 'resizer.mp4'
  }, {
    id: 4,
    title: 'Portfolio 2019',
    description: `At least once each three years I change my portfolio to practice my habilities and test my design and perfomance web skills. So I think my old portfolio must be here :). As same as this one, I've made this 2019 portfolio focusing on best perfomance, so I didn't use any frameworks. Pure javascript focusing totally in a clean code and performance. All this website including the design was made by me <b>( Technologies: HTML, SCSS, JS and Gulp for Production )</b>`,
    link: 'https://github.com/VitorTakara/reduce-image',
    ghLink: 'https://github.com/VitorTakara/portfolio_deprecated',
    video: 'portfolio_2019.mp4'
  }, {
    id: 999,
    title: 'About this portfolio :)',
    description: `At least once each two years I change my portfolio to practice my habilities and test my design and perfomance web skills. I invite you to see this code at GitHub, I challenged myself to make this <b>SPA from zero</b> and I've tried to do this based on <b>Angular behaviors, with Routes, a NgOnInit</b> equivalent for each page and a script that is load for each page based on the browser route. All this website including the design was made by me <b>( Technologies: HTML, SCSS, a lot of JS and Gulp for Production )</b>`,
    link: null,
    ghLink: 'https://github.com/VitorTakara/portfolio_deprecated',
    video: 'portfolio_2021.mp4'
  }];

  function closeModal() {
    MicroModal.close('modal-1');
  }

  function showModal(modalId) {
    const modalContent = modalViews.find(modal => modal.id === modalId);
    
    MicroModal.show('modal-1', {
      onShow: modal => {
        modalMain.innerHTML = `
            <header class="modal__header">
              <h2 class="modal__title" id="modal-1-title">
                  ${modalContent.title}<span class="blink">_</span>
              </h2>
              <button class="modal__close" aria-label="Close modal" onclick="publicWorkApi.closeModal()"></button>
            </header>
            <main class="modal__content">
              <p class="description">${htmlParser.parseFromString(modalContent.description, 'text/html').body.innerHTML} <span class="blink">_</span></p>
  
              <div class="video-wrapper">
                <video loop autoplay>
                  <source src="assets/videos/${modalContent.video}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>
            </main>
            <footer class="modal__footer">
              ${modalContent.link !== null ? `<a class="button" href="${modalContent.link}" target="_blank">go to demo</a>` : ''}
              ${modalContent.ghLink !== null ? `<a class="button -outline" href="${modalContent.ghLink}" target="_blank">show me the code</a>` : ''}
            </footer>
          `;

        masterPage.classList.add('-blur');
      },
      onClose: modal => masterPage.classList.remove('-blur')
    })
  }

  return {
    closeModal: closeModal,
    showModal: showModal
  }
})();

function initWork() {}