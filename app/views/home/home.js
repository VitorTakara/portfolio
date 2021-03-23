function initHome(){
      let options = {
        strings: [
            '',
            'Bem vindo_',
            'Bienvenue_',
            'Welcome_',
            'ようこそ_',
            'Benvenuto_',
            'Willkommen_',
            'Dobrodošli_',
            '환영합니다_',
            'Välkommen_',
            'Welkom_',
            '欢迎_'


          ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        loopCount: Infinity,
      };
      
      let typed = new Typed('.welcome', options);
}