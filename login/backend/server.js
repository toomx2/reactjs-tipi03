const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cadastro_pessoas"
});

// CREATE

app.post("/cadastrar", (req, res) => {
    const sql = "INSERT INTO cadastro(name, email, password) VALUES(?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    database.query(sql, [values], (err, data) => {
        if(err) {
            console.error(err);
            return res.status(500).json({ err: "Erro ao Cadastrar." })
        }

        return res.json(data);
    });
});

//READ
app.post("/login", (req, res) => {
    const sql = "SELECT * FROM cadastro WHERE email = ? AND password = ?";

    database.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
            console.error(err);
            return res.status(500).json({ err: "Erro ao Cadastrar." })
        }

        if(data.length > 0){
            return res.json("Login realizado com sucesso");
        } else {
            return res.json("Falha no login");
        }
    });
});


app.listen(7006, () => {
    console.log("Conectado ao Banco de Dados!");
});
