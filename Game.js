/**
 * Criado por Marcus em 10/05/2017.
 */
var tela     = null;
var contexto = null;
var player   = null;
var level    = null;
var atual    = new Date();
var anterior = new Date();
var dt       = 0;
var inicia_jogo = false;

function init(){

    tela = document.getElementById('tela');
    contexto = tela.getContext('2d');

    player = new Player();
    player.x  = 200;
    player.y  = 300;
    player.desenha(contexto);

    level = new Level();
    level.init(player);
    initControls();
    requestAnimationFrame(drawFrame);
 }

 function drawFrame(){
    requestAnimationFrame(drawFrame);
    atual = new Date();
    dt = (atual  - anterior) / 1000 ;
    contexto.clearRect(0,0, tela.width, tela.height);

    if(inicia_jogo){
        if(level.level_iniciado === false){
            level.init(player);
            level.level_iniciado = true;
        }
        if(level.fim_de_jogo){
            alert("Você venceu");
            location.reload();
        }
        if(player.combustivel <= 0){
            alert("Seu combustivel acabou");
            location.reload();
        }
        level.run(dt,contexto);
    }else{
        contexto.font = "50px Arial";
        contexto.strokeText("Moon Lander",270,250);
        player.x = 380;
        player.y = 260;
        contexto.font = "15px Arial";
        contexto.strokeText("Aperte ENTER para INICIAR",320,320);
    }
    player.desenha(contexto);
    anterior = atual;
 }

function initControls(){

    document.addEventListener('keydown', function(e){
        switch(e.keyCode){
            case 13 :
                if(!inicia_jogo)
                    inicia_jogo = true;
                break;
            case 39 :
                player.vx = 100;
                player.combustivel -= 0.50;
                break;
            case 38 :
                player.vy = -100;
                player.combustivel -= 1;
                player.mover(dt);
                break;
            case 37 :
                player.vx = -100;
                player.combustivel -= 0.50;
                break;
        }
    });

    document.addEventListener('keyup', function(e){
        switch(e.keyCode){
            case 39 :
                player.vx = 0;
                break;
            case 38 :
                player.vy = 100;
                break;
            case 37 :
                player.vx = 0;
                break;
        }
    });
}