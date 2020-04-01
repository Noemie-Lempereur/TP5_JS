function sum(t){
    let s=0;
    for(let i=0;i<t.length;i++){
        s=s+t[i];
    }
    return s;
}

function sum2(t){
    let s=0;
    for(let i in t){
        s=s+t[i];
    }
    return s;
}

function longestWord(t){
    let s=0;
    let j=0;
    for(let i=0;i<t.length;i++){
        if((t[i]).length>j){
            j=(t[i]).length;
            s=t[i];
        }
    }
    return s;
}

function range(min, max, step) {
    let t1=[];
    for(let i=min;i<=max;i+=step){
        t1.push(i);
    }
    return t1;
}

function nbOccurences(wordList, word){
    let w=wordList.split(" ");
    let o=0;
    for(let i=0;i<w.length;i++){
        if(w[i]==word){
            o++;
        }
    }
    return o;
}

function flatten2D(array){
    let array2=[];
    let k=0;
    for(let j=0;j<array.length;j++){
        for(let i=0;i<array[j].length;i++){
            array2[k]=array[j][i];
            k++;
        }
    }
    return array2;
}