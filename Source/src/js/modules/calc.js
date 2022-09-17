const calc = (size, material, options, promocode, result) => {
   const sizeBlock = document.querySelector(size),
         materialBlock = document.querySelector(material),
         optionsBlock = document.querySelector(options),
         promocodeBlock = document.querySelector(promocode),
         resultBlock = document.querySelector(result);

   let sum = 0;

   const calcFuntion = () => {
      sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
      
      if (sizeBlock.value == '' || materialBlock.value == '') {
         resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
      } else if (promocodeBlock.value === 'IWANTPOPART') {
         resultBlock.textContent = Math.round(sum * 0.7);
      } else {
         resultBlock.textContent = sum;
      }
   };

   sizeBlock.addEventListener('change', calcFuntion);
   materialBlock.addEventListener('change', calcFuntion);
   optionsBlock.addEventListener('change', calcFuntion);
   promocodeBlock.addEventListener('input', calcFuntion);
};

export default calc;