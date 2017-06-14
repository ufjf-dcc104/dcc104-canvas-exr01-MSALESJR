/**
 * Criado por Marcus em 10/05/2017.
 */
function Player()
{
    this.x = null;
    this.vx = 0;

    this.y = null;
    this.vy = 100;

    this.width  = 32;
    this.height = 32;
    this.gravidade = 10;
    this.vento_lateral = 10;
    this.image  = new Image();
    this.image.src = "img/player.png";

    this.combustivel = 100;
}

Player.prototype.desenha = function (contexto) {
    contexto.drawImage(
        this.image,
        0,
        0,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height);
}

Player.prototype.mover = function (dt) {
    this.y = this.y + (this.vy * dt) + (this.gravidade / 2) * (dt * dt);
    this.x = this.x + (this.vx * dt) + (this.vento_lateral / 2) * (dt * dt);
};