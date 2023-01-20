export function changeDom(){
    const gameInfo = document.querySelectorAll('.game-project__info');
    const gameLinks = document.querySelectorAll('.game-project__links');
    const gameStats = document.querySelectorAll('.game-project__stats');

    moveLinks();

    window.addEventListener('resize', moveLinks);

    function moveLinks(){
        if(window.innerWidth <= 768 && gameLinks[0].parentElement === gameInfo[0]){
            for(let i = 0; i < gameInfo.length; i++){
                gameInfo[i].removeChild(gameLinks[i])
                gameStats[i].appendChild(gameLinks[i])
            }
        } 
        else if(window.innerWidth > 768 && gameLinks[0].parentElement === gameStats[0]){
            for(let i = 0; i < gameInfo.length; i++){
                gameStats[i].removeChild(gameLinks[i])
                gameInfo[i].appendChild(gameLinks[i])
            }
        }
    };
}