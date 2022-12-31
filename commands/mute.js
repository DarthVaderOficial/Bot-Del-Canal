const Discord = require('discord.js');
const ms = require("ms");

module.exports = {
    name: "mute",
    alias: [],
    async execute (client, message, args) {

        if(!message.member.permissions.has("ManageRoles")) return message.reply("No tienes permisos.")
        if(!message.guild.members.me.permissions.has("ManageRoles")) return message.reply("No tengo permisos.")

        let user = message.mentions.members.first()
        if(!user) return message.reply("Debes especificar a un usuario.")

        if(user.isCommunicationDisabled()) return message.reply("Ese usuario ya estaba muteado.")

        let time = args[1]
        if(!time) return message.reply("Debes especificar un tiempo.")

        let finalTime = ms(time)

        let reason = args.slice(2).join(" ")
        if(!reason){
            reason = "No Especificada"
        }

        await user.timeout(finalTime, reason)

        message.reply(`${user} fue muteado por ${message.author}`)

    }

}