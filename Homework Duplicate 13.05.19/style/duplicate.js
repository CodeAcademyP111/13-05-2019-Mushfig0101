let arry = [12, 12, 26, 58, 45, 44, 44, 22, 22, 45];
function duplicate(){
  let returner ="";

    for (i = 0; i < arry.length; i++) {


      for(j=i+1; j<arry.length; j++){

        if(arry[i]==arry[j]){

          returner +=arry[i] + " ";
        }
         
      }

    }
console.log(returner );    
}

duplicate();
