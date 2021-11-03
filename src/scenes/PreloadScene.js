
import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {

    constructor() {
        super('PreloadScene');
    }

    preload() {
        this.load.image('sky', 'assets/pixel.jpg')
        this.load.spritesheet('bird', 'assets/birdSprite1.png', {
            frameWidth: 16, frameHeight: 16
        });
        this.load.image('pipe', 'assets/pipe3.png');
        this.load.image('pause', 'assets/pause.png');
        this.load.image('back', 'assets/back.png');
    }

    create() {
        this.scene.start('MenuScene');
        
    }
}

export default PreloadScene;