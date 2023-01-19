export function scrollUp(){
    const buttonUp = document.querySelector('#upper')
    const mainHeight = document.querySelector('#main').offsetHeight

    showButton();

    function showButton(){
        if(scrollY > mainHeight) buttonUp.style.display = 'block'
        else buttonUp.style.display = 'none'
    };

    window.addEventListener('scroll', showButton);

    window.addEventListener('click', function(){
        window.scrollTo(0, 0)
    });
}
