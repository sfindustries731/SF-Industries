// =========================
// SF INDUSTRIES
// MAIN JAVASCRIPT
// =========================



// =========================
// GAME SEARCH
// =========================

const gameSearch = document.getElementById("gameSearch");
const games = document.querySelectorAll(".game-card");
const noGames = document.getElementById("noGames");


if (gameSearch) {

    gameSearch.addEventListener("input", function () {

        const searchText = gameSearch.value
            .toLowerCase()
            .trim();


        let foundGames = 0;


        games.forEach(function (game) {

            const gameName =
                game.getAttribute("data-game") || "";


            const gameContent =
                game.textContent || "";


            const searchData =
                (gameName + " " + gameContent)
                    .toLowerCase();


            if (searchData.includes(searchText)) {

                game.style.display = "";

                foundGames++;

            } else {

                game.style.display = "none";

            }

        });


        if (foundGames === 0) {

            if (noGames) {
                noGames.style.display = "block";
            }

        } else {

            if (noGames) {
                noGames.style.display = "none";
            }

        }

    });

}



// =========================
// APP SEARCH
// =========================

const appSearch = document.getElementById("appSearch");
const apps = document.querySelectorAll("#appsGrid .game-card");
const noApps = document.getElementById("noApps");


if (appSearch) {

    appSearch.addEventListener("input", function () {

        const searchText = appSearch.value
            .toLowerCase()
            .trim();


        let foundApps = 0;


        apps.forEach(function (app) {

            const appName =
                app.getAttribute("data-app") || "";


            const appContent =
                app.textContent || "";


            const searchData =
                (appName + " " + appContent)
                    .toLowerCase();


            if (searchData.includes(searchText)) {

                app.style.display = "";

                foundApps++;

            } else {

                app.style.display = "none";

            }

        });


        if (foundApps === 0) {

            if (noApps) {
                noApps.style.display = "block";
            }

        } else {

            if (noApps) {
                noApps.style.display = "none";
            }

        }

    });

}