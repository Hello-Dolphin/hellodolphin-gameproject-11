import Phaser from "phaser";

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('bgmenu', 'src/image/bg_ver2.png');
        this.load.image('howtobotton','src/image/main how to play.png');
        this.load.image('bottonstart',)
    }

    create() {
       
    }
    
    
    update(delta, time) {
       
    }
}

export default MainMenu;
