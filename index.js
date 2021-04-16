require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();

const fetch = require('node-fetch');

client.login(process.env.token);
console.log('chacha');

client.on('ready', () => {
    console.log('readoisos');
})

client.on('message', async(msg) => {
    let tokens = msg.content.split(' ');
    if (tokens[0] === '&ping') {
        msg.reply('pong!!');
        msg.channel.send('PONGG!!!');
    } else if (tokens[0] == '&gif') {
        keyword = 'cat';
        if (tokens.length > 1) {
            keyword = tokens.slice(1, tokens.length).join(" ");
        }
        let url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${process.env.gifkey}&limit=1`
        let response = await fetch(url);
        let jsony = await response.json();
        //console.log(jsony);
        let imgs = jsony.data[0].images;
        console.log(imgs.original.url);
        msg.channel.send(imgs.original.url);

    }

})