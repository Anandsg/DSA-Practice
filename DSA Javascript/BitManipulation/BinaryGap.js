var binaryGap = function(n) {
    const binary = n.toString(2);
    let max = 0, last = 0, i = 0;
    while(i < binary.length){
        if(binary[i] === "1"){
            let distance = i - last;
            last = i;
            max = Math.max(max, distance)
        }
        i++;
    }
    return max;
};