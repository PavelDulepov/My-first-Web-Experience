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
    document.getElementsByClassName('change').innerHTML()='4';
}
} 
$(document).ready(function(){
    var holder;
    
      $('.plusButton').click(function(){ 
        
          console.log('Mazahaka Jquery Sucks')
          var holder=$(this).parent().parent().find('.innerValue').text();
          holder++;
         
          if(holder>='1'&&$(this).parent().parent().hasClass('value1Cookies')){
                $('.statusBlock2').css('display',"inline-block");
            }
            else if(holder>='1'&&$(this).parent().parent().hasClass('value1Tomat')){
                $('.statusBlock4').css('display','inline-block');
            }
            else if(holder>='1'&&$(this).parent().parent().hasClass('value1Cheese')){
                $('.statusBlock3').css('display','inline-block');
            }
            
          console.log(holder);
          if($(this).parent().parent().hasClass("value1Tomat")){
            console.log('suka');
            $("#OrangeCircleTomatValue").text(holder);
            } 
            else if($(this).parent().parent().hasClass("value1Cookies")){
            $('#OrangeCircleCookiesValue').text(holder);
            }
            else if($(this).parent().parent().hasClass("value1Cheese")){
                $('#OrangeCircleCheeseValue').text(holder);
                }
            
        $(this).parent().parent().find('.innerValue').html(holder);  
        }); 
        $('.minusButton').click(function(){ 
             console.log('Mazahaka Jquery Fucks'); 
            //  console.log(holder);
             
             var holder=$(this).parent().parent().find('.innerValue').text();
            

           
            
            
            
            if(holder==0){
                return;
            }
            holder--;
            if($(this).parent().parent().hasClass("value1Tomat")){
                console.log('suka');
                $("#OrangeCircleTomatValue").text(holder);
                
            } 
            else if($(this).parent().parent().hasClass("value1Cookies")){
                    $('#OrangeCircleCookiesValue').text(holder);
            }
            else if($(this).parent().parent().hasClass("value1Cheese")){
                $('#OrangeCircleCheeseValue').text(holder);
            }
            if(holder<'1'&&$(this).parent().parent().hasClass('value1Cookies')){
                console.log('work');
                $('.statusBlock2').css('display',"none");
            }
            else if(holder<'1'&&$(this).parent().parent().hasClass('value1Tomat')){
                $('.statusBlock4').css('display','none');
            }
            else if(holder<'1'&&$(this).parent().parent().hasClass('value1Cheese')){
                $('.statusBlock3').css('display','none');
            }
        $(this).parent().parent().find('.innerValue').html(holder);
            });  
            $('button').mouseenter(function (){  console.log('tooltip'); 
         });
           
         
        });

