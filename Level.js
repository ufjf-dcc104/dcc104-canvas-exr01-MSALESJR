/**
 * Criado por Marcus em 10/05/2017.
 */
function Level(){
    this.plataforma_origem = null;
    this.plataforma_destino= null;
    this.player = null;
    this.level_iniciado = false;
    this.fim_de_jogo = false;
}

Level.prototype.init = function(player){
    /*** seta o player do level */
    this.player = player;
    this.player.x = 60;
    this.player.y = 518;

    /*** adiciona a plataforma de origem **/
    this.plataforma_origem = new Sprite();
    this.plataforma_origem.x = 50;
    this.plataforma_origem.y = 550;

    /*** adiciona a plataforma de destino **/
    this.plataforma_destino = new Sprite();
    this.plataforma_destino.x = 600;
    this.plataforma_destino.y = 250;
}


Level.prototype.run = function(dt, contexto){

    contexto.font = "20px Arial";
    contexto.fillText("COMBUSTIVEL : " + this.player.combustivel,5,20);

    contexto.fillStyle = "#069069";
    this.plataforma_origem.desenha(contexto);
    this.plataforma_destino.desenha(contexto);
    contexto.fillStyle = "#1C1C1C";

    if(this.colidiu(this.player, this.plataforma_origem)){

    }else if(this.colidiu(this.player, this.plataforma_destino)){
        level.fim_de_jogo = true;
    }else{
        this.player.mover(dt);
        this.player.desenha(contexto);
    }

    this.check();
}

Level.prototype.colidiu = function (objeto1, objeto2) {
    if(objeto1.x + objeto1.width < objeto2.x) return false;
    if(objeto1.x > objeto2.x + objeto2.width) return false;
    if(objeto1.y + objeto1.height < objeto2.y) return false;
    if(objeto2.y + objeto2.height < objeto1.y) return false;
    return true;
}

Level.prototype.disparaTiro = function(){}

Level.prototype.check = function(){
    if(this.player.y > 620 || this.player.y < -20 || this.player.x < -20 || this.player.x > 820){
        this.player.x = 60;
        this.player.y = 518;
    }
}