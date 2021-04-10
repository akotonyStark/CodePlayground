function vowelsAndConsonants(s) {
    
    s.split('').forEach(function(value, index){
        if(value.includes('a') || value.includes('e') || value.includes('i') || value.includes('o') || value.includes('u')){
            console.log(value)
        }
        
    })
    s.split('').forEach(function(value, index){
        if(value.includes('a') || value.includes('e') || value.includes('i') || value.includes('o') || value.includes('u')){
            //do nothing
        }
        else{
          console.log(value)
        }
        
    })
    
    
}
