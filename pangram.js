function pangram(string){
    var alphabet="abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<string.length;i++){
        var num = alphabet.indexOf(string[i]);
        if(string[i] == alphabet[num]){
            alphabet = alphabet.replace(string[i],'');
        }
    }
    if(alphabet.length == 0){
        return true;
    } else {
        return false;
    }
}

pangram('The quick fox jumps over the lazy dog');