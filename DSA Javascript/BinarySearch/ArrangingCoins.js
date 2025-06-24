var arrangeCoins = function(n) {
    if(!n || n=== 1) return n;
    
    let totalCoins = n, i=1;               
    while(totalCoins >=0){
        if(totalCoins > i){                 
            totalCoins = totalCoins -i;
            i++;
        }else if(totalCoins < i){          
            return i-1;
        }else if(totalCoins === i){       
            return i;
        }
    }
};