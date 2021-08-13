<div align="center">
    <h1>discord-cmds.js</h1>
  <p>
    <a href="https://www.npmjs.com/package/discord-cmds.js"><img src="https://img.shields.io/npm/v/discord-cmds.js?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/gcommands"><img src="https://img.shields.io/npm/dt/discord-cmds.js?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/discord-cmds.js"><img src="https://nodei.co/npm/gcommands.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

---

### 📂 | Installation
```sh
npm install gcommands
```

### 📜 | Setup
```js
const { Client } = require("discord.js")
const discmd = require("discord-cmds.js")
const client = Client()

const dcjs = new discmd(client,{
cmdDir: "./commands",
port: 3000, //for starting express app!
slash: true //your commands can be runned as slash commands!
normal: true //your commands can be runned as normal commands!
prefix: "!",
notOwnerMsg: "You are not my owner",
ownerID: "" //bot owner id!
notHavingPermsMsg: "You don't have {PERMISSION} perms!,
clientNotHavingPermsMsg: "I have have {PERMISSION} perms!
})

client.on("ready", () => {
    console.log("bot ready")
})

client.login("token")
```

### 👥 | Contact
<a href="https://discord.gg/jjNkZGyGbK"><img src="https://discord.com/api/guilds/761590241218920478/widget.png?style=banner1"></a>
