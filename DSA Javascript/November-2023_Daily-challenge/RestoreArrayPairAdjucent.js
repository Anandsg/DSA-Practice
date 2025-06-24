var restoreArray = function (adjacentPairs) {
    const graph = new Map();

    for (const [u, v] of adjacentPairs) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    let result = [];

    for (const [node, neighbors] of graph.entries()) {
        if (neighbors.length === 1) {
            result = [node, neighbors[0]];
            break;
        }
    }

    while (result.length < adjacentPairs.length + 1) {
        const [last, prev] = [result[result.length - 1], result[result.length - 2]];
        const candidates = graph.get(last);
        const nextElement = candidates[0] !== prev ? candidates[0] : candidates[1];
        result.push(nextElement);
    }

    return result;
};