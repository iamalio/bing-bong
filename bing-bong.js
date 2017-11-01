function badabing(){
    
    let populated = [];
    
        for (var i = 0; i <= 101; i++){
            
            populated.push(i);
            
            document.getElementById('number-area').innerHTML = populated; 
            
            if (i % 3 == 0){
                populated[i] = "Bing!";
            }
            if (i % 5 == 0){
                  populated[i] = "Bong!";
            }
            if ((i % 3 == 0) && (i % 5 == 0)){
                    populated[i] = "Bing-Bong!";
            }
              
            }
        }
        
