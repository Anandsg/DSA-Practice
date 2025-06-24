var poorPigs = function (buckets, minutesToDie, minutesToTest) {
    let max_time = minutesToTest / minutesToDie + 1;
    let req_pigs = 0;
    while (Math.pow(max_time, req_pigs) < buckets)
        ++req_pigs;
    return req_pigs;
};