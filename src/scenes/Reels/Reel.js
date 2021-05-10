import keys from '../../keys.js';

export default class Reel {
    constructor(scene, x, y, symbols, mask) {
        //super('reel');
        //super(scene, x, y, 140, 140, keys.IMAGES[key]);
        //scene.add.existing(this);

        this.scene = scene;
        this.symbols = this.scene.add.group().addMultiple(
            symbols.map((key, index) => {
                return this.scene.add.sprite(x, y + 143 * index, `sym_${key}`);
            })
        );
        this.symbols.getChildren().forEach(symbol => symbol.setMask(mask));
        //this.symbols.setCrop(x, y, 140, 280);
    }
}