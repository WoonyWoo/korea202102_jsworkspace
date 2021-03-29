function blockHitX(me, target) {
    //두물체간 충돌 여부 판단 
    var me_x= parseInt(me.style.left);
    var me_y= parseInt(me.style.top);
    var me_width=parseInt(me.style.width);
    var me_height=parseInt(me.style.height);

    var target_x= parseInt(target.style.left);
    var target_y= parseInt(target.style.top);
    var target_width=parseInt(target.style.width);
    var target_height=parseInt(target.style.height);


    var result1=(me_x >= target_x+target_width-me_width) && (me_x <= (target_x+target_width)); //ball이 block 오른쪽에 닿을 때
    var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+me_width));  //ball이 block 왼쪽에 닿을 때
    var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));//ball이 block 아래쪽에 닿을 때
    var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));//ball이 block 위쪽에 닿을 때
    
    return (result1 || result2) && (result3 || result4);
}

function blockHitY(me, target) {
    //두물체간 충돌 여부 판단 
    var me_x= parseInt(me.style.left);
    var me_y= parseInt(me.style.top);
    var me_width=parseInt(me.style.width);
    var me_height=parseInt(me.style.height);

    var target_x= parseInt(target.style.left);
    var target_y= parseInt(target.style.top);
    var target_width=parseInt(target.style.width);
    var target_height=parseInt(target.style.height);


    var result1=(me_x >= target_x) && (me_x <= (target_x+target_width)); //ball이 block 오른쪽에 닿을 때
    var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width)); //ball이 block 왼쪽에 닿을 때
    var result3=(me_y <= (target_y+target_height) && (me_y >= target_y+target_height-me.height)); //ball이 block 아래쪽에 닿았을 때
    var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+me_height)); //ball이 block 위쪽에 닿았을 때
    
    return (result1 || result2) && (result3 || result4);
}


// var result1=(me_x >= target_x) && (me_x <= (target_x+target_width)); //ball이 block 오른쪽에 닿을 때
// var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));  //ball이 block 왼쪽에 닿을 때
// var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));//ball이 block 아래쪽에 닿을 때
// var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));//ball이 block 위쪽에 닿을 때