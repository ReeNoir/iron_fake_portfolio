export function scrollUp(){
    const buttonUp = document.querySelector('#upper');
    const html = document.querySelector('html');
    const mainHeight = document.querySelector('#main').offsetHeight
    
    showButton();

    function showButton(){
        if(scrollY > mainHeight && html.offsetWidth > 450) buttonUp.style.display = 'block'
        else buttonUp.style.display = 'none'
    };

    window.addEventListener('scroll', showButton);

    window.addEventListener('click', function(){
        html.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });
}
