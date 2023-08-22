
function getCalculationInnerText(id){
    const total = parseFloat(document.getElementById(id).innerText);
    return total;
}

function InnerText(id, value){
    document.getElementById(id).innerText = value;

}

 function handleClick(target){
      
      const price =  parseFloat(target.childNodes[3].innerText.split(' ')[0]);
      const totalPrice = getCalculationInnerText('totalPrice');
      const sumPriceAndTotalPrice = price + totalPrice;
       
      InnerText('totalPrice', sumPriceAndTotalPrice.toFixed(2))
      InnerText('total', sumPriceAndTotalPrice.toFixed(2))
    if(sumPriceAndTotalPrice>0){
        document.getElementById('Purchase-button').removeAttribute('disabled', 'true')
    }
    if(sumPriceAndTotalPrice>=200){
        document.getElementById('coupon-button').removeAttribute('disabled', 'true')
     }
     const li = document.createElement('li');
    li.innerText = target.childNodes[1].innerText;
    const ul = document.getElementById('List');
    ul.appendChild(li)
 }


 function couponBtn(){
    const  couponInput = document.getElementById('coupon').value ;
    if(couponInput === 'SELL200'){
        const totalPrice =  getCalculationInnerText('totalPrice');
        const discount = (totalPrice * 20 ) / 100;
        InnerText('discountBlance', discount.toFixed(2))
        const total = getCalculationInnerText('totalPrice');
        const nowTotal  = total - discount;
        InnerText('total', nowTotal.toFixed(2))
        document.getElementById('coupon').value = ''
    }else{
        alert('invlid coupoon')
    }
 }

function goHome(){
    window.location.href = 'index.html'
}