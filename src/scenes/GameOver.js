import Phaser from "phaser";
let gameOverbg;
let click;
var finalScore;
let scoreText;

//Input from keyboard
// let keyENTER;

let gameOvermp3

class GameOver extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameOver'
        });
    }
    init(data){
        finalScore = data.score;
    }

    preload() {
        this.load.image('gameover','src/image/game-over.png');
        this.load.audio('gameoverSound','src/sound/GameOver.mp3');
        this.load.image('click','src/image/click (1).png')
    }
    
    create() {
        gameOverbg = this.add.image(0, 0,'gameover').setOrigin(0,0);
        gameOvermp3 = this.sound.add('gameoverSound');
        gameOvermp3.play();
        console.log(finalScore)
        click = this.add.image(this.game.renderer.width-150, 670, 'click')
             .setScale(0.15);

        gameOverbg.setInteractive();
        gameOverbg.on('pointerup', () => {
            gameOvermp3.stop()
            this.scene.start('MainMenu');
        });


        //Score
        scoreText = this.add.text(1100, 50, 'score: 0', 
        { font: "50px Pixel Operator 8", fill: '#000' }).setDepth(10).setScale(2);
        
    
        //Input enter
        // keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
    
    
    update(delta, time) {
        scoreText.setText('Score: ' + finalScore);
        // if (keyENTER.isDown) {
        //     this.scene.start('MainMenu');
        //     gameOvermp3.stop();
        // }
    }
}

export default GameOver;
