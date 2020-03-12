function alternateCase(string){
    let charUpper = string.toLowerCase().split(''),
    charLower = string.toUpperCase().split('');
    for(let i=0;i<charLower.length; i+=2){
        charUpper[i] =  charUpper[i].toUpperCase();
        charLower[i] =  charLower[i].toLowerCase();
    }
    console.log('Upper -->'+charUpper.join(''));
     console.log('Lower -->'+charLower.join(''));
}

alternateCase('Hello')