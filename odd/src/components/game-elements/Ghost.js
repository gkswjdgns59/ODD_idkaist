import Phaser from "phaser";

class GhostSprite extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, spritesheet) {
        super(scene, x, y, spritesheet);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.x = x;
        this.y = y;
        this.spritesheet = spritesheet;
    }
}

export default class Ghost extends Phaser.GameObjects.Container {
    constructor(scene, x, y, spritesheet) {
        super(scene, x, y);
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.spritesheet = spritesheet;
        this.scene.add.existing(this);
        this.scene.physics.world.enable(this);
        this.createSprite();
        this.createNameTag();
    }

    createSprite() {
        this.sprite = new GhostSprite(this.scene, this.x, this.y, this.spritesheet);
        this.add(this.sprite);
    }

    createNameTag() {
        const TAG_GAP = 20;
        this.nametag = this.scene.add.text(
            this.x - (this.sprite.width / 6),
            this.y - (this.sprite.height / 2 + TAG_GAP),
            " Boooo! ", {
                fontSize: '24px',
                fontFamily: 'Lato',
                color: '#ffffff',
                backgroundColor: "#222222",
                align: 'center'
            });
        this.nametag.setOrigin(0, 0);
        this.add(this.nametag);
    }

    update(cursors) {
        if (cursors.right.isDown) {
            this.sprite.scaleX = 1;
            this.sprite.play("move", true);
        } else if (cursors.left.isDown) {
            this.sprite.scaleX = -1;
            this.sprite.play("move", true);
        } else {
            this.sprite.scaleX = 1;
            this.sprite.play("idle", true);
        }
    }
}