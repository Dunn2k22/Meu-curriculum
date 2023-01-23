 
      
          
 
       function busca(){
 
     let arquivo = document.getElementById("arquivo")
     let entrada = document.getElementById("audio")
      
       let ler = new FileReader()
          ler.readAsDataURL(arquivo.files[0])
 
          ler.onload = function(){
             entrada.src = ler.result;
          }
    
       }
       
      function loades(){
        addEventListener('change', busca)
 
 
       }

       window.addEventListener('load', loades)
 
   