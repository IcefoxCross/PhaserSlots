import keys from '../keys.js';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super(keys.SCENES.GAME);
    }

    create() {
        this.frame = this.add.image(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, keys.FRAME);
    }
}