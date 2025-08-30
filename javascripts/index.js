


let bagItems = [];

function addToBag(itemId) {
    bagItems.push(itemId);
    displayBagItemCount();
}

function displayBagItemCount() {
    const bagItemCountElement = document.querySelector(".bag-item-count");

    if (bagItems.length > 0) {
        bagItemCountElement.innerText = bagItems.length;
        bagItemCountElement.style.visibility = "visible";
    } else {
        bagItemCountElement.style.visibility = "hidden";
    }
}

function homePageDisplayItem() {
    const itemContainerElement = document.querySelector(".items-container");
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

    itemContainerElement.innerHTML = innerHTML;
}

// Initial render
homePageDisplayItem();
displayBagItemCount();
