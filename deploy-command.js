const {REST, Routes} = require('discord.js');
const {token, clientId} = require('./config.json');

// Todos los comandos a registrar
const commands = [
    {
        name:'commands',
        description:'Muestra todos los comandos',
    },
    {
        name: 'hola',
        description: 'Saluda a Pandabot',
    },
    {
        name: 'meme',
        description: 'Muestra un meme aleatorio',
    },
    {
        name: 'frase',
        description: 'Muestra frases inspiradoras',
    },
    {
        name: 'game',
        description: 'Play games!',
        options: [
            {
                type: 3, // Tipo STRING
                name: 'game',
                description: 'Selecciona un juego',
                required: true,
                choices: [
                    { name: 'Make It Meme', value: 'makeitmeme' },
                    { name: 'Bomb Party', value: 'bombparty' },
                    { name:'Gartic Phone', value: 'garticphone' },
                ]
            }
        ]
    },
    {
        name:'clima',
        description:'Muestra el clima de una ciudad',
        options:[
            {
                type:3,
                name:'ciudad',
                description:'Nombre de la ciudad',
                required:true
            }
        ]
    },
    {
        name:'install',
        description:"Show links to games",
        options:[{
            type:3,
            name:'option',
            description:'Selecciona un juego',
            required:true,
            choices:[
                {name:'Minecraft', value:'minecraft'},
                {name:'Valorant', value:'valorant'},
                {name:'League of Legend', value:'leagueoflegend'}
            ]
        }]
    }
];

// Crear y configurar instancia REST
const rest = new REST({version: '10'}).setToken(token);

// Registrar comandos
(async () => {
    try {
        console.log('⌛ Registrando comandos...');
        
        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands }
        );
        
        console.log('✅ Comandos registrados exitosamente!');
        console.log('📜 Lista de comandos:');
        commands.forEach(cmd => {
            console.log(`- /${cmd.name}: ${cmd.description}`);
        });
        
    } catch (error) {
        console.error('❌ Error al registrar comandos:', error);
        
        // Detalles del error para debugging
        if (error.response) {
            console.error('Detalles del error:', {
                status: error.response.status,
                data: error.response.data
            });
        }
    }
})();