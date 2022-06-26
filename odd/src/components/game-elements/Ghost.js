import Phaser from "phaser";
import socket from './../../socket-client'

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
        this.sprite.scale = 0.8;
        this.createNameTag();

        socket.on('warpGhost', () => {
            this.x = window.innerWidth / 10;
        })
    }

    createSprite() {
        this.sprite = new GhostSprite(this.scene, this.x, this.y, this.spritesheet);
        this.add(this.sprite);
    }

    createNameTag() {
        const TAG_GAP = 20;
        this.nametag = this.scene.add.text(
            this.x - (this.sprite.width / 8),
            this.y - (this.sprite.height / 2 + TAG_GAP),
            " Sample ", {
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
            this.sprite.scaleX = 0.8;
            this.x += 12;
            this.sprite.play("move", true);
        } else if (cursors.left.isDown) {
            this.x -= 12;
            this.sprite.scaleX = -0.8;
            this.sprite.play("move", true);
        } else {
            this.sprite.play("idle", true);
        }
    }
}