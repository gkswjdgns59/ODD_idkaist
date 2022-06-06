import Phaser from "phaser";
import Ghost from "./Ghost";
import Name from "./Test";

export default class SceneMold extends Phaser.Scene {
    constructor(bg) {
        super();
        this.bgName = bg;
    }

    preload() {
        this.load.image("bg", "assets/bg_half.png");
        this.load.spritesheet("ghost", "assets/ghost250.png", {
            frameWidth : 250,
            frameHeight : 200
        });
    }

    create() {
        const BG_HEIGHT = 2223;
        const BG_WIDTH = 2049*2;

        this.cursors = this.input.keyboard.createCursorKeys();

        // set background
        this.bg = this.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, this.bgName);
        this.bg.setOrigin(0, 0);
        this.bg.setScrollFactor(0);
        this.bg.tileScaleX = 0.5;
        this.bg.tileScaleY = window.innerHeight / BG_HEIGHT; 

        // create sprite animation
        this.createAnimation();

        // create user
        this.user = new Ghost(this, window.innerWidth / 10,
            window.innerHeight / 3, "ghost");

        // set workd bounds to allow camera to follow the player
        this.myCam = this.cameras.main;
        this.myCam.setBounds(0, 0, window.innerWidth*2, window.innerHeight);

        // making the camera follow the player
        this.myCam.startFollow(this.user);

        /* TEST */
        // mounting React component into Phaser
        this.nameText = this.add.reactDom(Name, { name: "yumin" , y: 1450, gX: this.user.x});
    }

    update() {
        this.user.update(this.cursors);

        // move the player when the arrow keys are pressed
        if ((this.cursors.right.isDown) && (this.user.x < window.innerWidth*2 - window.innerWidth*0.2)) {
            this.user.x += 10;

            /* TEST */
            if ((3400 > this.user.x) && (this.user.x > 1100)){
                this.nameText.setState({ y: 2000 - this.user.x / 2, gX: this.user.x})
            }
        } else if ((this.cursors.left.isDown) && (this.user.x > 0)) {
            this.user.x -= 10;

            /* TEST */
            if ((3400 > this.user.x) && (this.user.x > 1100)){
                this.nameText.setState({ y: 2000 - this.user.x / 2, gX: this.user.x})
            }
        }
        this.bg.tilePositionX = this.myCam.scrollX;
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