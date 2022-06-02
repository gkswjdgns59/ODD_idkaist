import Phaser from "phaser";

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
        this.character = 0;
        this.cursors = 0;
    }

    preload ()
    {
        this.load.spritesheet('brawler', 'assets/ghosts.png', { frameWidth: 200, frameHeight: 200 });
    }

    create ()
    {
        this.cursors = this.input.keyboard.createCursorKeys();
        // Animation set
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('brawler', { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 6,
            repeat: -1 // repeat forever
        });

        const keys = [ 'jump'];

        this.character = this.add.sprite(200, window.innerHeight-200);
        this.character.setScale(1);
        this.character.play('jump');
    }

    update ()
    {
        // Key Pressed
        if (this.cursors.right.isDown) {
            if (this.character.x < window.innerWidth - 200) this.character.x += 5;
        }
        else if (this.cursors.left.isDown) {
            if (this.character.x > 150) this.character.x -= 5;
        }
    }
}

export default Example;
