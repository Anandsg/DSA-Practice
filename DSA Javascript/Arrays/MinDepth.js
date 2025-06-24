if(!root) return 0;

const queue = [root];
let height = 0;
while(queue.length){
    const n = queue.length;
    height++;
    for(let i=0; i<n; i++){
        const node = queue.shift();
        if(!node.left && !node.right)return height;
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
}