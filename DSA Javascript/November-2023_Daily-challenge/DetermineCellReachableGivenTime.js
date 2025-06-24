var isReachableAtTime = function (sx, sy, fx, fy, t) {
    const xDist = Math.abs(sx - fx);
    const yDist = Math.abs(sy - fy);

    if (xDist === 0 && yDist === 0) {
        return t !== 1;
    }

    return xDist <= t && yDist <= t
};