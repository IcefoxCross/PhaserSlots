import GameScene from './scenes/GameScene.js';

const config = {
    title: 'Slots Demo',
    version: '0.0.1',

    type: Phaser.AUTO,
    width: 490,
    height: 490,
    parent: 'container',
    backgroundColor: '#000000',

    scene: [GameScene]
};

const game = new Phaser.Game(config);