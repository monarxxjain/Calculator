import React from 'react';
// import copy from '../../copy-icon.svg'
import './Display.css';
export default function Display() {

  const clearAll=()=>{
    let box = document.getElementById('calc_value');
    box.value="";
    console.log(box.value);
    // console.log(typeof(parseInt(box.value)));
  }

  const appendHistory = (i,f) =>{
    let histBox = document.getElementById('calc_history');
    histBox.style.cssText = 'margin-left: 2vmin; margin-right: 2vmin; ';

    let section = document.createElement('div');
    section.innerHTML =`&#x2022;   ${i} = ${f} `;
    section.style.cssText ='font-size: 5vmin; border-bottom: 1px solid grey; padding: 1vmin'

    histBox.insertBefore(section,histBox.firstChild);

  }

  const append = (e) => {
    let box = document.getElementById('calc_value');
    // console.log(e.target.innerHTML);
    if(e.target.innerHTML === '='){
      let initVal = box.value;
      
      try {
        // eslint-disable-next-line no-eval
        box.value=eval(box.value);
        appendHistory(initVal, box.value);
        console.log("Calculated : " + box.value);
      } 
      catch (e) {
        if (e instanceof SyntaxError) {
          alert("Incomplete Operation");
        } 
        else {
          throw e;
        }
      }
    }
    
    else{
      if ((e.target.innerHTML === '+' || e.target.innerHTML === '-' || e.target.innerHTML === '*'
            || e.target.innerHTML === '/' || e.target.innerHTML === '%') && 
          (box.value[box.value.length - 1] === '+' || box.value[box.value.length - 1] === '-' ||
           box.value[box.value.length - 1] === '*' || box.value[box.value.length - 1] === '/' || 
           box.value[box.value.length - 1] === '%')){
            console.log("Cannot be appended");
      }
      else if ((e.target.innerHTML === '+' || e.target.innerHTML === '-' || e.target.innerHTML === '*'|| 
                e.target.innerHTML === '/' || e.target.innerHTML === '%') && box.value.length === 0){
          console.log("Cannot be appended");
      }

      else if (box.value.length < 20) {
        let initVal = box.value;
        box.value = initVal + e.target.innerHTML;
        // console.log(box.value);
      }
    }
    
  }

  const appendDot = () => {
    let box = document.getElementById('calc_value');
    let boxVal = box.value;
    let arr = boxVal.split(/[+\-%/*]/);
    console.log(arr);
    // console.log("ji")
    if (boxVal.length < 20 && !arr[arr.length-1].includes(".")) {
      let initVal = box.value;
      box.value = initVal + ".";
      console.log(box.value);
    }
  }
  const pop = () =>{
    let box = document.getElementById('calc_value');
    console.log(box.value.length)
    let initVal = box.value;
    box.value = "";
    for (let i = 0; i < initVal.length -1;i++){
      box.value=box.value+initVal[i];
    }
  }

  window.addEventListener("keydown", (event)=>{
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    switch(event.key){
      case "0":
        document.getElementById('calc_0').click();
        break;
      case "1":
        document.getElementById('calc_1').click();
        break;
      case "2":
        document.getElementById('calc_2').click();
        break;
      case "3":
        document.getElementById('calc_3').click();
        break;
      case "4":
        document.getElementById('calc_4').click();
        break;
      case "5":
        document.getElementById('calc_5').click();
        break;
      case "6":
        document.getElementById('calc_6').click();
        break;
      case "7":
        document.getElementById('calc_7').click();
        break;
      case "8":
        document.getElementById('calc_8').click();
        break;
      case "9":
        document.getElementById('calc_9').click();
        break;
      case ".":
        // document.getElementById('calc_dot').click();
        appendDot();
        break;
      case "Backspace":
        pop();
        break;
      case "c":
        clearAll();
        break;
      case "+":
        document.getElementById('calc_plus').click();
        break;
      case "-":
        document.getElementById('calc_min').click();
        break;
      case "*":
        document.getElementById('calc_x').click();
        break;
      case "/":
        document.getElementById('calc_div').click();
        break;
      case "%":
        document.getElementById('calc_percent').click();
        break;
      case "Enter":
        document.getElementById('calc_eq').click();
        break;
      case "=":
        document.getElementById('calc_eq').click();
        break;

      default:
        break;
    }
    event.preventDefault();
  },true)

  return (
    <>

      <div className='calc_ans'>
        {/* <button className='copy_btn'> */}
        {/* <img src={copy} alt="Copy" className='copy_img' height="60vmin"/> */}
        {/* </button> */}
        <input className='calc_value' id='calc_value' placeholder='0'/>
      </div>



      <div className='calc_body'>
        {/* &#247; divide */}
        <div className='calc_row'>
          <button onClick={clearAll} className='btn_calc calc_AC' id="calc_AC">AC</button>
          <button onClick={append} className='btn_calc calc_percent' id="calc_percent">%</button>
          <button onClick={append} className='btn_calc calc_div' id="calc_div">/</button>
          <button onClick={pop} className='btn_calc calc_back' id="calc_back">&#8592;</button>
        </div>

        <div className='calc_row'>
          <button onClick={append} className='btn_calc calc_7' id="calc_7">7</button>
          <button onClick={append} className='btn_calc calc_8' id="calc_8">8</button>
          <button onClick={append} className='btn_calc calc_9' id="calc_9">9</button>
          <button onClick={append} className='btn_calc calc_x' id="calc_x">*</button>
        </div>

        <div className='calc_row'>
          <button onClick={append} className='btn_calc calc_4' id="calc_4">4</button>
          <button onClick={append} className='btn_calc calc_5' id="calc_5">5</button>
          <button onClick={append} className='btn_calc calc_6' id="calc_6">6</button>
          <button onClick={append} className='btn_calc calc_min' id="calc_min">-</button>
        </div>

        <div className='calc_row'>
          <button onClick={append} className='btn_calc calc_1' id="calc_1">1</button>
          <button onClick={append} className='btn_calc calc_2' id="calc_2">2</button>
          <button onClick={append} className='btn_calc calc_3' id="calc_3">3</button>
          <button onClick={append} className='btn_calc calc_plus' id="calc_plus">+</button>
        </div>

        <div className='calc_row'>
          <button onClick={append} className='btn_calc calc_0' id="calc_0">0</button>
          <button onClick={appendDot} className='btn_calc calc_dot' id="calc_dot">.</button>
          <button onClick={append} className='btn_calc calc_eq' id="calc_eq">=</button>
        </div>

      </div>

          <h1 className='history'>History : </h1>
      <div className='calc_history' id='calc_history'>
      </div>
    </>
  )
}
