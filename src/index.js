exports.min = function min (array) {
    if (array && array.length) {
        return Math.min(...array);
    }
    return 0;
}

exports.max = function max (array) {
    if (array && array.length) {
        return Math.max(...array);
    }
    return 0;
}

exports.avg = function avg (array) {
    if (array && array.length) {
        let x = array.length;
        return array.reduce(function (a, b) { return a + b; }, 0) / x;
    }
    return 0;
}
