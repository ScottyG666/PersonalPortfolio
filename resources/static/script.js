let themeDots = document.getElementsByClassName('theme-dot')

let theme = localStorage.getItem('theme')

if (theme === null) {
    setTheme('light')
}else{
    setTheme(theme)
}



for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', () => {
        let mode = this.dataset.mode
        console.log('Option clicked: ', mode)
        setTheme(mode)
    })
};


function setTheme(mode) {
    if(mode == 'light'){
        document.querySelector('.theme-dot').href = 'default.css';
    }

    if(mode == 'blue'){
        document.querySelector('.theme-dot').href = 'resources/static/blue.css';
    }

    if(mode == 'green'){
        document.querySelector('#green-mode').href = '/resources/static/green.css';
    }

    if(mode == 'purple'){
        document.querySelector('.theme-dot').href = 'resources/static/purple.css';
    }

    if(mode == 'blasphemy'){
        document.querySelector('.theme-dot').href = 'resources/static/Satan.css';
    }

    localStorage.setItem('theme', mode)
}



//refactoring the above code for new JS knowledge

/*





//this is a refactor of the above code to use a switch case instead

/*
function setTheme(mode) {
    if(mode == 'light'){ 
        document.getElementById('theme-style').href = '/resources/static/default.css'
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'static/blue.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = '/resources/static/green.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    if(mode == 'blasphemy'){
        document.getElementById('theme-style').href = 'Satan.css'
    }

    localStorage.setItem('theme', mode)
}
*/