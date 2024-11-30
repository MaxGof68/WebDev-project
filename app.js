const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/", (req, res) => {
res.sendFile('index.html', (err)=>{
    if (err)
        console.log(err);
});
});
app.listen(port, () => {
console.log(`myapp is listening on port ${port}!`);
});

app.post("/form", (req, res)=>{
    //process form data here
    console.log(req.body);
    const name = req.body.Name;
    const surname = req.body.Surname;
    const email = req.body.Email;
    const comments = req.body.Comments;
    res.json({name:name, surname:surname, email:email, comments:comments});
    });