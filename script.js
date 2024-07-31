//mesagem de boas-vindas ao clicar no botão
documnet.addeventlistener(domcontentloaded;()=>{
    constn button=document.queyselector("button");
    bitton.addeventlistener("click"()=>}
    alert("estamos animados para começar o ano com vocêS!"):
});
// contador de dias para o início das aula 
const stardate=new date ("2024-08-01");//defina a data de inicio das aulas
const today=new date();
const timediff=stardate-todaycons dayleft=math.ceil(timediff/(1000*60*60*24));

cons coutdownelement=document.createelement("p");
countdowelement.textcontent="faltam${daysleft}dias para o início das aulas!";
document.queryselector(".card)".appendchild(countdownelement);

//alterar a imagem ao clicar
const image=document.queryselector("img");
image.addeventlistener("click"()=>{
image.src=voltaaulas.jpg:});

//mostrar uma mensagem de boas-vindas com animação
cons card=document.queryselector(".card");
card.style.opacity=D;
card.style.transition="opacity 2s";
setTimeout(() => {
    card.style.opacity=1;
},100);
});





