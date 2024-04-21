class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}}; 

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    preload() {
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my; 
        
        this.createMonsterSprites();

        this.cursors = this.input.keyboard.addKeys({
            smile: Phaser.Input.Keyboard.KeyCodes.S,
            fangs: Phaser.Input.Keyboard.KeyCodes.F,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        })
 
    }

    createMonsterSprites() {
        let my = this.my;

        //arms
        my.sprite.armLeft = this.add.sprite(this.bodyX - 100, this.bodyY + 20, "monsterParts", "arm_darkA.png").setFlipX(true).setAngle(20);
        my.sprite.armRight = this.add.sprite(this.bodyX + 100, this.bodyY + 20, "monsterParts", "arm_darkA.png").setAngle(-20);
  

        //legs
        my.sprite.legLeft = this.add.sprite(this.bodyX - 60, this.bodyY + 110, "monsterParts", "leg_whiteC.png").setFlipX(true); // Flipped for left side
        my.sprite.legRight = this.add.sprite(this.bodyX + 60, this.bodyY + 110, "monsterParts", "leg_whiteC.png");

        //body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        //eye
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 30, "monsterParts", "eye_psycho_light.png");

        //mouth
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "mouth_closed_happy.png");


        //accessories
        my.sprite.antennaR = this.add.sprite(this.bodyX + 40, this.bodyY - 105, "monsterParts", "detail_red_antenna_large.png");
        my.sprite.antennaL = this.add.sprite(this.bodyX - 40, this.bodyY - 105, "monsterParts", "detail_red_antenna_large.png").setFlipX(true);

        my.sprite.nose = this.add.sprite(this.bodyX, this.bodyY + 23, "monsterParts", "nose_yellow.png");

    }

    update() {
        let my = this.my;


        //Mouth Changes
        if (this.cursors.smile.isDown) {
            my.sprite.mouth.setTexture("monsterParts", "mouthA.png").setFlipY(false);
        } else if (this.cursors.fangs.isDown) {
            my.sprite.mouth.setTexture("monsterParts", "mouth_closed_fangs.png").setFlipY(true);
        }

        //Movement
        if (this.cursors.left.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x -= 2;
            }
        } else if (this.cursors.right.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += 2;
            }
        }
    }

}