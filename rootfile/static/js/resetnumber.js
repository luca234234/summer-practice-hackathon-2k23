(function () {
  window.setInterval(function(){
    let time = Math.floor(Date.now() / 1000);
    let time_left = 30-(time - Math.floor(time/30)*30);
    document.getElementById('timer').innerHTML = time_left.toString();
    if(time_left === 30){
        let existingEntries = JSON.parse(localStorage.getItem("tags"));
        if(existingEntries !== null) {
            let numbers = document.getElementsByClassName('number-code');
            for(const [i, item] of existingEntries.entries()){
                let code = Math.floor(100000 + Math.random() * 900000);
                item.number = code;
                numbers[i].innerHTML = code.toString();
            }
        }
        localStorage.setItem('tags', JSON.stringify(existingEntries));
    }

  }, 1000);
})();