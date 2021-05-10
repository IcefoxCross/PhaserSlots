import Reel from './Reel.js';

export default class ReelsGroup {
    constructor(scene) {
        this.scene = scene;
    }

    create(reel_list) {
        const width = this.scene.sys.game.canvas.width/2;
        const height = this.scene.sys.game.canvas.height * 0.43;

        const shape = this.scene.make.graphics();
        shape.fillStyle(0xff0000, 0);
        shape.fillRect(width * 0.42 - 70, height * 0.42 - 70,
            width * (0.42 + 0.58 * 3), height * 0.42 + 143 * 2 + 35);
        const mask = shape.createGeometryMask();

        this.reels = this.scene.add.group();
        reel_list.forEach((reel, index) => {
            this.reels.create(new Reel(this.scene, width * (0.42 + 0.58 * index), height * 0.42, reel, mask));
        });
        /*this.reels.create(new Reel(this.scene, width * 0.4, height));
        this.reels.create(new Reel(this.scene, width, height));
        this.reels.create(new Reel(this.scene, width * 1.6, height));*/
    }
}