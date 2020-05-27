const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzEzMjc5NjczMzkxNjQ0NzMz.Xsd54g.Jg68Qdh5TuTdQUSFcARXs5LHvCU';

const prefix = '!';

const author = 'Anirudh G.'
const version = 'Version 1.0.0'
const purpose = 'First Test'

bot.on('ready', ()=>{
    console.log('Bot is online');
})

bot.on('message', text=>{
    
    let args = text.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'ping':
            text.reply('yuh');
            break;
        case 'info':
        case 'Info': 
            const embed = new Discord.MessageEmbed() 
            .setTitle('Bot Info')
            .addField('Author', author, true)//Add true to certain items to group them all on the same line
            .addField('Version', version, true)
            .addField('Server', text.guild.name)//text.guild.name returns the name of the server
            .addField('Purpose', purpose)
            .setColor(0xFF0000)
            .setThumbnail(text.author.avatarURL)//Command is not working rn
            text.channel.send(embed);
            break;
        case 'clear':
            text.channel.bulkDelete(100);//100 is the max value
            break;
        case 'poll':
            if(!args[1]){
                text.channel.send('Enter in a question to poll');//If the user doesn't type in a question this message will display
            }

            let quest = args.slice(1).join(" ");//Isolates the question and stores it in quest

            text.channel.send("**" + quest + "**").then(options => {//** bolds the question in discord */
                options.react("✅");//Displays the reaction icons 
                options.react("❌");
            });
            break;
    }
})

bot.login(token);