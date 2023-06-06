for (var i = 2; i <= 10; i++) {
    var isPrime = true;
    for (var j = 2; j * j <= i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}