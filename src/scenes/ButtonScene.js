import keys from '../keys';

export default class ButtonScene extends Phaser.Scene {
    constructor() {
        super(keys.SCENES.BUTTON);
    }

    create() {
        this.button = this.add.image(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, keys.BUTTON);
    }
}