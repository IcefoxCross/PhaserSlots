import keys from '../keys.js';
import Button from './ButtonScene.js';
import PrizeWindow from './PrizeWindow/PrizeWindowScene.js';
import Paylines from './Paylines.js';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super(keys.SCENES.GAME);

        this.spinButton = new Button(this);
        this.prizeWindow = new PrizeWindow(this);
        this.paylines = new Paylines(this);

        this.wrapper = new Wrapper();
        this.isSpinning = false;
    }

    create() {
        const width = this.sys.game.canvas.width;
        const height = this.sys.game.canvas.height;
        this.frame = this.add.image(width/2, height/2 - 40, keys.IMAGES.FRAME);
        this.spinButton.create(width-25, height-15, this.onSpinClick);
        this.prizeWindow.create(175, height-15);
        this.paylines.create();
    }

    onSpinClick() {
        if (!this.scene.isSpinning) {
            //this.isSpinning = true;
            const spinResults = this.scene.wrapper.spin();
            if (spinResults.prizes.length) {
                console.log(spinResults.prizes);
            }
            this.scene.paylines.hidePaylines();
            this.scene.paylines.showPaylines(spinResults.prizes);
            this.scene.prizeWindow.updatePrize(spinResults.winnings);
        }
    }
}