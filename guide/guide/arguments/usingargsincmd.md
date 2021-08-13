# Using arguments in commands
Arguments in commands can make a lot of things easier for you. They can also be useful if you want to do a command such as `!/ban @user`.

##  String arguments
A `string` argument is simply the text after the command name and prefix.  
For the example from the `!/say Hello` command, argument 0 will be `Hello`.  
This system also works for the slash and normal command.

```js
module.exports = {
    name: 'say',
    description: 'Shows latency ping!',
    options: [{
        name: 'input',
        type: 'STRING',
        description: 'The input to echo back',
        required: true,
    }]
    run: async({ interaction, client, args, reply, editReply) => {
        let r = await reply({ content: "hi" + interaction.member }) //interaction will be slash interaction when user uses slash command but if users uses normal then interaction will me message!
        await editReply(r, { content: "hello"})
    }
}
```

<div is="discord-messages">
    <discord-messages>
        <dis-message profile="gcommands">
            <template #interactions>
                <discord-interaction profile="hyro" :command="true">say hello</discord-interaction>
            </template>
            hello
        </dis-message>
    </discord-messages>
    <discord-messages>
            <dis-message profile="izboxo">
            .say Hi
        </dis-message>
        <dis-message profile="gcommands">
            Hi
        </dis-message>
    </discord-messages>
</div>

## All types of arguments:
```js
STRING
INTEGER
BOOLEAN
USER
CHANNEL
ROLE
MENTIONABLE
SUB_COMMAND_GROUP
SUB_COMMAND
```
