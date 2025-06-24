var countVowelPermutation = function (n) {
    const MOD = 1e9 + 7;

    let a = 1, e = 1, i = 1, o = 1, u = 1;

    for (let j = 1; j < n; j++) {
        let a_next = e;
        let e_next = (a + i) % MOD;
        let i_next = (a + e + o + u) % MOD;
        let o_next = (i + u) % MOD;
        let u_next = a;

        a = a_next, e = e_next, i = i_next, o = o_next, u = u_next;
    }

    return (a + e + i + o + u) % MOD;
}