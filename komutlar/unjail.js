const Rochelle = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has('757611333129601074') && !message.member.hasPermission('ADMINSTRATOR')) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`);
  let kullanıcı = message.mentions.users.first() || client.users.get(args.join(' ')) || message.guild.members.find(c=> c.id === args[0])
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun kanka.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('757611325651157113')
  member.removeRole('757611335394787378')
     const kanal = message.guild.channels.find(c => c.id == '757872930112929812')
  let rochelle1 = new Rochelle.RichEmbed()
  .setColor('RED')
  .addField(`Menthe`, `${kullanıcı} **adlı üyenin cezası kalktı! **`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
message.react('754666399905087539')//708763304696217692




const rochelle = new Rochelle.RichEmbed()
.setColor('RED')
.addField(`Ceza Kaldırma İşlemi`,
`${kullanıcı} **adlı üyenin cezası kalktı! **`)
.setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  return message.channel.send(rochelle1).then(kanal.send(rochelle)).then(m => m.delete(5000));};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["cezaaç"],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'unjail',
  description: "Cezalı rolünü kaldırır",
  usage: 'Cezalı rolü açar'
}