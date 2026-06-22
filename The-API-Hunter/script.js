const singleModeBtn = document.getElementById("singleModeBtn");
const battleModeBtn = document.getElementById("battleModeBtn");

const singleSearch = document.querySelector(".single-search");
const battleSearch = document.querySelector(".battle-search");

const usernameInput = document.getElementById("usernameInput");
const searchBtn = document.getElementById("searchBtn");

const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");
const battleBtn = document.getElementById("battleBtn");

const loading = document.querySelector(".loading");
const error = document.querySelector(".error");

const profileCard = document.querySelector(".profile-card");
const avatar = document.querySelector(".avatar");
const nameEl = document.querySelector(".name");
const bioEl = document.querySelector(".bio");
const joinedDate = document.querySelector(".joined-date");
const portfolio = document.querySelector(".portfolio");

const repoSection = document.querySelector(".repo-section");
const repoList = document.querySelector(".repo-list");

const battleResult = document.querySelector(".battle-result");

const winnerAvatar = document.querySelector(".winner-avatar");
const winnerName = document.querySelector(".winner-name");
const winnerStars = document.querySelector(".winner-stars");

const loserAvatar = document.querySelector(".loser-avatar");
const loserName = document.querySelector(".loser-name");
const loserStars = document.querySelector(".loser-stars");


// TOGGLE

singleModeBtn.addEventListener("click", () => {
    singleSearch.classList.remove("hidden");
    battleSearch.classList.add("hidden");

    battleResult.classList.add("hidden");
    profileCard.classList.add("hidden");
    repoSection.classList.add("hidden");
    error.classList.add("hidden");
});

battleModeBtn.addEventListener("click", () => {
    battleSearch.classList.remove("hidden");
    singleSearch.classList.add("hidden");

    profileCard.classList.add("hidden");
    repoSection.classList.add("hidden");
    battleResult.classList.add("hidden");
    error.classList.add("hidden");
});



// Search User, Latest Repos


searchBtn.addEventListener("click", () => {

    const username = usernameInput.value.trim();

    if (username === "") return;

    getUser(username);

});


async function getUser(username) {

    loading.classList.remove("hidden");
    error.classList.add("hidden");
    profileCard.classList.add("hidden");
    repoSection.classList.add("hidden");

    try {

        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
            throw new Error("User not found");
        }

        const data = await response.json();

        displayUser(data);

        const repoResponse = await fetch(
            `https://api.github.com/users/${username}/repos?sort=created&per_page=5`
        );

        const repos = await repoResponse.json();

        displayRepos(repos);

    } catch (err) {

        error.classList.remove("hidden");

    } finally {

        loading.classList.add("hidden");

    }
}


// DISPLAY USER

function displayUser(data) {

    profileCard.classList.remove("hidden");

    avatar.src = data.avatar_url;

    nameEl.textContent = data.name || data.login;

    bioEl.textContent = data.bio || "No bio available";

    joinedDate.textContent =
        "Joined : " +
        new Date(data.created_at).toDateString();

    if (data.blog) {
        portfolio.href = data.blog;
        portfolio.textContent = "Visit Portfolio";
    } else {
        portfolio.href = "#";
        portfolio.textContent = "No Portfolio";
    }

}


// DISPLAY REPOS

function displayRepos(repos) {

    repoSection.classList.remove("hidden");

    repoList.innerHTML = "";

    repos.forEach(repo => {

        const repoLink = document.createElement("a");

        repoLink.href = repo.html_url;
        repoLink.target = "_blank";

        repoLink.textContent =
            `${repo.name} ⭐ ${repo.stargazers_count}`;

        repoList.appendChild(repoLink);

    });

}

// Battle

battleBtn.addEventListener("click", () => {

    const player1 = player1Input.value.trim();
    const player2 = player2Input.value.trim();

    if (player1 === "" || player2 === "") return;

    battleUsers(player1, player2);

});


async function battleUsers(player1, player2) {

    loading.classList.remove("hidden");
    error.classList.add("hidden");
    battleResult.classList.add("hidden");

    try {

        const [
            user1Response,
            user2Response,
            repo1Response,
            repo2Response
        ] = await Promise.all([
            fetch(`https://api.github.com/users/${player1}`),
            fetch(`https://api.github.com/users/${player2}`),
            fetch(`https://api.github.com/users/${player1}/repos?per_page=100`),
            fetch(`https://api.github.com/users/${player2}/repos?per_page=100`)
        ]);

        if (
            !user1Response.ok ||
            !user2Response.ok
        ) {
            throw new Error("User not found");
        }

        const user1 = await user1Response.json();
        const user2 = await user2Response.json();

        const repos1 = await repo1Response.json();
        const repos2 = await repo2Response.json();

        const totalStars1 = repos1.reduce(
            (sum, repo) => sum + repo.stargazers_count,
            0
        );

        const totalStars2 = repos2.reduce(
            (sum, repo) => sum + repo.stargazers_count,
            0
        );


        if (totalStars1 >= totalStars2) {

            renderBattle(
                user1,
                totalStars1,
                user2,
                totalStars2
            );

        } else {

            renderBattle(
                user2,
                totalStars2,
                user1,
                totalStars1
            );

        }

    } catch (err) {

        error.classList.remove("hidden");

    } finally {

        loading.classList.add("hidden");

    }

}


// BATTLE RESULT

function renderBattle(winner, winnerTotalStars, loser, loserTotalStars) {

    battleResult.classList.remove("hidden");

    winnerAvatar.src = winner.avatar_url;
    winnerName.textContent = winner.name || winner.login;
    winnerStars.textContent =
        `Total Stars : ${winnerTotalStars}`;

    loserAvatar.src = loser.avatar_url;
    loserName.textContent = loser.name || loser.login;
    loserStars.textContent =
        `Total Stars : ${loserTotalStars}`;

}


usernameInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        searchBtn.click();
    }

});

player1Input.addEventListener("keypress", (e) => {

    if (
        e.key === "Enter" &&
        player2Input.value.trim() !== ""
    ) {
        battleBtn.click();
    }

});

player2Input.addEventListener("keypress", (e) => {

    if (
        e.key === "Enter" &&
        player1Input.value.trim() !== ""
    ) {
        battleBtn.click();
    }

});