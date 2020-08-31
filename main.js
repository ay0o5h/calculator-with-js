

function calculator(){
   
  let  num_1=Number(document.querySelector('#num1').value),
    num_2=Number(document.querySelector('#num2').value),
    add=document.querySelector('#add'),
    sub=document.querySelector('#sub'),
    mult=document.querySelector('#mult'),
    divi=document.querySelector('#divi'),
    result_text=document.querySelector('h3'),
    z=0;
  // e.preventDefault();
    if(add.checked){
            
        z=num_1 + num_2;
       
   
}
 else if(sub.checked){
        
    z=num_1 - num_2;
   

  }
  else if(mult.checked){
        
    z=num_1 * num_2;
   

  }
  else if(divi.checked){
        
    z=num_1 / num_2;
   

  }

  alert('Result is : ' +String(z))
  result_text.innerHTML='Result is : ' + String(z);
}