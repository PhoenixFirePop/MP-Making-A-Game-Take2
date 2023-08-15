const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d') //to denote items will be in 2d
canvas.width = 1000;
canvas.height = 800;

class Player {
    constructor(game){
        this.game = game;
        this.position = {
            x: 0,
            y: 0,
          }
        this.width = 50;
        this.height = 50;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.vy = 0 //vertical speed/velocity
        this.weight = 0.7 //will make the character have a sense of gravity (fall when in the air)
        this.image = document.getElementById('player')  // this.image = player; same
        this.speed = 0;
        this.maxSpeed = 10;
    }
    draw(context){
        context.fillStyle = 'red'
        context.fillRect (this.position.x, this.position.y, 50, 100)
    }
    update() {
        this.position.y++
    }
}
const player = new Player

function animate(){
    window.requestAnimationFrame(animate)
    context.fillStyle = 'white'
    context.fillRect (0, 0, canvas.width, canvas.height)
    player.draw()
    player.update()
    // // or clear past images or it will leave a trail of past images
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // game.update();
    // game.draw(context);
    // requestAnimationFrame(animate);
}
animate();