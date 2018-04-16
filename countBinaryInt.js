function countBinaryInt(integer) {
    if (integer == 0) {
        return 0;
    }
    var bit = Math.floor(integer % 2);
    if (bit != 0) {
        return 1 + countBinaryInt(Math.floor(integer / 2));
    } else {
        return 0 + countBinaryInt(Math.floor(integer / 2));
    }
}

console.log(countBinaryInt(7));