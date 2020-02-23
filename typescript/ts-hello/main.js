function lock() {
    for (var i = 0; i < 100; i++) {
        console.log(i);
    }
    console.log("finally " + i);
}
lock();
