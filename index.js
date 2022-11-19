const Discord = require('discord.js')
const { Client, GatewayIntentBits, Partials } = require('discord.js')
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages],
    partials: [Partials.Channel, Partials.Message]
});
const fs = require('fs');

client.on('ready', () => {
    console.log("El bot esta listo.")
});

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

client.on('messageCreate', async (message) => {

    let prefix = "Tu-Prefix"

    if(message.author.bot) return;
    if(message.channel.type === "DM") return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.find(cmd => cmd.name === command || cmd.alias && cmd.alias.includes(command));
    if(cmd){
        cmd.execute(client, message, args)
    }

});

client.login(
    "Tu-Token"
)