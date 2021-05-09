import keys from '../keys.js';
import Button from './ButtonScene.js';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super(keys.SCENES.GAME);

        this.spinButton = new Button(this);
    }

    create() {
        const width = this.sys.game.canvas.width/2;
        const height = this.sys.game.canvas.height/2;
        this.frame = this.add.image(width, height, keys.IMAGES.FRAME);
        this.spinButton.create(width, height, this.onSpinClick);
    }

    onSpinClick() {
        console.log("spin");
    }
}