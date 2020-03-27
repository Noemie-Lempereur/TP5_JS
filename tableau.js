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
