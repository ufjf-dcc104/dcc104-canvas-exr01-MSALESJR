/**
 * Criado por Marcus em 10/05/2017.
 */
function Sprite()
{
    this.x = 0;
    this.y = 0;
    this.width  = 50;
    this.height = 10;
}

Sprite.prototype.desenha = function (contexto) {
    contexto.fillRect(this.x, this.y, this.width, this.height);
};
