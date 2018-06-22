var Enemy = cc.Sprite.extend({
    ctor: function () {
        this._super();
        var enemy_ship = cc.Sprite.create(gameResources.enemy_ship);
        enemy_ship.attr({
            rotation: -90,
            scale: enemy_scale
        });

        this.anchorX = 0;
        this.anchorY= 0;
        this.x = 900;
        this.y= 100+500*Math.random();
        this.addChild(enemy_ship);

        var moveAction = cc.MoveTo.create(2.5,new cc.p(-100, Math.random()* 600));
        this.runAction(moveAction);
        this.scheduleUpdate();
    },
    update: function (dt) {
        var ship_boundingbox = ship.getBoundingBox()
        var enemy_boundingbox = this.getBoundingBox();

        if (cc.rectIntersectsRect(ship_boundingbox,enemy_boundingbox)){
            console.log("da va cham");
            restartGame();
        }
        console.log("winSize.width = "+winSize.width);
        console.log("y = "+this.y);
        if (this.x<-50){
            this.x = 960;
            var moveAction = cc.MoveTo.create(2.5,new cc.p(-100, Math.random()* 600));
            this.runAction(moveAction);
        }

    }
},this)/**
 * Created by CPU02423_LOCAL on 6/22/2018.
 */
