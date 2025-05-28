const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hola')
        .setDescription('¡hola!'),
    async execute(interaction){
        await interaction.reply('Hola soy Pandabot, ¿cómo estás?🎋🐼');
    }
};

