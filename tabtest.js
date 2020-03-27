function Testsum() {
    if((sum([])==0)&&sum([42,404,1337])){
        return true;
    }
    return false;
}

function Testsum2() {
    if((sum2([])==0)&&sum2([42,404,1337])){
        return true;
    }
    return false;
}
function TestlongestWord() {
    if(longestWord(["lot", "of", "words", "of", "different", "sizes"])=="different"){
        return true;
    }
    return false;
}
