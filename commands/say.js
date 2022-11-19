const Discord = require('discord.js');

module.exports = {
    name: "say",
    alias: ["decir"],
    async execute (client, message, args) {

        let mensaje = args.slice(0).join(" ") 
        if(!mensaje) return message.reply("Debes especificar un mensaje.") 

        message.delete()

        message.channel.send(mensaje)

    }
    
}