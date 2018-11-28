window.onload=function(){
    
var list=document.querySelector('.buyList1');
list.onmouseover=ListShow;
list.onmouseout=ListHide;
function ListShow ()  {
    
 list.style.top=553+'px';
 }
 function ListHide (){
     list.style.top=600+'px'
    
 }
 
 function fak (){
     console.log('mazahak');

 }
 valueChange=document.getElementsByClassName('plusButton');
 valueChange.onclick=fak;
 
document.getElementsByClassName('plusButton').onclick=function(){
    document.getElementsByClassName('change').innerHTML='4';
}
} 
$(document).ready(function(){
    
      $('.plusButton').click(function(){ 
          console.log('Mazahaka Jquery Sucks')
          var holder=$(this).parent().parent().find('.innerValue').text();
          holder++;

          console.log(holder);
        $(this).parent().parent().find('.innerValue').html(holder);  
        }); 
        $('.minusButton').click(function(){ 
             console.log('Mazahaka Jquery Fucks');  
             var holder=$(this).parent().parent().find('.innerValue').text();
            

            console.log(holder);
            if(holder==0){
                return;
            }
            holder--;
        $(this).parent().parent().find('.innerValue').html(holder);
            });  
            $('button').mouseenter(function (){  console.log('tooltip'); 
         });  
        });
