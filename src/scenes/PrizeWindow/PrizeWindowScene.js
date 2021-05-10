import keys from '../../keys.js';
import WinsLabel from './WinsLabel.js';

export default class PrizeWindow {
    constructor(scene) {
        this.scene = scene;
        this.winsLabel = new WinsLabel(scene);
    }

    create(width, height) {
        this.button = this.scene.add.image(
            width-75, height-25,
            keys.IMAGES.WINDOW);
        
        this.winsLabel.create(width-75, height-25);
    }

    updatePrize(prize) {
        this.winsLabel.setPrize(prize);
    }
}