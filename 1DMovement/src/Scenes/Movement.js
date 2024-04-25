class Movement extends Phaser.Scene{

    constructor(){
        super("oneMovement");
        this.my = {sprite: {}};
        // this.my.sprite.bullets = [];
    }

    preload(){
        this.load.setPath("./assets/");
        this.load.image("avatar", "resize_c_horizontal.png");
        this.load.image("bullet", "navigation_n.png");
    }

    create(){
        this.playerSprite = this.add.sprite(400, 500, "avatar");
        // this.bulletSprite;
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(this.aKey.isDown){
            this.playerSprite.x -= 4;
            if(this.playerSprite.x <= 0) this.playerSprite.x = 0;
        }
        if(this.dKey.isDown){
            this.playerSprite.x += 4;
            if(this.playerSprite.x >= 800) this.playerSprite.x = 800;
        }
        if(Phaser.Input.Keyboard.JustDown(this.spaceKey)){
            this.my.sprite.bullet = this.add.sprite(this.playerSprite.x, this.playerSprite.y - 20, "bullet");
        }
        if(this.my.sprite.bullet != null){
            for (let bullets in this.my.sprite){
                this.my.sprite[bullets].y -= 10;
            }
        }
    }
}