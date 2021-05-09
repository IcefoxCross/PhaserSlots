import keys from '../keys.js';

export default class Button {
    constructor(scene) {
        this.scene = scene;
    }

    create(width, height, onClick) {
        this.button = this.scene.add.image(width, height, keys.IMAGES.BUTTON).setInteractive();

        this.button.on('pointerover', () => {
            this.button.setTint(0xff0000);
        });
        this.button.on('pointerout', () => {
            this.button.clearTint();
        });
        this.button.on('pointerdown', onClick);
    }
}