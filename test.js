let n = 10;
outer: for (; n >= 2; n--) {
    for (let j = n - 1; j >= 2; j--) {
        if (n % j === 0) {
            continue outer;
        }
    }
    alert(n);
}
