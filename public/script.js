const showTeams = async() => {
    const teamsJSON = await getTeams();
    const teamsDiv = document.getElementById("teams-div");

    if (teamsJSON == "") {
        console.log("Invalid load of json");
        return;
    }

    teamsJSON.forEach((teams) => {
        const section = document.createElement("section");
        teamsDiv.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = teams.name;
        section.append(h3);

        const img = document.createElement("img");
        img.src = "http://localhost:3000/" + teams.img;
        section.append(img);
        let ul = document.createElement("ul");
        section.append(ul);
        ul.append(getLi(`Point Guard: ${teams.pg}`));
        ul.append(getLi(`Shooting Guard: ${teams.sg}`));
        ul.append(getLi(`Small Forward: ${teams.sf}`));
        ul.append(getLi(`Power Forward: ${teams.pf}`));
        ul.append(getLi(`Center: ${teams.c}`));
  
  
    return section;
    });

}

const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
  };

const getTeams = async() => {
    try {
        return (await fetch("http://localhost:3000/api/teams")).json();
    } catch (error) {
        console.log("error retrieving json");
        return "";
    }
}

window.onload = () => showTeams();