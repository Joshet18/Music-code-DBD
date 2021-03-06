const dbd = require("dbd.js");
 
const bot = new dbd.Bot({
token: "Tu Token", 
prefix: "!"
})
 
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: commands.aliases,
code: command.code
})
} 
}

bot.status({
    text: "Despacito Luiz Fonsi┃!help and !play",
    type: "LISTENING",
    time: 12
})

bot.status({
    text: "¡¡$serverCount Servidores!!",
    type: "WATCHING",
    time: 12
})

bot.onMessageDelete()

bot.variables({
  VariableName: "0",
  VariableName2: "0"
})

const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: '',
    title: 'NAME',
    interval: 2 // minutes
});
 
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error)); 
