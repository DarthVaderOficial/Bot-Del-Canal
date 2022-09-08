const Discord = require('discord.js') // Definimos Discord
const { Client, GatewayIntentBits, Partials } = require('discord.js')
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages],
    partials: [Partials.Channel, Partials.Message]
}); // Definición del cliente

client.on('ready', () => {
    console.log("El bot esta listo.") // La consola te dará un mensaje cuando el bot este encendido
}); // Evento ready

client.on('messageCreate', async (message) => {

    let prefix = "El-Prefix-Que-Quieras" // El prefix del bot

    if(message.author.bot) return; // Si el autor del mensaje es un bot, que retorne
    if(message.channel.type === "DM") return; // Si el canal es un DM, pues que retorne
    if(!message.content.startsWith(prefix)) return; // Si el mensaje no inicia con el prefix, pues retorne

    const args = message.content.slice(prefix.length).trim().split(/ +/g); // Definición de args
    const command = args.shift().toLowerCase(); // Definición de command

    if(command === "test"){
        message.channel.send("Este es un comando de testeo.") // Si el comando es igual a test pues que responda con este mensaje
    }

    if(command === "say"){
        let mensaje = args.slice(0).join(" ") // Definimos el mensaje que enviará el bot
        if(!mensaje) return message.reply("Debes especificar un mensaje.") // Si no especifica un mensaje, pues retorne este mensaje

        message.delete() // Que se elimine el mensaje original

        message.channel.send(mensaje) // Finalmente que envie el mensaje que le especificaron anteriormente
    } // Si el comando es say pues haga algo

}); // Evento messageCreate

client.login("Tu-Token") // El token del bot, es una de las partes mas importantes