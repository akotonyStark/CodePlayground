var findTheDifference = function(s, t) {
    var result = '';
    
    var hash = {};
    for (var i=0; i<s.length; i++) {
        hash[s[i]] = hash[s[i]] + 1 || 1;
    }
    
    for (var i=0; i<t.length; i++) {
        if (!hash[t[i]] || hash[t[i]] - 1 < 0) {
            result = t[i];
            break;
        }
        else {
            hash[t[i]]--;
        }
    }
    
    return result;
};
