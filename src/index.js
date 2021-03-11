module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0) {
        return false;
    }
    if (str.length % 2 == 0) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (str.includes(bracketsConfig[i][0] + bracketsConfig[i][1])) {
                str = str.replace(bracketsConfig[i][0] + bracketsConfig[i][1], "");
                console.log(str);
                i = -1;
            }
        }
    }
    if (str.length != 0) {
        return false;
    } else {
        return true;
    }
}