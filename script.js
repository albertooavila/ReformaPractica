
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navlinks');
if(menuBtn && nav){
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
}

const calcBtn = document.querySelector('#calcAislamiento');
if(calcBtn){
  calcBtn.addEventListener('click',()=>{
    const largo=parseFloat(document.querySelector('#largo').value)||0;
    const ancho=parseFloat(document.querySelector('#ancho').value)||0;
    const extra=parseFloat(document.querySelector('#extra').value)||10;
    const superficie=largo*ancho;
    const total=superficie*(1+extra/100);
    document.querySelector('#resultado').textContent =
      superficie>0 ? `Superficie: ${superficie.toFixed(1)} m² · Compra orientativa: ${total.toFixed(1)} m²` :
      'Introduce largo y ancho para calcular.';
  });
}
