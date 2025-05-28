const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('commands')// Command name
        .setDescription('Show all the commands'),// Description
    async execute(interaction){
        try{
            await interaction.reply('**Comandos disponibles🎋🐼:**\n\n' +
                '`/hola` - Saluda a Pandabot!\n' +
                '`/meme` - Muestra un meme aleatorio!\n' +
                '`/frase` - Muestra frases inspiradoras!\n' +
                '`/game` - Juega juegos!\n' +
                '`/install` - Muestra enlaces a juegos!\n' + 
                '`/clima` - Te dice el clima de cualquier lugar!');
        }
        catch(error){
            console.error('Error en el comando /commands:', error);
            await interaction.reply('❌ ¡Vaya! Hubo un error. Inténtalo de nuevo más tarde.');
        }
    }
}