 const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

  const emoji = client.emojis.find(emoji => emoji.id === "755805965542096996")//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
const emoji1 = client.emojis.find(emoji => emoji.id === "755806375329661060")//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
const emoji2 = client.emojis.find(emoji => emoji.id === "754666374181158952")//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert

 if (!message.member.roles.has('757611330743173261') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilginize` , `${emoji1}  Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
let rochelle1 = message.mentions.users.first() || client.users.get(args.join(' ')) || message.guild.members.find(c=> c.id === args[0])
  if (!rochelle1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1}   Bir kullanıcı etiketlemeli ve ya id girmelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  let rochelle = message.guild.member(rochelle1)//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
let isim = args[1]//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
if(!isim) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1} Geçerli bir İsim Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 let yas = args[2]
if(!yas) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1} Geçerli bir Yaş Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 
rochelle.setNickname(`✩ ${isim} '${yas}`)
  rochelle.addRole('757611325651157113'); // erkek 1
  rochelle.addRole('757611325651157113'); // erkek 1
  rochelle.addRole('757611325651157113'); // erkek 1
  rochelle.addRole('757611325651157113')
  rochelle.addRole('757611325651157113')

  rochelle.removeRole('757611324673884222'); // kadın 1
  rochelle.removeRole('757611324673884222')
  rochelle.removeRole('757611324673884222')

  rochelle.removeRole('757611324673884222') // kayıtsız 1
  rochelle.removeRole('757611335394787378') // cezalı 1 717777340708552807 717743735705960448
  

    message.react("TEPKİ");
db.add(`erkek.${message.author.id}`, 1);
    const kanal = message.guild.channels.find(c => c.id == "757611376188325910") 
    const embed1 = new Discord.RichEmbed() 
    .setDescription(`${emoji2}  ${rochelle.user}  **Aramıza Hoş Geldin , Seninle Beraber \`${rochelle.guild.memberCount}\` Üyeye Ulaştık**`)
    .setColor("#B0E0E6")
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
        kanal.send(embed1).then(m => m.delete(10000));
  let embed = new Discord.RichEmbed() 
  .setColor("#E0FFFF")
  .setTitle('Graces but God', message.author.avatarURL)
  .setDescription(`**${emoji2} ${rochelle.user} Adlı Üye Başarıyla Kayıt Edildi** `)
.setFooter('Kalite Tesadüf Değildir')
  .setTimestamp()
  return message.channel.send(embed).then(m => m.delete(6000));

 
};//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["e", "er"],
  kategori: "Yetkili Komutları",//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "kayıt isim yaş"
};
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert