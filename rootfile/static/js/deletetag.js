function removeCard(card, name) {
    let existingEntries = JSON.parse(localStorage.getItem("tags"));
    if(existingEntries !== null) {
        for(const [i, item] of existingEntries.entries()){
            if(item.user === name)existingEntries.splice(i, 1);

        }
    }
    localStorage.setItem('tags', JSON.stringify(existingEntries));
    card.closest(".card-row").remove();
}