var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var words = ['hello', 'world'];
console.log(__spreadArray(['new'], words, true));
var coordinate;
coordinate = [42.3, 15.2]; //ok
cooridnate = ['green', 'which']; // not ok
