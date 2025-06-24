var nextGreatestLetter = function(letters, target) {
    let set = new Set(letters)
    for(let element of set){
        if(target<element)
        return element
    }
    return letters[0]
};