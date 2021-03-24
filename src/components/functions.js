

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