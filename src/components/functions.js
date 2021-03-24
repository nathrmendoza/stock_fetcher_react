

export const formatNumber = (e) => {
    if (e > 1000 && e < 1000000) {
        let x = e / 1000 + 'K';
        return x;
    }
    else if (e > 1000000 && e < 1000000000) {
        let x = e / 1000000 + 'M';
        return x;
    }else if (e > 1000000000) {
        let x = e / 1000000000 + 'B';
        return x;
    }else {
        return e;
    }
}

export const compareString = (tocompare, tobecompared) => {
    let result = true;
    for (var i = 0;i < tocompare.length; i++) {
        if (tocompare.charAt(i) !== tobecompared.charAt(i)) {
            result = false;
            break;
        }
    }
    return result;
}