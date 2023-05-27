(function () {
        async function random_name() {
            let id = Math.floor(Math.random() * 738);
            let response = await fetch(`https://swapi.dev/api/people/${id}`);
            let data = await response.json();
            return data.name;
        }

        let loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let inputtag = document.getElementById("InputTag");
            if (inputtag.value === "") {
            } else {
                let existingEntries = JSON.parse(localStorage.getItem("tags"));
                if (existingEntries == null) existingEntries = [];
                let entry = {
                    "number": Math.floor(100000 + Math.random() * 900000),
                    "user": inputtag.value
                };
                existingEntries.push(entry);
                localStorage.setItem('tags', JSON.stringify(existingEntries));
                window.location = '/';
            }
        });
    })();