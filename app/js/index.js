const app = (function () {
    const views = [
        {
            route: 'home',
            title: 'Home - Vitor Takara',
            templateUrl: 'views/home/home.html',
            script: 'views/home/home.js',
            init: () => initHome(),
            templateCache: null,
        },
        {
            route: 'work',
            title: 'Work - Vitor Takara',
            templateUrl: 'views/work/work.html',
            script: 'views/work/work.js',
            init: () => initWork(),
            templateCache: null,
        },{
            route: 'aboutme',
            title: 'About me - Vitor Takara',
            templateUrl: 'views/aboutme/aboutme.html',
            script: 'views/aboutme/aboutme.js',
            init: () => initAboutMe(),
            templateCache: null,
        }
    ]

    function loadHtml(view) {
        const app = document.querySelector('#app');

        return new Promise(resolve => {
            fetch(view.templateUrl)
                .then((response) => response.text())
                .then((html) => {
                    setTitle(view.title);
                    view.templateCache = html;
                    window.location.hash = view.route;
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

        const el = document.getElementsByTagName('script')[0];
        el.parentNode.insertBefore(script, el);

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
            setTitle(view.title);
            window.location.hash = view.route;
            view.init();
        }
    }

    function setTitle(title) {
        document.title = title;
    }

    function setFirstView() {
        const activeRoutes = views.filter(view => `#${view.route}` === window.location.hash);
        if (activeRoutes.length === 0) {
            setView(views[0]);
        } else {
            setView(activeRoutes[0]);
        }
    }

    // When document is Ready
    document.addEventListener("DOMContentLoaded", function () {
        setFirstView();
    });

    return {
        views: views,
        setView: setView
    }
}());