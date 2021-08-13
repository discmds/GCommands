# Additional features

<language lang="en" inline=true>Accessories that may be useful to you.</language>

## Slash respond/edit

<language lang="en" inline=true>For example, do you want when you send a command to be sent as a clyde or to disable ping in a certain message?</language>

<branch version="1.x">

<language lang="en">

```js
const { Command } = require("gcommands")
module.exports = {
    name: 'say',
    description: 'Shows latency ping!',
    options: [{
        name: 'input',
        type: 'STRING',
        description: 'The input to echo back',
        required: true,
    }]
    run: async({ interaction, client, args, reply, editReply }) => {
        let r = await reply({ content: "hi" + interaction.member }) //interaction will be slash interaction when user uses slash command but if users uses normal then interaction will me message!
        await editReply(r, { content: "hello"})
    }
}
```
</language>

</branch>

## UserPermissions

<branch version="1.x">

<language lang="en" inline=true>Add a `userRequiredPermissions` key to your existing command options. We will use the 'ban' command to example.</language>

```js {8}
module.exports = {
    name: 'say',
    description: 'Shows latency ping!',
    userRequiredPermissions: "ADMINISTRATOR", //["ADMINISTRATOR","MANAGE_GUILD"]
    options: [{
        name: 'input',
        type: 'STRING',
        description: 'The input to echo back',
        required: true,
    }]
    run: async({ interaction, client, args, reply, editReply }) => {
        let r = await reply({ content: "hi" + interaction.member }) //interaction will be slash interaction when user uses slash command but if users uses normal then interaction will me message!
        await editReply(r, { content: "hello"})
    }
}
```

</branch>

## ClientRequiredPermissions

<branch version="5.x">

<language lang="en">

Add a `clientRequiredPermissions` key to your existing command options. We will use the 'ban' command to example.
It determines if the bot has permissions and if so it executes the command.

</language>

```js {8}
module.exports = {
    name: 'say',
    description: 'Shows latency ping!',
    clientRequiredPermissions: "SEND_MESSAGES",
    options: [{
        name: 'input',
        type: 'STRING',
        description: 'The input to echo back',
        required: true,
    }]
    run: async({ interaction, client, args, reply, editReply }) => {
        let r = await reply({ content: "hi" + interaction.member }) //interaction will be slash interaction when user uses slash command but if users uses normal then interaction will me message!
        await editReply(r, { content: "hello"})
    }
}
```

</branch>

## botOwnerOnly

```js {8}
module.exports = {
    name: 'say',
    description: 'Shows latency ping!',
    ownerOnly: true, //go to main file and where you have constructed discord-cmds.js add ownerID: ""
    options: [{
        name: 'input',
        type: 'STRING',
        description: 'The input to echo back',
        required: true,
    }]
    run: async({ interaction, client, args, reply, editReply }) => {
        let r = await reply({ content: "hi" + interaction.member }) //interaction will be slash interaction when user uses slash command but if users uses normal then interaction will me message!
        await editReply(r, { content: "hello"})
    }
}
```

</language>
