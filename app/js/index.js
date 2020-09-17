const views = [{
        title: 'about me',
        templateUrl: 'views/aboutme/aboutme.html',
        script: 'views/aboutme/aboutme.js',
        init: () => initAboutMe(),
        templateCache: null,
    },
    {
        title: 'work',
        templateUrl: 'views/work/work.html',
        script: 'views/work/work.js',
        init: () => initWork(),
        templateCache: null,
    },
]

function loadHtml(view) {
    const app = document.querySelector('#app');

    return new Promise(resolve => {
        fetch(view.templateUrl)
            .then((response) => response.text())
            .then((html) => {
                setTitle(view.title);
                view.templateCache = html;
                app.innerHTML = html;
                resolve(true);
            })
    })
}

function loadScript(view) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = view.script;

    const el = document.getElementsByTagName('script')[0]
    el.parentNode.insertBefore(script, el)

    return new Promise(resolve => {
        script.addEventListener('load', () => {
            resolve(true);
        })
    })
}

async function setView(view) {
    const app = document.querySelector('#app');

    if (view.templateCache === null) {
        await loadHtml(view);
        await loadScript(view);
        view.init();
    } else {
        app.innerHTML = view.templateCache;
        view.init();
    }
}

function setTitle(title) {
    document.title = title;
}