const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

  if (!message.member.roles.has("757611325651157113") && !message.member.hasPermission("MANAGE_MESSAGES") ) 
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "754041025051361321";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:757863408824483891>`,
    '1': `<a:bir:757863409462149162>`,
    '2': `<a:iki:757863408644259841>`,
    '3': `<a:uc:757863413115387977>`,
    '4': `<a:drt:757863413547401278>`,                       
    '5': `<a:be:757863414704898108>`,
    '6': `<a:alt:757863414667411486>`,
    '7': `<a:yedi:757863414704898058>`,
    '8': `<a:sekiz:757863414491250749>`,
    '9': `<a:dokuz:757863414579068999>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:757863408824483891>`,
    '1': `<a:bir:757863409462149162>`,
    '2': `<a:iki:757863408644259841>`,
    '3': `<a:uc:757863413115387977>`,
    '4': `<a:drt:757863413547401278>`,                       
    '5': `<a:be:757863414704898108>`,
    '6': `<a:alt:757863414667411486>`,
    '7': `<a:yedi:757863414704898058>`,
    '8': `<a:sekiz:757863414491250749>`,
    '9': `<a:dokuz:757863414579068999>`}[d];
      })
    }/////////////////////////////
  var tagdakiler = 0;
  let tag = "Emirhan";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
   '0': `<a:sfr:757863408824483891>`,
    '1': `<a:bir:757863409462149162>`,
    '2': `<a:iki:757863408644259841>`,
    '3': `<a:uc:757863413115387977>`,
    '4': `<a:drt:757863413547401278>`,                       
    '5': `<a:be:757863414704898108>`,
    '6': `<a:alt:757863414667411486>`,
    '7': `<a:yedi:757863414704898058>`,
    '8': `<a:sekiz:757863414491250749>`,
    '9': `<a:dokuz:757863414579068999>`}[d];
      })
    }/////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:757863408824483891>`,
    '1': `<a:bir:757863409462149162>`,
    '2': `<a:iki:757863408644259841>`,
    '3': `<a:uc:757863413115387977>`,
    '4': `<a:drt:757863413547401278>`,                       
    '5': `<a:be:757863414704898108>`,
    '6': `<a:alt:757863414667411486>`,
    '7': `<a:yedi:757863414704898058>`,
    '8': `<a:sekiz:757863414491250749>`,
    '9': `<a:dokuz:757863414579068999>`}[d];
      })
    }/////////////////////////////
const emoji1 = client.emojis.get("754666344930345040")
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('CodAre')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
  
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}