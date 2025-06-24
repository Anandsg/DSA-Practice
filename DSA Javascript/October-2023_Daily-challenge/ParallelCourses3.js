var minimumTime = function (n, relations, time) {
    const deps = new Array(n + 1).fill(0);
    const graphs = new Array(n + 1).fill().map((_) => []);
    const maxTime = new Array(n + 1).fill(0);

    for (const [parent, child] of relations) {
        graphs[parent].push(child);
        deps[child]++;
    }

    const queue = [];
    for (let node = 1; node <= n; node++) {
        if (deps[node] === 0) {
            queue.push([node, time[node - 1]]);
        }
    }

    let ans = 0;
    while (queue.length > 0) {
        const [node, currTime] = queue.shift();
        ans = Math.max(ans, currTime);

        for (const child of graphs[node]) {
            deps[child]--;
            maxTime[child] = Math.max(maxTime[child], currTime + time[child - 1]);
            if (deps[child] === 0) {
                queue.push([child, maxTime[child]]);
            }
        }
    }

    return ans;
};