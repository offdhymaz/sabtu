let handler  = async (m, { conn, usedPrefix: _p }) => {

  conn.reply(m.chat, `
if (text.includes("!")) {

    const teks = text.replace(/! /, "")

    axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${teks}`).then((res) => {

      let hasil = `*${res.data.result}*`;

      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });

    })

  }
  handler.help = ['simi', 'simih'].map(v => v + ' <kata2>')

handler.tags = ['internet']

handler.command = /^googlef?$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

module.exports = handler
