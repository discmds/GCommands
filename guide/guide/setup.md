# Installing Node.js and discord-cmds.js

## Installing Node.js

<language lang="en">

Don't have Node.js yet? Go to their [website](https://nodejs.org) and install it!<br>
Don't have an editor? Check out [VS Code](https://code.visualstudio.com/).

</language>

### Installing on Windows

<language lang="en">

If you have a Windows machine, it's as simple as installing any other program. Go to the [Node.js website](https://nodejs.org), download the latest version, open up the downloaded file, and follow the steps on the installer.

</language>

### Installing on macOS

<language lang="en">

If you have a macOS machine, you have a few options. You can go to the [Node.js website](https://nodejs.org), download the latest version, double click the package installer, and follow the instructions. Or you can use a package manager like Homebrew (opens new window) with the command `brew install node`.

</language>

### Installing on Linux

<language lang="en">

If you have a Linux machine, you may see [this page](https://nodejs.org/en/download/package-manager/) to determine how you should install Node.

::: warning
If you do have Node installed, but have an older version \(i.e. anything below 16.6\), you should upgrade to the latest version. discord.js v13 requires Node 16.6 or higher.
:::

</language>

## Installing discord-cmds.js

<language lang="en">

Use `npm i discord-cmds.js` for download stable version.<br>
Create a folder with your own name and then create index.js in it

</language>

<branch version="1.x">

<language lang="en">

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const discmd = require("discord-cmds.js")

const handler = new discmd(client,{
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
</language>
</branch>
