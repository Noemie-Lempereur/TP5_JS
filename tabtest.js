function Testsum() {
    if((sum([])==0)&&sum([42,404,1337])){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

function Testsum2() {
    if((sum2([])==0)&&sum2([42,404,1337])){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
function TestlongestWord() {
    if(longestWord(["lot", "of", "words", "of", "different", "sizes"])=="different"){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

function Testrange(){
    let t=[];
    let s=range(3, 8, 1)
    for(let i=0;i<t.length;i++){
        if (t[i]!=s[i]){
            console.log("false");
            return;
        }
    }
    console.log("true");
}

function TestnbOccurences(){
    let text = "bar qux baz foo bar foo qux foo";
    console.log(nbOccurences(text, "foo")); // => 3
    console.log(nbOccurences(text, "quux")); // => 0
    console.log(nbOccurences(text, "baz")); // => 1
    if((nbOccurences(text, "foo")==3)&&(nbOccurences(text, "quux")==0)&&(nbOccurences(text, "baz")==1)){
        console.log("true");
    }
    else{
        console.log("false");  
    }
}

function Testflatten2D(){
    let t=[1,2,3,4,5,6];
    let s=flatten2D([[1,2], [3,4], [5,6]]);
    let r=flatten2D([[1,2], [3,4,5], [6]]);
    for(let i=0;i<t.length;i++){
        if (t[i]!=s[i]){
            console.log("false");
            return;
        }
        if (t[i]!=r[i]){
            console.log("false");
            return;
        }
    }
    console.log("true");
}