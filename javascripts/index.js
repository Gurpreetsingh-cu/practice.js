

let itemcontainerElement = document.querySelector(".item-container");


let item = {
    item_image : 'images/1.jpg',

    rating:{
        star:4.5,
        noOfReviews:  1400,
    },
    company_name:'Carlton London',
    item_name:'Rhodium-plated CZ Floral studs',
    current_price :606,
    original_price:1045,
    discount_price:42,

}


itemcontainerElement.innerHTML =`

<div class="items-container">
           <div class="item-container">
            <img class ="item-image" src="${item.item_image}" alt="image one">
            <div class="rating">
               ${item.rating}
            </div>
            <div class="company-name">${item.company_name }n</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">${item.current_price}</span>
                <span class="orignal price">${item.original_price}</span>
                <span class="Discount">{item.discount_price}</span>
            </div>
            <div class="btn-add-bag ">Add to bag</div>


           </div>`