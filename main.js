
// favorite


let liked = document.querySelector("#fav")

document.querySelectorAll(".favorite").forEach(liked => {

        liked.addEventListener('click', function(){
            liked.classList.toggle("liked-btn")

        } )
})


// remove product


document.querySelectorAll(".remove").forEach(removebtn => 
    removebtn.addEventListener("click", removeProduct))

    function removeProduct() {

        this.parentElement.parentElement.removeChild(this.parentElement); 
    }

// =======================================================


// ITEM CALCULATE


document.querySelectorAll(".quantity-range, .quantity-range2, .quantity-range3").forEach(qty => {
    qty.addEventListener("change", function(){

        let price = document.querySelector(".price").innerHTML;
        let price2 = document.querySelector(".price2").innerHTML;
        let price3 = document.querySelector(".price3").innerHTML;
        let quantity = parseFloat(document.querySelector("#quantity-range").value);
        let quantity2 = parseFloat(document.querySelector("#quantity-range2").value);
        let quantity3 = parseFloat(document.querySelector("#quantity-range3").value);
        let sum = price * quantity;
        let sum2 = price2 * quantity2;
        let sum3 = price3 * quantity3;

        let total = sum + sum2 + sum3;

        document.querySelector("#subtotal").innerHTML = sum;
        document.querySelector("#subtotal2").innerHTML = sum2;
        document.querySelector("#subtotal3").innerHTML = sum3;

        document.querySelector("#total-price").innerHTML = total;


        


    })
})


