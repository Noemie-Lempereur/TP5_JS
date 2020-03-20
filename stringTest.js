function repeatTests(){
    let d= repeat("foo", 3); // => foofoofoo
    if (d!="foofoofoo"){
        console.log("false");
    }
    else{
        console.log("true");
    }
    let e= repeat("coucou ", 5); // => coucou coucou coucou coucou coucou 
    if (e!="coucou coucou coucou coucou coucou "){
        console.log("false");
    }
    else{
        console.log("true");
    }
}

function truncateTests(){
    if(truncate("unchanged text", 20)==="unchanged text"){
        console.log("true");
    }
    else{
        console.log("false");
    }
    if(truncate("unchanged text", 14)==="unchanged text"){
        console.log("true");
    }
    else{
        console.log("false");
    }
    if(truncate("truncated text", 10)==="truncat..."){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

function isPalindromeTests(){
    if(isPalindrome("bonjour")==false){
        console.log("true");
    }
    else{
        console.log("false");
    }
    if(isPalindrome("toto")==false){
        console.log("true");
    }
    else{
        console.log("false");
    }
    if(isPalindrome("kayak")==true){
        console.log("true");
    }
    else{
        console.log("false");
    }
    if(isPalindrome("ressasser")==true){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

function swapCaseTests(){
    if(swapCase("HELLO")=="hello"){
        console.log("true");
    }
    else{
        console.log("false");
    }
    if(swapCase("bye")=="BYE"){
        console.log("true");
    }
    else{
        console.log("false");
    }if(swapCase("GooD NighT")=="gOOd nIGHt"){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

function main(){
    swapCaseTests();
}

main();