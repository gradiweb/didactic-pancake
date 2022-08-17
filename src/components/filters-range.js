  const rangein = document.querySelectorAll(".range-in input");
  const pricein = document.querySelectorAll(".price-in input");
  const progress = document.querySelector('.slider-filter .pro');
  let priceGap = 0;

  rangein.forEach(input =>{
      input.addEventListener("input", e =>{
          let minVal = rangein[0].value,
          maxVal = rangein[1].value;
         if(maxVal - minVal < priceGap){
             if(e.target.className === "range-min"){
                  rangein[0].value = maxVal - priceGap;
             }else{
                  rangein[1].value = minVal + priceGap;
             }
         } else{
              pricein[0].value = minVal;
              pricein[1].value = maxVal;
              progress.style.left = (minVal / rangein[0].max) * 100 + "%";
              progress.style.right = 100 - (maxVal / rangein[1].max) * 100 + "%";
         }
      });
  });
