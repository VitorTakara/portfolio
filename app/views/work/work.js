const publicWorkApi = (() => {
  const htmlParser = new DOMParser();
  const masterPage = document.querySelector('.master-page');
  const modalMain = document.querySelector('#modal-1-content');
  const modalViews = [{
    id: 0,
    title: 'Bank App',
    description: `Static HTML5 Fake Bank APP template. ( Technologies: <b>SCSS, JS + ES6 and Gulp</b> to production )`,
    link: 'https://vitortakara.github.io/portfolio-demos/site_app/dist/',
    video: 'bank_app.mp4'
  }, {
    id: 1,
    title: 'Guia Covid-19',
    description: `Static HTML5 Fake Bank APP template. ( Technologies: <b>SCSS, JS + ES6 and Gulp</b> to production )`,
    link: 'https://vitortakara.github.io/portfolio-demos/site_app/dist/',
    video: 'covid.mp4'
  },
]


  function showModal(modalId) {
    const modalContent = modalViews.find(modal => modal.id === modalId);

    MicroModal.show('modal-1', {
      onShow: modal => {
        modalMain.innerHTML = `
            <header class="modal__header">
              <h2 class="modal__title" id="modal-1-title">
                  ${modalContent.title}<span class="blink">_</span>
              </h2>
              <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
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
                <a class="button" href="${modalContent.link}" target="_blank">acessar demo</a>
            </footer>
          `;

        masterPage.classList.add('-blur');
      },
      onClose: modal => masterPage.classList.remove('-blur')
    })
  }

  return {
    showModal: showModal
  }
})();

function initWork() {
  publicWorkApi.showModal(0);
}