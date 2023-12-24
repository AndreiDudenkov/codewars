Array.prototype.isSparse = function() {
    for (let i = 0; i < this.length; i++) {
        if (!(i in this)) {
            return true;
        }
    }
    return false;
}