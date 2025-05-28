// Requirements of discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./.gitignore/config.json');

// Creating a new client instance
const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, (client) => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});

// Importing and registering the commands from subfolders
const fs = require('fs');
const path = require('path');

client.commands = new Map();
const commandsPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(commandsPath);

for (const folder of commandFolders) {
    const folderPath = path.join(commandsPath, folder);
    const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
        const filePath = path.join(folderPath, file);
        const command = require(filePath);
        
        // Verify the command has the required properties
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing required "data" or "execute" property.`);
        }
    }
}

// Handle interactions (slash commands)
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: '❌ ¡Hubo un error al ejecutar el comando!', ephemeral: true });
    }
});

client.login(token);