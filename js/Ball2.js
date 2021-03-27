class Ball{
    constructor(container, color, width, height, velX, velY){
        this.container = container; //어디에 붙일지를 결정짓지 말고, 호출자가 결정하도록...
        this.color = color;
        this.x=0;
        this.y=0;
        this.width = width;
        this.height = height;
        this.velX=velX; //좌우를 결정하는 변수 +일때 증가, -일때는 감소
        this.velY=velY; //상하를 결정하는 변수 +일때 증가, -일때는 감소
        this.limitX=parseInt(this.container.style.width); //공의 x축 한계점
        this.limitY=parseInt(this.container.style.height); //공의 y축 한계점
        this.r = 0;

        this.div = document.createElement("div"); //공을 감쌀 div
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundColor = this.color;
        this.div.style.position = "absolute";
        this.div.style.left = 0 +"px";
        this.div.style.top = 0 + "px";
        this.div.style.padding = 0 + "px";
        this.div.style.borderRadius = 100 + "%";

        //div 부모 요소에 부착
        this.container.appendChild(this.div);
    }

    //공의 동작!!
    move(){
        this.x = this.x + this.velX; //10씩 증가하는 등속도 운동
        this.y = this.y + this.velY;

        //y축의 경계에 다다르면..부호변경 
        if(this.y >= this.limitY-this.height || this.y <= 0){ //밑바닥 or 천장에 도달하면!!!
            this.velY *= -1;
        }
        //x축의 경계에 다다르면..부호변경
        if(this.x >= this.limitX-this.width || this.x <= 0){
            this.velX *= -1;
        }


        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        // this.r+=2;
        // this.div.style.transform="rotate("+this.r+"deg)";
    }
}