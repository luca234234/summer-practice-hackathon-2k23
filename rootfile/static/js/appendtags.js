(function () {
    let main_div = document.getElementById("main")
    let existingEntries = JSON.parse(localStorage.getItem("tags"));
    if(existingEntries == null) existingEntries = [];
    for(const item of existingEntries){
        let card = `<div class="w-100 d-flex justify-content-center card-row"><div class="card mb-3 w-75" style="width: 18rem;">
              <div class="clearfix card-body">
                <div class="float-start">
                    <h5 class="card-title number-code">${item.number}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${item.user}</h6>
                </div>
                <div class="float-end">
                    <button type="button" class="btn p-0 border-0" style="margin-top: -10px;" onclick="removeCard(this, name='${item.user}')"><i class="bi bi-x-lg"></i></button>
                </div>
              </div>
            </div></div>`
        main_div.insertAdjacentHTML("beforeend", card);
    }
})();