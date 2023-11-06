const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.get("/api/teams", (req, res) => {
    const teams = [];
    teams[0] = {
        name: "Portland Trailblazers",
        pg: "Scoot Henderson",
        sg: "Shaedon Sharpe",
        sf: "Matisse Thybulle",
        pf: "Jerami Grant",
        c: "Deandre Ayton",
        img: "images/blazers.jpg"
    };
    teams[1] = {
        name: "Los Angeles Clippers",
        pg: "Russell Westbrook",
        sg: "Bones Hyland",
        sf: "Kawhi Leonard",
        pf: "Paul George",
        c: "Ivica Zubac",
        img: "images/clippers.jpg"
    };
    teams[2] = {
        name: "Miami Heat",
        pg: "Kyle Lowry",
        sg: "Tyler Herro",
        sf: "Jimmy Butler",
        pf: "Jamie Jaquez",
        c: "Bam Adebayo",
        img: "images/heat.jpg"
    };
    teams[3] = {
        name: "New York Knicks",
        pg: "Jalen Brunson",
        sg: "Josh Hart",
        sf: "Quenton Grimes",
        pf: "Julius Randle",
        c: "Mitchell Robinson",
        img: "images/knicks.jpg"
    };
    teams[4] = {
        name: "Los Angeles Lakers",
        pg: "Deangelo Russel",
        sg: "Austin Reaves",
        sf: "Cam Reddish",
        pf: "Lebron James",
        c: "Anthony Davis",
        img: "images/lakers.jpg"
    };
    teams[5] = {
        name: "Toronto Raptors",
        pg: "Dennis Schroeder",
        sg: "OG Anunoby",
        sf: "Scottie Barnes",
        pf: "Pascal Siakam",
        c: "Jakob Poeltl",
        img: "images/raptors.jpg"
    };

    res.json(teams);
});

app.listen(3000, () => {
    console.log("listening");
});