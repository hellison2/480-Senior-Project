let itemIndex = 1;
showItems(itemIndex);

function plusItems(n) {
    showItems(itemIndex += n);
}

function currentItem(n) {
    showItems(itemIndex = n);
}

function showItems(n) {
    let i;
    let items = document.getElementsByClassName("items");
    if (n > items.length) {itemIndex = 1}
    if (n < 1) {itemIndex = items.length}
    for (i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
    
    items[itemIndex-1].style.display = "block";
}