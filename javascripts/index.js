

let itemcontainerElement = document.querySelector(".items-container");

let innerHTML ='';
items.forEach( item=> {
    innerHTML += 
     `<div class="item-container">
    <img class ="item-image" src="${item.image}" alt="image one">
    <div class="rating">
       ${item.rating.stars}
    //    <div class = "count"</div>
    </div>
    <div class="company-name">${item.company }n</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">$${item.current_price}</span>
        <br>
        <span class="orignal price">${item.original_price}</span>
        <br>
        <span class="Discount">${item.discount_percentage}% Discount price </span>
    </div>
    <div class="btn-add-bag ">Add to bag</div>


   </div>
`
})




itemcontainerElement.innerHTML = innerHTML