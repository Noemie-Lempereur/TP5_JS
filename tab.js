function abs(numbers){
    let absnumbers=numbers.map(
        function valeurabs(elem){
            return Math.abs(elem);
        }
    );
    return absnumbers;
}

function evenOnly(numbers){
    let even=numbers.filter(
        function even(element){
            return (element%2)=0;
        }
    );
}

function sum(numbers){
    let sumnumbers=numbers.reduce(
        function sum(s,number){
            return s+numbers;
        },
    )
    return s;
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
