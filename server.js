const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());

app.post('/addUser', function write(req, res) {
    // BELOW LINE IS USED TO READ THE FILE.
    const users = require('./users.json');
    users.push(req.body);

    fs.writeFile('./users.json', JSON.stringify(users), (err) => {
        if(err) {
            // console.log('error = ', err);
        }
    });

    // BELOW LINE IS USED TO SEND THE RESPONSE TO THE BROWSER.
    res.status(200).json(users);
})

app.get('/users', (req, res) => {
    // console.log('get method called');
    let response;
    fs.readFile('users.json', function read(err, data) {
        if(err) {
            throw err;
        } else {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            // console.log(JSON.stringify(JSON.parse(data)));
            res.send(JSON.stringify(JSON.parse(data)));
        }
    });    
})

app.delete('/deleteUser', (req, res) => {
    // console.log('delete user request received', (parseInt(req.body.id)));
    let id = Number.parseInt(req.body.id);
    let data = readFile();
    // let indexOfElement = data.indexOf(req.body.id);
    // let details = searchAndDeleteItem(id, data);
    let details = searchItem(id, data);
    if (details.index > -1) {
        data = deleteItem(details.index, data);

        // fs.writeFile('./users.json', JSON.stringify(data), (err) => {
        //     if(err) {
        //         console.log('error = ', err);
        //     }
        // });
    }
    // console.log('data = ', data);
    res.json(details);
})

function searchItem(key, array) {
    let data = {};
    let flag = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === key) {
            data['status'] = 'Item found and deleted';
            data['index'] = i;
            flag = true;
            return data;
        }
    }

    if (flag === false) {
        data['status'] = 'Item not found';
        data['index'] = -1;
        return data;
    }
}

function deleteItem(index, array) {
    array.splice(index, 1);
    return array;
}

function readFile() {
    return require('./users.json');
}

function writeFile(data) {
    fs.writeFile('./users.json', JSON.stringify(data), (err) => {
        if(err) {
            // console.log('error = ', err);
        }
    });
    // BELOW LINE IS USED TO SEND THE RESPONSE TO THE BROWSER.
    res.status(200).json(users);
}

app.listen(3000, () => {
    // console.log('Running on 3000');
})
