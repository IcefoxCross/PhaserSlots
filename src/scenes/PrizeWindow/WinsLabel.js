import keys from '../../keys.js';

const formatPrize = (prize) => `WIN: $${prize}`;

export default class PrizeWindow {
    constructor(scene) {
        this.scene = scene;
    }

    create(x, y) {
        const style = { fontFamily: 'Arial Black', fontSize: '20px', fill: '#1B3768' };
        this.winsLabel = this.scene.add.text(x, y, formatPrize(0), style);
        this.winsLabel.setOrigin(0.5, 0.5);
    }

    setPrize(prize) {
        this.winsLabel.setText(formatPrize(prize));
    }
}