let handler = async (m, { conn }) => {
  global.db.data.chats[m.chat].isBanned = false
  m.reply('Done!')
}
handler.help = ['unbanchat']
handler.command = /^unbanchat|bannd$/i
handler.owner,handler.mods = true

module.exports = handler
