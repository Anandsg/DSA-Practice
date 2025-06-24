let flag = true;
    
var height = function(r){
    if(!r) return 0;

    let num1 = height(r.left);
    let num2 = height(r.right);
    let res = num1 - num2;

    if(res < -1 || res > 1) flag = false;

return Math.max(num1,num2) + 1;
}

height(root);
return flag;