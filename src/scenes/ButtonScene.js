import keys from '../keys.js';

export default class Button {
    constructor(scene) {
        this.scene = scene;
    }

    create(width, height, onClick) {
        this.button = this.scene.add.image(
            width-75, height-25,
            keys.IMAGES.BUTTON).setInteractive();

        this.button.on('pointerover', () => {
            this.button.setTint(0xa3a3a3);
        });
        this.button.on('pointerout', () => {
            this.button.clearTint();
        });
        this.button.on('pointerdown', onClick);
    }
}