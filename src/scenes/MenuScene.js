
import BaseScene from './BaseScene'

class MenuScene extends BaseScene {

    constructor(config) {
        super('MenuScene', config);

        this.menu = [
            {scene: 'PlayScene', text: 'PLAY'},
            {scene: 'ScoreScene', text: 'SCORE'},
            {scene: null, text: 'EXIT'},
        ]
    }

    create() {
        this.add.image(0, 0, 'sky', 'assets/sky.png');
        super.create();

        this.createMenu(this.menu, this.setupMenuEvents.bind(this));
    }


    setupMenuEvents(menuItem) {
        const textGO = menuItem.textGO;  
        textGO.setInteractive();

        textGO.on('pointerover', () => {
            textGO.setStyle({fill :'#ffd700'});
        })

        textGO.on('pointerout', () => {
            textGO.setStyle({fill :'#00ffff'});
        })

        textGO.on('pointerup', () => {
            menuItem.scene && this.scene.start(menuItem.scene);

            if (menuItem.text === 'Exit') {
                this.game.destroy(true);
            }
        })
    }
}

export default MenuScene;