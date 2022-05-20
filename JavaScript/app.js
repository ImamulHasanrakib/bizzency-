
const serchBtn = document.querySelector(' i.fa-magnifying-glass');
const cancleBtn = document.querySelector('i.fa-xmark');
const  Form = document.querySelector('.form');

serchBtn.addEventListener('click', () =>{
    Form.classList.add('active');
    serchBtn.classList.add('active');
    cancleBtn.classList.add('active');
})


cancleBtn.addEventListener('click', () =>{
    Form.classList.remove('active');
    serchBtn.classList.remove('active');
    cancleBtn.classList.remove('active');
})




const bars  = document.querySelectorAll('.progress_bar');

function increase(){

  bars.forEach(function(bar){

    let percentage =  bar.dataset.percent;
     let toolTip = bar.children[0];
     toolTip.innerText = percentage + "%";
     bar.style.width = percentage + "%";
    

   })
}





let skillSection = document.querySelector('.skill_section');


 let optimaize = {
  rootMargin: ' 0px 0px  -400px 0px'
  
 }

let complete = 0;

 const sectionObservervation = new IntersectionObserver(function (entries){

   if(entries[0].isIntersecting && complete !==1){

     complete = 1;

     increase();

  }
 
} , optimaize)

 sectionObservervation.observe(skillSection);