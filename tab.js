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