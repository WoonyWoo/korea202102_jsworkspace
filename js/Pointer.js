//갤러리의 썸네일을 쫓아다니는 사각 포인터

class Pointer{

    constructor(container,width,height,x,y,a,targetX){
        this.container = container;
        this.div = document.createElement("div");
        this.width = width;
        this.height =height;
        this.x = x;
        this.y =y;
        this.a = a; //비율계수(부드러운 정도)
        this.targetX =targetX; //목표지점

        this.init();
    }

    init(){
        this.div.style.width = this.width +"px";
        this.div.style.height = this.height +"px";
        this.div.style.position = "absolute";
        this.div.style.left = this.x+"px";
        this.div.style.top = this.y +"px";
        this.div.style.border = "5px solid yellow";
        this.div.style.boxSizing = "border-box"
        this.div.style.backgroundColor="#FFFFFF";
        this.div.style.opacity=0.7;

        this.container.appendChild(this.div);
    }

    tick(){//감속도운동

        this.x = this.x + this.a*(this.targetX - this.x);
        
    }

    render(){
        this.div.style.left = this.x + "px";

    }


}