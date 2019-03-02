class Snake {

    constructor () {
        this.x = 300;
        this.y = 300;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];
    }

    build () {
        rectMode(CENTER);
        fill(165, 137, 193);
        for(var i=0; i<this.tail.length; i++){
            rect(this.tail[i].x, this.tail[i].y, col, row);
        }
        rect(this.x, this.y, col, row);     
    }

    kill () {
        
        for(var i=0; i<this.tail.length; i++){
            var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
            if(d == 0){
                this.total = 0;
                this.tail = [];
                this.xSpeed = 0;
                this.ySpeed = 0;
            }
        }
    }

    update () {
        var tx = this.x;
        var ty = this.y;

        this.x = this.x + col*this.xSpeed;
        this.y = this.y + row*this.ySpeed;

        this.kill();

        if (this.x > col * (scale-1)) {
            this.x = col;
        }
        else if (this.x < col) {
            this.x = col * (scale-1);
        }

        if (this.y > row * (scale-1)) {
            this.y = row;
        }
        else if (this.y < row) {
            this.y = row * (scale-1);
        }

        for(var i=0; i<this.tail.length-1; i++){
            this.tail[i] = this.tail[i+1];
        }
        if(this.total > 0){
            this.tail[this.total-1] = createVector(tx, ty);
        }
    }

    hasEaten () {
        var d = dist(this.x, this.y, food.x, food.y);
        if (d==0) {
            return 1;
        }
    }

}

class Food {

    constructor () {
        this.x = 200;
        this.y = 200;
    }

    build() {
        rectMode(CENTER);
        fill(137, 193, 165);
        rect(this.x, this.y, col, row);        
    }

    pickLocation () {

        // this.x = row * floor(random(1,scale-1));
        // this.y = col * floor(random(1,scale-1));

        var boo = true;

        do {
            this.x = row * floor(random(1,scale-1));
            this.y = col * floor(random(1,scale-1));
            boo = false;
            for(var i=0; i<snake.tail.length; i++){
                var d = dist(this.x, this.y, snake.tail[i].x, snake.tail[i].y);
                if(d == 0){
                    boo = true;
                }
            }
        } while (boo);
      
    }

}