let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = m => m
let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

handler.before = function (m, { isOwner, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = db.data.chats[m.chat]
    let user = db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)

    if (!chat.badword && !chat.isBanned && isBadword && !isOwner) {
        user.warning += 1
        let thumb = 'https://telegra.ph/file/24adfea4e99aff04ecdb0.jpg'
        let dann = `*TOXIC terdeteksi!*
Warning: ${user.warning} / 5
Jika warning mencapai 5 kamu akan dibanned

"Keselamatan manusia tergantung pada kemampuannya menjaga lisan." (H.R. al-Bukhari).\n\nDalam riwayat lain dari Abu Hurairah disebutkan, \n\n"Siapa yang beriman kepada Allah dan hari akhir, hendaklah ia berkata baik atau lebih baik diam (jika tidak mampu berkata baik)" (HR: al-Bukhari dan Muslim).`
      if (user.warning <= 4) {
      conn.sendMessage(m.chat, {
text: `${dann}`,
contextInfo: {
externalAdReply: {
title: "Sans. BOTZ",
body: "WhatsApp BOT MULTI DEVICE",
thumbnailUrl: "https://telegra.ph/file/3cfb3dceaa2e6dfabc997.jpg",
sourceUrl: "https://chat.whatsapp.com/LfpvTsTBnsnKKrs7ZAU4Qr",
mediaType: 1,
renderLargerThumbnail: true}}})
      }
        if (user.warning >= 5) {
            user.banned = true
         conn.sendMessage(m.chat, {
text: 'Hubungi OWNER untuk UNBAN\nKontak OWNER:\nwa.me/+6285876830674?text=Halo',
contextInfo: {
externalAdReply: {
title: "SURPRISE ! KAMU DI BANNED ",
body: "",
thumbnailUrl: "https://telegra.ph/file/3cfb3dceaa2e6dfabc997.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true}}})
           
          if (m.isGroup) {
                if (isBotAdmin) {
                    // this.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
                }
            }
        }
    }
    return !0
}
module.exports = handler

