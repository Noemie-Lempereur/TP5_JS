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

function exercice6(){
    array=["Bob", "Julien", "Roger"];
    for(let i=0;i<array.length;i++){
            console.log(array[i]);
    }
    array.pop();
    array.push("Nom");
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}

function tablemultiplication (){
    
    let array=[[10][10]];
    let a;
    for(let i=0;i<10;i++){
        array[i]=[];
        for(let j=0;j<10;j++){
            a=i*j;
            array[i][j]=a;
        }
    }
    for(let i=0;i<10;i++){
        console.log(array[i]);
    }
    
}

function chiffrement(s,cle){
    let alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let c;
    let a=[];
    for(let i=0;i<s.length;i++){
        if (s[i]==' '){
            a[i]=' ';
            continue;
        }
        c=alphabet.indexOf(s[i]);
        c=(c+cle)%26;
        a[i]=alphabet[c];
    }
    console.log(a);
    return a;
}

function dechiffrement(s,cle){
    let alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let size=s.lenght;
    let c;
    let a=[];
    for(let i=0;i<s.length;i++){
        if (s[i]==' '){
            a[i]=' ';
            continue;
        }
        c=alphabet.indexOf(s[i]);
        c=(c-cle);
        c=(c+26)%26
        console.log(c);
        a[i]=alphabet[c];
    }
    console.log(a);
    return a;
}

function chiffrementViginere(s){
    let alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let c;
    let a=[];
    let r=[3,1,4]
    let j=0;
    for(let i=0;i<s.length;i++){
        if (s[i]==' '){
            a[i]=' ';
            continue;
        }
        c=alphabet.indexOf(s[i]);
        c=(c+r[j])%26;
        a[i]=alphabet[c];
        j++;
        if(j==3){
            j=0
        }
    }
    console.log(a);
    return a;
}

function dechiffrementViginere(s){
    let alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let size=s.lenght;
    let c;
    let a=[];
    let r=[3,1,4]
    let j=0;
    for(let i=0;i<s.length;i++){
        if (s[i]==' '){
            a[i]=' ';
            continue;
        }
        c=alphabet.indexOf(s[i]);
        c=(c-r[j]);
        c=(c+26)%26
        console.log(c);
        a[i]=alphabet[c];
        j++;
        if(j==3){
            j=0
        }
    }
    console.log(a);
    return a;
}