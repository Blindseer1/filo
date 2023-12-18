const choice=document.querySelectorAll('.choice');
const score=document.querySelector('.score');
let points=0;
score.textContent=points+' puncte';
const footer=document.querySelector('footer');

choice.forEach(choice=>choice.addEventListener('click',()=>{
        
    
    
       let num=choice.querySelector('.points');
        points+=+num.textContent;
        score.textContent=points+' puncte';
        if(points==100)
 footer.style.visibility='visible';
})
)

