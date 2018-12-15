const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";
const snekfetch = require("snekfetch");

client.on('ready', () => {
    console.log('I am ready!');
});


const devs1 = ["288368249194938368"];

client.on('message', message => {
    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'setStreaming')) {
      if (!devs1.includes(message.author.id)) return message.channel.send("<@288368249194938368> only this guy can do restart the bot so don't try again :wink:.");
      message.delete();
       
      client.user.setGame(argresult, 'https://twitch.tv/DynastyShop');

    } else if(message.content.startsWith(prefix + 'setWatching')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});
message.reply(`Done changed to ${argresult}`)
      } else if(message.content.startsWith(prefix + 'setListening')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});
message.reply(`Done changed to ${argresult}`)
      } else if(message.content.startsWith(prefix + 'setPlaying')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});
message.reply(`Done changed to ${argresult}`)
      } else if(message.content.startsWith(prefix + 'setName')) {
        client.user.setUsername(argresult);
message.reply(`Done changed to ${argresult}`)
      } else if(message.content.startsWith(prefix + 'setAvatar')) {
        client.user.setAvatar(argresult);
message.reply(`Done changed to ${argresult}`)

      } else if(message.content.startsWith(prefix + 'setStatus')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
        client.user.setStatus(argresult);
message.reply(`Done changed to ${argresult}`)

    }

  })
 
  client.login(process.env.TOKEN);
