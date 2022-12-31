const Discord = require('discord.js');

module.exports = {
    name: "unmute",
    alias: [],
    async execute (client, message, args) {

        if(!message.member.permissions.has("ManageRoles")) return message.reply("No tienes permisos.")
        if(!message.guild.members.me.permissions.has("ManageRoles")) return message.reply("No tengo permisos.")

        let user = message.mentions.members.first()
        if(!user) return message.reply("Debes especificar a un usuario.")

        if(!user.isCommunicationDisabled()) return message.reply("Ese usuario no estaba muteado.")

        await user.timeout(null)

        message.reply(`${user} fue desmuteado por ${message.author}`)

    }

}