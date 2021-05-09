import config from './config.js';
import keys from './keys.js';
import GameScene from './scenes/GameScene.js';
import PreloaderScene from './scenes/PreloaderScene.js';


class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add(keys.SCENES.GAME, GameScene);
        this.scene.add(keys.SCENES.PRELOAD, PreloaderScene);
        this.scene.start(keys.SCENES.PRELOAD);
    }
}

window.game = new Game();