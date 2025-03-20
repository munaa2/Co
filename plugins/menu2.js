



const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "menu2",
    react: "👾",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `👋 𝐇𝐄𝐋𝐋𝐎, ${pushname}!

🤫 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 ʟᴏʀᴅ xᴍᴅ 💫

╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
┊◈ яυηтιмє * ${runtime(process.uptime())}
┊◈ σωηєя ηαмє *ᴍᴀʟᴠɪɴ ᴋɪɴɢ*
┊◈ σωηєя ηυмвєя *263714757857
╰──────────●
╭──────────┉
 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.download}
╰─━━┈┉┉┅┅┅┅┅┅┅┅
╭──────────┅
 👾 *𝐀𝐢 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.ai}
╰─━━┈┉┉┅┅┅┅┅┅┅┅
╭─━━┄┄┄┅┅┉┈┈┈┈┈
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.main}
╰─━━┈┉┉┅┅┅┅┅┅┅┅
╭─━━┄┄┄┅┅┉┈┈┈┈┈
 🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.fun}
╰─━━┈┉┉┅┅┅┅┅┅┅┅
╭─━━┄┄┄┅┅┉┈┈┈┈┈
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.convert}
╰─━━┈┉┉┅┅┅┅┅┅┅┅
╭─━━┄┄┄┅┅┉┈┈┈┈┈
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.search}
╰─━━┈┉┉┅┅┅┅┅┅┅┅
╭─━━┄┄┄┅┅┉┈┈┈┈┈
 👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.group}
╰─━━┈┉┉┅┅┅┅┅┅┅┅
╭─━━┄┄┄┅┅┉┈┈┈┈┈
 🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.owner}
╰─━━┈┉┉┅┅┅┅┅┅┅┅
╭─━━┄┄┄┅┅┉┈┈┈┈┈
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.other}
╰─━━┈┉┉┅┅┅┅┅┅┅┅
╭─━━┄┄┄┅┅┉┈┈┈┈┈
 🛠️ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.tools}
╰─━━┈┉┉┅┅┅┅┅┅┅┅

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴏʀᴅ xᴍᴅ*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
