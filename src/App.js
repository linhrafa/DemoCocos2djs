
STATE_PLAYING = 0;
STATE_GAMEOVER = 1;
MAX_CONTAINT_WIDTH = 40;
MAX_CONTAINT_HEIGHT = 40;
var list_enemy = [];
var enemy_scale = 0.05;
var bg_color;
var gameLayer;
var scrollSpeed =1;
var ship, enemy;
var ySpeed;
var gravity = -0.05;
var ship_speed = 5;
var winSize= cc.winSize;
var number_enemy_init = 3;
var gameScene = cc.Scene.extend({
    onEnter:function() {
        this._super();
        gameLayer = new game();
        gameLayer.init();
        this.addChild(gameLayer);
    }
});

var game = cc.Layer.extend({
    init: function () {
        this._super();
        console.log("list_enemy.length" + list_enemy.length);
        bg_color = cc.LayerColor.create(new cc.Color(40, 40, 40, 255), 960, 640);
        var background = cc.Sprite.create(gameResources.bg_front_spacedust);
        this.addChild(bg_color);
        this.addChild(background, 0);

        ship = new Ship();
        this.addChild(ship);

        //this.createEnemy();
        //enemy = new Enemy();
        //this.addChild(enemy);

        this.scheduleUpdate();
        this.schedule(this.createOrloadEnemy, 3);


        this.addKeyboardListener();

    },
    update: function (dt) {
        ship.update();
        //updateShot();

    },
    addKeyboardListener: function () {
        if ('keyboard' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: function (key, event) {
                    MW.KEYS[key] = true;
                },
                onKeyReleased: function (key, event) {
                    MW.KEYS[key] = false;
                }
            }, this);
        }
    },
    createOrloadEnemy: function () {
        var count = 0, j=0;
        while (count<3 && list_enemy.length>j){
            if (list_enemy[j].isActive ==false) {
                var enemy = list_enemy[j];
                enemy.x = 900;
                enemy.y= 100+500*Math.random();
                enemy.isActive = true;
                var moveAction = cc.MoveTo.create(2.5,new cc.p(-100, Math.random()* 600));
                enemy.runAction(moveAction);
                count++;
            }
            j++;
            console.log("jjjjjjjjjj"+j);
        }
        while (count<3){
            this.createEnemy();
            count++;
        }
        cc.log("list_enemy.length" + list_enemy.length);
    }
    ,
    createEnemy:function(){
        //console.log("create enemy");
        //for (var i=0; i<number_enemy_init;i++) {
            var enemy = new Enemy();
            this.addChild(enemy);
            list_enemy.push(enemy);
            console.log("list_enemy.length" + list_enemy.length);
            //enemy_run(1);

        //}

    },
    updateShot:function(){
        //for
    }

}, this);


var Ship;
Ship = cc.Sprite.extend({
    speed: ship_speed,
    ctor: function () {
        this._super();
        this.ySpeed = 0;
        var size = cc.winSize;
        var image_ship = cc.Sprite.create(gameResources.star);
        image_ship.attr({
            //anchorX: this.anchorX,
            //anchorY: this.anchorY,
            //x: this.x,
            //y: this.y,

        })
        image_ship.setScale(0.05);
        this.addChild(image_ship);
    },
    onEnter: function () {
        this.setPosition(60, 500);
    },
    update: function (dt) {
        //this.y += this.ySpeed;
        //this.ySpeed += gravity;
        this.updateMove(dt);
        this.updateShot();
    },

    updateMove: function(dt){
        if ((MW.KEYS[cc.KEY.w] || MW.KEYS[cc.KEY.up]) && this.y <= winSize.height) {
            this.y += this.speed
        }
        if ((MW.KEYS[cc.KEY.s] || MW.KEYS[cc.KEY.down]) && this.y >= 0) {
            this.y -= this.speed
        }
        if ((MW.KEYS[cc.KEY.a] || MW.KEYS[cc.KEY.left]) && this.x >= 0) {
            this.x -= this.speed
        }
        if ((MW.KEYS[cc.KEY.d] || MW.KEYS[cc.KEY.right]) && this.x <= winSize.width) {
            this.x += this.speed;

        }
    },



    addShot: function(){
        //console.log("add Shot");
        var shot1,shot2,shot3,shot4,shot5;
        console.log("lap lai ne");
        shot1 = new Shot();
        shot1.attr({
            anchorX: 0,
            anchorY: 0,
            x: 0,
            y:0,
            scale:0.01,

        })
        this.addChild(shot1);
    }


    },this);

function restartGame(){
    ship.x = 20;
    ship.y = 300;

}
