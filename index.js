import express from "express";
import cors from "cors";
import fs from "fs";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());



app.get('/rankings/pong-plus', (req, res) => {
    fs.readFile("./rankings/pong-plus.json", (error, data) => {
        if (error) console.log("There was an error while reading.");
        else {
            res.send(JSON.parse(data));
        }
    });
});

app.put('/rankings/pong-plus', (req, res) => {
    fs.writeFile("./rankings/pong-plus.json", JSON.stringify(req.body), (error) => {
        if(error) console.log("There was an error while reading");
    });
    res.end();
});



app.listen(port, () => {
    console.log(`Executing on http://localhost:${port}`)
});