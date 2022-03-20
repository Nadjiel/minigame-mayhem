let ranking;

function showRanking() {
    const rankingTableBody = rankingEl.querySelector("#ranking-values tbody");
    const oldTrs = rankingTableBody.children;
    console.log(oldTrs)
    while(oldTrs.length > 0) {
        rankingTableBody.removeChild(oldTrs[0]);
    }
    ranking.forEach((person, i) => {
        const tr = document.createElement("tr");
        rankingTableBody.appendChild(tr);
        const colocationTd = document.createElement("td");
        colocationTd.innerText = i + 1;
        tr.appendChild(colocationTd);
        const nameTd = document.createElement("td");
        nameTd.innerText = person.name;
        tr.appendChild(nameTd);
        const scoreTd = document.createElement("td");
        scoreTd.innerText = person.score;
        tr.appendChild(scoreTd);
    });
}

function addScore(playerToAdd) {
    for(let i = 0; i < ranking.length; i++) {
        if(playerToAdd.score < ranking[i].score) {
            if(i == ranking.length - 1 && ranking.length < 10) {
                ranking.push(playerToAdd);
                return;
            }
        }
        else {
            ranking.splice(i, 0, playerToAdd);
            if(ranking.length > 10) ranking.splice(10, ranking.length - 10);
            return;
        }
    }
    if(ranking.length == 0) ranking.push(playerToAdd);
}

function sendRanking() {
    fetch("http://localhost:3000/rankings/pong-plus", {
        method: "PUT",
        body: JSON.stringify(ranking),
        headers: {
            "Content-type": "application/json"
        }
    });
}



fetch("http://localhost:3000/rankings/pong-plus")
    .then(res => res.json())
    .then(jsonRes => {
        ranking = jsonRes;
        console.log("ranking", ranking);
        showRanking();
    });