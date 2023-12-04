const express = require('express')
const app = express()
const port = 3000

const db = require('./db')

app.get('/', async (req,res) =>{
    try{
        await db('people').insert({name: 'FullCycle User ' + Math.floor(Math.random() * 99)})
        const people = await db.select().from('people')
        res.send("<h1>Full Cycle Rocks!</h1>" + toTable(people))
    } catch (e){
        res.send("<h1>Não foi possível conectar no banco de dados</h1>")
        console.log("Não foi possivel conectar no banco de dados", e.message)
    }
})

app.listen(port, () => {
    console.log("Servidor na porta => "+ port)
})


function toTable(list){
    let html = '<table class="table table-striped">';
    let keys = Object.keys(list[0])

    html += '<tr>';
    keys.map( (name) => html += '<th>'+name+'</th>');
    html += '</tr>';

    list.map((row) =>{
        html += '<tr>';
        keys.map( (key) => html += '<td>'+row[key]+'</td>');
        html += '</tr>';
    })
    
    html += '</table>';

    return html;
}