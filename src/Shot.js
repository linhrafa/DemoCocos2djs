var Shot = cc.Sprite.extend({
    i: null,
    ctor: function (i) {
        this._super(gameResources.shot);
        this.i = i;
        //var shot = cc.Sprite.create();
        //shot.setScale(0.3);
        //this.addChild(shot);
        this.scheduleUpdate();
        //this.schedule(this.bullet_move(),0.5);
        console.log("ctoctor ctor");
    }
    ,
    update: function () {
        console.log("i ="+this.i);
        x = this.x;
        y = this.y;
        //this.x= x+5;

        switch (this.i){
            case 0:
                this.x= x+5;
                break;
            case 1:
                this.x = x-5;
                break;
            case 2:
                this.y= y-5;
                break;
            case 3:
                this.x=x-5;
                this.y=y-5;
                break;
            case 4:
                this.x=x+5;
                this.y=y-5;
                break;
        }

    },

})