let countBs = word => {
   return countChar(word, "B");
}

let countChar = (word, char) => {
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] == char){
            count++
        }
    }
    return count;
}

console.log(countBs("KABABABAB"))