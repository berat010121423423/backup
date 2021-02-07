const dc = require("discord.js")

exports.run = async (client, message, args) => {
  let embed = new dc.MessageEmbed()
  .setTitle("Okeanos Backup")
  .setDescription(`
    
  **Komutlar**
  **[.yedek-al]** <a:emoji_81:806177465160564756> Yedek Alırsınız.
  **[.yedek-yükle]** <a:emoji_81:806177465160564756> Yedeği Yüklersiniz.
  **[.yedek-sil]** <a:emoji_81:806177465160564756> Yedek Silersiniz.
  **[.yedek-liste]** <a:emoji_81:806177465160564756> Yedek Listenize Bakarsınız.
  **[.yedek-bilgi]** <a:emoji_81:806177465160564756> Belirttiğiniz Yedeğin Özelliklerine Bakarsınız.
  `)
  .setColor("GREEN")
  message.channel.send(embed)
  }