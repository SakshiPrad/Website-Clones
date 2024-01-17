let bagItems;
let wishListItems;
onLoad();


function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
        
    let wishItemsStr = localStorage.getItem('wishListItems');
    wishListItems = bagItemsStr ? JSON.parse(wishItemsStr) : [];

    displayItemsOnHomePage();
    displayBagIcon();
}



function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function addToWishList(itemId){
    wishListItems.push(itemId);
    localStorage.setItem('wishListItems',JSON.stringify(wishListItems));
    console.log(wishListItems)
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        console.log('I am here');
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}


function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items_container');
    if (!itemsContainerElement) {
        return;
    }
    let innerHtml = '';
    items.forEach(item => {
        innerHtml += `
        <div class="item-container">
            <img class="item-image" src="${item.item_image}" alt="item image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
            </div>
            <div class="company-name">${item.company_name}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount">(Rs.${item.discount} OFF)</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
            <div>
            <button class="btn-add-bag" onclick="addToWishList(${item.id})"><i class="fa-regular fa-heart"></i> WISHLIST</button>
            </div>
        </div>`
    });
    
    itemsContainerElement.innerText = 'HEllo';
    itemsContainerElement.innerHTML = innerHtml;
    }

   
   