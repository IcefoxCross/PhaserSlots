import keys from '../keys.js';

export default class PreloaderScene extends Phaser.Scene {
    constructor() {
        super(keys.SCENES.PRELOAD);
    }

    preload() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBar.fillRect(240, 270, 320, 50);

        const loadingText = this.make.text({
            x: width/2,
            y: height/2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        const percentText = this.make.text({
            x: width/2,
            y: height/2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        const assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);

        // Progress Bar
        this.load.on('progress', (value) => {
            percentText.setText(`${parseInt(value * 100)}%`);
            progressBar.clear();
            progressBox.fillStyle(0x222222, 1);
            progressBar.fillRect(width/2 - 150, height/2 - 20, 300 * value, 30);
        });

        // File Progress
        this.load.on('fileprogress', (file) => {
            assetText.setText(`Loading asset: ${file.key}`);
        });

        // Loading Complete
        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            this.scene.start(keys.SCENES.GAME);
        });

        // Assets loading
        this.load.image(keys.IMAGES.FRAME, './images/frame.png');
        this.load.image(keys.IMAGES.BUTTON, './images/btn_spin.png');
        this.load.image(keys.IMAGES.WINDOW, './images/prize_window.png');
        this.load.image(keys.IMAGES.LINE1, './images/line_1.png');
        this.load.image(keys.IMAGES.LINE4, './images/line_4.png');
        this.load.image(keys.IMAGES.LINE5, './images/line_5.png');
        this.load.image(keys.IMAGES.SYM_A, './images/symbols/sym_a.png');
        this.load.image(keys.IMAGES.SYM_B, './images/symbols/sym_b.png');
        this.load.image(keys.IMAGES.SYM_C, './images/symbols/sym_c.png');
        this.load.image(keys.IMAGES.SYM_D, './images/symbols/sym_d.png');
        this.load.image(keys.IMAGES.SYM_E, './images/symbols/sym_e.png');
    }
}