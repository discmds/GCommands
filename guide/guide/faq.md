# FAQ

#### I keep getting error `.guild` is undefined
A: discord-cmds.js needs you to have [GUILD_MEMBERS](https://discord.com/developers/docs/topics/gateway#gateway-intents) intents enabled in the [Discord Developers Portal](https://discord.com/developers).

#### How do I send a message in a slash command?
A: you can make normal + slash Command in a single file! you can use `reply()` function to send messages! 

```js
async run({reply}) {
    reply({ content: "hello" })
}
```

#### How do I get the author of a message/channel in a slash command?
A: Just import the channel, member functions into respond and then you can simply use this. Member returns a [GuildMember](https://discord.js.org/#/docs/main/stable/class/GuildMember) object.

```js
async run({interaction}) {
    interaction.member.send("hello")
}
```
