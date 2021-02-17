let numbers=document.querySelector('.num1');
let numbers1=document.querySelector('.num2');
let numbers2=document.querySelector('.num3');
let numbers3=document.querySelector('.num4');
let container=document.querySelector('.container')
let imgNav=document.querySelector('.navigations img');
let navigationLinks=document.querySelector('.nav .navigations ul');
imgNav.addEventListener('click',function (e) {
   navigationLinks.classList.toggle('show')
})
let j=0
function counting(element) {
        if (j<10) {
         numbers.textContent=j+1; 
         numbers1.textContent=j+29; 
         numbers2.textContent=j+50; 
         numbers3.textContent=j+11;
         j++
                  
        }
       
          
        setTimeout(counting,100)
       
        
    }
    function scrolling(params) {
        if (window.pageYOffset>='1400') {
            counting()
        }
    }
    document.addEventListener('scroll',scrolling)
    // counting('.num1')