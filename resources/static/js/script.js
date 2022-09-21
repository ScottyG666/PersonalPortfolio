let themeDots = document.getElementsByClassName('theme-dot')

let theme = localStorage.getItem('theme')

if (theme === null) {
    setTheme('light')
}else{
    setTheme(theme)
}

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
};


function setTheme(mode) {
    if(mode == 'light'){
        document.querySelector('#theme-style').href = 'resources/static/css/default.css';
    }

    if(mode == 'blue'){
        document.querySelector('#theme-style').href = 'resources/static/css/blue.css';
    }

    if(mode == 'green'){
        document.querySelector('#theme-style').href = 'resources/static/css/green.css';
    }

    if(mode == 'purple'){
        document.querySelector('#theme-style').href = 'resources/static/css/purple.css';
    }

    if(mode == 'blasphemy'){
        document.querySelector('#theme-style').href = 'resources/static/css/Satan.css';
    }

    localStorage.setItem('theme', mode)
}