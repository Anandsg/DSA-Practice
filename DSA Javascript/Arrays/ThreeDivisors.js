class Solution {
    isThree(n) {
        if (n <= 3) {
            return false;
        }
        let ans = 2;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                let a = i;
                let b = n / a;
                if (a === b) {
                    ans++;
                } else {
                    ans += 2;
                }
            }
            if (ans > 3) {
                return false;
            }
        }
        return ans === 3;
    }
}
