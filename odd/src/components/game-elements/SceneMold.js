import Phaser from "phaser";
import Ghost from "./Ghost";
import socket from "./../../socket-client";

export default class SceneMold extends Phaser.Scene {
    constructor(bg) {
        super();
        this.bgName = bg;
    }

    preload() {
        this.load.image("bg", "assets/bg.png");
        this.load.spritesheet("ghost", "assets/ghosts.png", {
            frameWidth : 200,
            frameHeight : 200
        });
    }

    create() {
        const BG_HEIGHT = 2223;

        this.cursors = this.input.keyboard.createCursorKeys();

        // set background
        this.bg = this.add.tileSprite(0, 0, window.innerWidth,
            window.innerHeight, this.bgName);
        this.bg.setOrigin(0, 0);
        this.bg.setScrollFactor(0);
        this.bg.tileScaleY = window.innerHeight / BG_HEIGHT; 

        // create sprite animation
        this.createAnimation();

        // create user
        this.user = new Ghost(this, window.innerWidth / 10,
            window.innerHeight / 3, "ghost");

        // create camera
        this.cameras.main.startFollow(this.user);
        this.cameras.main.roundPixels = true;
    }

    test() {
        console.log('test');
    }

    update() {
        this.user.update(this.cursors);

        if (this.cursors.right.isDown) {
            socket.emit('moveGhost', +8);
        } else if (this.cursors.left.isDown) {
            socket.emit('moveGhost', -8);
        }
    }

    createAnimation() {
        this.anims.create({
            key: "move",
            frames: this.anims.generateFrameNumbers("ghost", {
                frames: [ 0, 1, 2, 3 ] }),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("ghost", {
                frames: [ 0 ] }),
            frameRate: 1,
            repeat: -1
        });
    }
}