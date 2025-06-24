const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('commands')// Command name
        .setDescription('Show all the commands'),// Description
    async execute(interaction){
        try{
            // Mostrar los comandos disponibles
            await interaction.reply('**Comandos disponibles🎋🐼:**\n\n' +
                '`/hola` - PandaBot te saluda y atiende por privado!\n' +
                '`/meme` - Muestra un meme aleatorio!\n' +
                '`/frase` - Muestra frases inspiradoras!\n' +
                '`/game` - Juega juegos!\n' +
                '`/install` - Muestra enlaces a juegos!\n' + 
                '`/clima` - Te dice el clima de cualquier lugar!\n'+
                '`/music_ai` - Recomienda playlist!\n' +
                '`/pandai` - Llama a la AI!\n');
        }
        catch(error){
            console.error('Error en el comando /commands:', error);
            await interaction.reply('❌ ¡Vaya! Hubo un error. Inténtalo de nuevo más tarde.');
        }
    }
}