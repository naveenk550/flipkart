function backSpace(string){
    if(!string.split('').includes('#')) return s;
    if(/^[\#]+$/ig.test(string)) return '';
    let split = string.split('');
    for(let i=0;i<split.length;i++){
        if(split[i+1] === '#'){
            split.splice(i,2);
            break;
        }
    }
    return backSpace(split.join(''));
}

backSpace('#######');