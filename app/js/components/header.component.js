
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const menuActive = this.getAttribute('menuActived') || null;
        const menu = this.getAttribute('menu') || 'hide';
        
        const template = document.createElement('template');

        const menuTemplate =  `
            <div class="buttons-wrapper">
                <a class="text ${menuActive === 'work' ? '--active' : ''}" onclick="setView(1)">Work</a>
                <a class="text ${menuActive === 'aboutme' ? '--active' : ''}" onclick="setView(2)">About me</a>
            </div>
        `;

        template.innerHTML = `
        <header class="header">
            <div class="logo">
                <img class="image" src="assets/img/logo.png">
            </div>

            ${menu === 'show' ? menuTemplate : ''}
        </header>
        `;

        this.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('app-header', HeaderComponent);