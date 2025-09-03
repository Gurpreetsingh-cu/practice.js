
let bagItems = [];
onLoad();
    function onLoad(){
        let bagItemsStr = localStorage.getItem('bagItems');
        bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
        homePageDisplayItem();
        displayBagItemCount();
    }
function addToBag(itemId) {
    bagItems.push(itemId);
    displayBagItemCount();
    localStorage.setItem('bagItems' , JSON.stringify(bagItems))
}

function displayBagItemCount() {
    const bagItemCount = document.querySelector(".bag-item-count");

    if (bagItems.length > 0) {                                                                                 
        bagItemCount.innerText = bagItems.length;
        bagItemCount.style.visibility = "visible";
    } else {
        bagItemCount.style.visibility = "hidden";
    }
}
function homePageDisplayItem() {
   itemContainer = document.querySelector(".items-container");
//    if(!itemsContainer){ 
//     return;
//    }
    let innerHTML = '';

    items.forEach(item => {
        innerHTML += `
            <div class="item-container">
                <img class="item-image" src="${item.image}" alt="image one">
                <div class="rating">
                    ${item.rating.stars}
                    <div class="count">${item.rating.count} reviews</div>
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">$${item.current_price}</span><br>
                    <span class="original-price">$${item.original_price}</span><br>
                    <span class="discount">${item.discount_percentage}% Discount</span>
                </div>
                <div class="btn-add-bag" onclick="addToBag(${item.id})">Add to bag</div>
            </div>
        `;
    });

    itemContainer.innerHTML = "innerHTML";
}


