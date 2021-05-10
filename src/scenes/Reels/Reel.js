export default class Reel {
    constructor(scene, x, y, symbols, mask) {

        this.scene = scene;
        this.baseY = y;
        this.symbols = this.scene.add.group().addMultiple(
            symbols.map((key, index) => {
                return this.scene.add.tileSprite(x, this.baseY + 143 * index, 140, 140, `sym_${key}`);
            })
        );
        this.symbols.getChildren().forEach(symbol => symbol.setMask(mask));

        this.rect = new Phaser.Geom.Rectangle(x, y, 140, 143*20);
    }

    updatePosition(point) {
        this.children = this.symbols.getChildren();
        Phaser.Actions.IncXY(this.children, 0, 143 * (point - 1));
        Phaser.Actions.WrapInRectangle(this.children, this.rect);
    }
}