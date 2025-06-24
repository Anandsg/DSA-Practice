var checkArithmeticSubarrays = function (nums, l, r) {
    if (nums.length == 0) { return };
    var answer = new Array;
    for (let m = 0; m < l.length; m++) {
        let subArray = nums.slice(l[m], r[m] + 1);
        subArray.sort(function (a, b) { return a - b });
        let result = checkArithmatic(subArray);

        function checkArithmatic(s) {
            console.log(s);
            for (let i = 0; i < s.length - 1; i++) {
                if (s[i + 1] - s[i] !== s[1] - s[0]) { return false }
            }
            return true;
        }

        answer.push(result);
    }
    return answer;
};