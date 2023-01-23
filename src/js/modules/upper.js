export function scrollUp(){
    const buttonUp = document.querySelector('#upper');
    const html = document.querySelector('html');
    const main = document.querySelector('#main');
    const footer = document.querySelector(`#footer`);
    const projcets = document.querySelector(`#projects`);
    
    showButton();

    function showButton(){
        if(scrollY > main.offsetHeight && html.offsetWidth > 450) buttonUp.style.display = 'block'
        else buttonUp.style.display = 'none'
    };

    function moveUpButton(){
        const scroll = window.innerHeight + scrollY;
        const heightPage = main.offsetHeight + projcets.offsetHeight + footer.offsetHeight;
        
        if(scroll > heightPage){
            buttonUp.style.bottom = `${scroll - heightPage}px`
        }
        else buttonUp.style.bottom = '45px'
    }

    window.addEventListener('scroll', showButton);
    window.addEventListener('scroll', moveUpButton);

    window.addEventListener('click', function(){
        html.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });
}
