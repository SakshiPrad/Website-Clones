let  wishItemObject ;

// let wishItemsStr = localStorage.getItem('wishListItems');
// wishListItems = wishItemsStr ? JSON.parse(wishItemsStr) : [];
    
loadwishItemObjects();
displayWishListItems();
removeFromBag();

console.log(wishListItems);
// let wishListElement = document.getElementsByName('.wishListContainer');

function loadwishItemObjects(){
    console.log(wishListItems);
    wishItemObject = wishListItems.map(Item_Id => {
      for ( let i = 0; i < items.length; i++ ){
        if (Item_Id == items[i].id){
            return items[i];
        }
      }
    });
    console.log(wishItemObject);
  } 

function removeFromBag(itemId){
    wishListItems = wishListItems.filter(wishItemId => wishItemId != itemId)
    localStorage.setItem('wishListItems',JSON.stringify(wishListItems));
    loadwishItemObjects();
    displayWishListItems();

}

function displayWishListItems(){
    if(wishListItems.length == 0){
        let containerElement = document.querySelector('.wishListContainer');
        containerElement.innerHTML = `<div class="no-item">No Item</div>`;
    }
    else{
    let containerElement = document.querySelector('.wishListContainer');
    let innerHTML = '';
    wishItemObject.forEach(wishItemId => {
      innerHTML += generateitemHTML(wishItemId);
    });
    containerElement.innerHTML = innerHTML;
  }}

function generateitemHTML(item){
    return `<div class="wishListItems">
<div class="bag-item-container">
    <div class="item-left-part">
        <img class="bag-item-img" src="../${item.item_image}">
    </div>
    <div class="item-right-part">
        <div class="company">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
            <span class="current-price">Rs.${item.current_price}</span>
            <span class="original-price">Rs.${item.original_price}</span>
            <span class="discount-percentage">(Rs.${item.discount} OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    
        <button class="remove-from-wishList" onclick="removeFromBag(${item.id});"><i class="fa-solid fa-trash-can"></i>
        </button>
</div>
    </div>
</div>
</div>`;
}