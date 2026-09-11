
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


const humCalcBtn = document.querySelector('#calcDeshumidificador');
if(humCalcBtn){
  humCalcBtn.addEventListener('click',()=>{
    const area = parseFloat(document.querySelector('#areaHum').value)||0;
    const hum = parseFloat(document.querySelector('#humInicial').value)||0;
    const temp = parseFloat(document.querySelector('#tempHum').value)||20;
    const out = document.querySelector('#resultadoHum');
    if(area<=0 || hum<=0){
      out.innerHTML = '<strong>Introduce superficie y humedad.</strong>';
      return;
    }
    let msg = '';
    if(area <= 25){
      msg = 'Un equipo de 20 L/día suele darte margen suficiente para esta superficie.';
    }else if(area <= 50){
      msg = '20 L/día es una capacidad razonable para esta superficie, especialmente si la humedad es alta.';
    }else if(area <= 70){
      msg = '20 L/día puede funcionar, pero ya conviene revisar temperatura, distribución de estancias y caudal de aire. Un 25–30 L/día puede ofrecer más margen.';
    }else{
      msg = 'No elegiría un 20 L/día solo por la cifra de m². Para esta superficie compararía 30 L/día o más, o varios equipos según la distribución.';
    }
    if(hum >= 75){
      msg += ' Con una humedad inicial ≥75 %, prioriza capacidad y drenaje continuo.';
    }
    if(temp < 15){
      msg += ' A baja temperatura, un deshumidificador de compresor suele extraer bastante menos agua que en sus condiciones nominales.';
    }
    out.innerHTML = '<strong>Orientación:</strong> ' + msg + '<br><small>Estimación práctica, no sustituye la ficha técnica del fabricante ni un cálculo higrotérmico.</small>';
  });
}
