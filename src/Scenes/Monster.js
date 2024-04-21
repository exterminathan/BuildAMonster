class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        
        

        my.sprite.armLeft = this.add.sprite(this.bodyX - 90, this.bodyY, "monsterParts", "arm_darkA.png").setFlipX(true);
        my.sprite.armRight = this.add.sprite(this.bodyX + 90, this.bodyY, "monsterParts", "arm_darkA.png");

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.legLeft = this.add.sprite(this.bodyX - 20, this.bodyY + 60, "monsterParts", "leg_left.png").setFlipX(true); // Flipped for left side
        my.sprite.legRight = this.add.sprite(this.bodyX + 20, this.bodyY + 60, "monsterParts", "leg_right.png");
        
        // Add one or more eyes
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 30, "monsterParts", "eye.png");
        
        // Add a smiling mouth
        my.sprite.mouthSmile = this.add.sprite(this.bodyX, this.bodyY + 10, "monsterParts", "mouth_smile.png");
        
        // Add head accessories, two or more
        my.sprite.accessory1 = this.add.sprite(this.bodyX, this.bodyY - 50, "monsterParts", "accessory1.png");
        my.sprite.accessory2 = this.add.sprite(this.bodyX, this.bodyY - 50, "monsterParts", "accessory2.png");
        

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}