function swapCase(s){
    let size=s.length;
    console.log(s);
    let d="";
    for(let i=0;i<size;i++){
        if (s[i] === s[i].toLowerCase()){
            d+=(s[i].toUpperCase());
        }
        else{
            if (s[i] === s[i].toUpperCase()){
                d+=(s[i].toLowerCase());
            }
        }
    }
    console.log(d);
    return d;
}


function isPalindrome(s){
    let size=s.length;
    for(let i=0;i<size;i++){
        if(s[i]!=s[size-i-1]){
            return false;
        }
    }
    return true;
}

function truncate(s,n){
    if(s.length<=n){
        return s;
    }
    else{
        let d=s[0];
        for(let i=1;i<n-3;i++){
            d=d+s[i];
        }
        d=d+'...';
        return d;
    }
}

function repeat(s, n){
    let d=s;
    for(let i=1;i<n;i++){
        d=d+s;
    }
    return d;
}

