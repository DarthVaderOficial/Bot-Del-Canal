const Discord = require('discord.js');

module.exports = {
    name: "ban",
    alias: ["banear"],
    async execute (client, message, args) {

        let perms = message.member.permissions.has("BanMembers")
        if(!perms) return message.reply("No tienes los permisos requeridos para ejecutar este comando.")

        let permsBot = message.guild.members.me.permissions.has("BanMembers")
        if(!permsBot) return message.reply("No tengo permisos para poder ejecutar este comando de manera correcta.")

        let usuario = message.mentions.members.first()
        if(!usuario) return message.reply("Debes especificar el usuario que quieres banear")

        let razon = args.slice(1).join(" ")
        if(!razon){
            razon = "No Especificada"
        }

        usuario.ban({reason: razon})

        const embed = new Discord.EmbedBuilder()
        .setTitle("Usuario baneado")
        .setDescription(`Usuario: ${usuario.user.tag}\n\nRazón: ${razon}\n\nModerador: ${message.author.tag}`)
        .setColor("Red")

        message.reply({embeds: [embed]})

    }

}