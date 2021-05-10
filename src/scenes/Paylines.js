import keys from '../keys.js';

export default class Paylines {
    /**
     * @param {Phaser.Scene} scene
     */
    constructor(scene) {
        this.scene = scene;
    }

    create() {
        const width = this.scene.sys.game.canvas.width/2;
        const height = this.scene.sys.game.canvas.height/2;
        this.group = this.scene.add.group();
        this.group.create(width, height * 0.86, keys.IMAGES.LINE1);
        this.group.create(width, height * 0.35, keys.IMAGES.LINE1);
        this.group.create(width, height * 1.35, keys.IMAGES.LINE1);
        this.group.create(width, height * 0.86, keys.IMAGES.LINE4);
        this.group.create(width, height * 0.86, keys.IMAGES.LINE5);
        this.hidePaylines();
        //this.group.getChildren()[1].visible = false;
        //console.log(this.group.getChildren());
    }

    showPaylines(prizes) {
        prizes.forEach(prize => this.group.getChildren()[prize.lineId].visible = true);
    }

    hidePaylines() {
        this.group.getChildren().forEach(payline => payline.visible = false);
    }
}