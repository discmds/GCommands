const { APIMessage, Structures } = require('discord.js');
const Color = require("../utils/color/Color")

module.exports = Structures.extend("Message", Message => {
    /**
     * The MessageStructure structure
     * @class
    */
    class GCommandsMessage extends Message {
        constructor(...args) {
            super(...args)
        }

        /**
         * Method to make buttons
         * @param {String} content
         * @param {Object} options
         * @returns {Promise}
        */
        async buttons(content, options) {
            if (!options.components) {
                options.components = [];
            }

            if(!options.allowedMentions) {
                options.allowedMentions = { parse: [] };
            }

            if (!Array.isArray(options.components)) {
                return console.log(new Color("&d[GCommands] &cThe buttons must be array.",{json:false}).getText());
            }

            var buttons = [];

            options.components.forEach((x, i) => {
                if (!x.style) x.style = 2;

                if (!x.label) {
                    return console.log(new Color(`&d[GCommands] &c#${i} don't has label!`,{json:false}).getText());
                }

                if (typeof (x.label) !== 'string') x.label = String(x.label);

                if (x.style === 5) {
                    if (!x.url) {
                        return console.log(new Color(`&d[GCommands] &cIf the button style is "url", you must provide url`,{json:false}).getText());
                    }
                } else {
                    if (!x.custom_id) {
                        return console.log(new Color(`&d[GCommands] &cIf the button style is not "url", you must provide custom id`,{json:false}).getText());
                    }
                }

                var style;
                var data = {};

                if(x.emoji) {
                    data = {
                        type: x.type,
                        style: x.style,
                        label: x.label,
                        custom_id: x.custom_id || null,
                        url: x.url || null,
                        disabled: x.disabled || false,
                        emoji: x.emoji
                    }
                } else {
                    data = {
                        type: x.type,
                        style: x.style,
                        label: x.label,
                        custom_id: x.custom_id || null,
                        url: x.url || null,
                        disabled: x.disabled || false
                    }
                }

                buttons.push(data);
            })

            options.components === null;

            return this.client.api.channels[this.channel.id].messages.post({
                data: {
                    allowed_mentions: options.allowedMentions,
                    content: content,
                    components: [
                        {
                            type: 1,
                            components: buttons
                        }
                    ],
                    options,
                    embed: options.embed || null
                }
            })
            .then(d => this.client.actions.MessageCreate.handle(d).message);
        }

        /**
         * Method to buttonsEdit
         * @param {String} content
         * @param {Object} options
         * @returns {Promise}
        */
         async buttonsEdit(content, options) {
            if (!options.components) {
                options.components = [];
            }

            if(!options.allowedMentions) {
                options.allowedMentions = { parse: [] };
            }

            if (!Array.isArray(options.components)) {
                return console.log(new Color("&d[GCommands] &cThe buttons must be array.",{json:false}).getText());
            }

            var buttons = [];
            var message;

            options.components.forEach((x, i) => {
                if (!x.style) x.style = 2;

                if (!x.label) {
                    return console.log(new Color(`&d[GCommands] &c#${i} don't has label!`,{json:false}).getText());
                }

                if (typeof (x.label) !== 'string') x.label = String(x.label);

                if (x.style === 5) {
                    if (!x.url) {
                        return console.log(new Color(`&d[GCommands] &cIf the button style is "url", you must provide url`,{json:false}).getText());
                    }
                } else {
                    if (!x.custom_id) {
                        return console.log(new Color(`&d[GCommands] &cIf the button style is not "url", you must provide custom id`,{json:false}).getText());
                    }
                }

                var style;
                var data = {};

                if(x.emoji) {
                    data = {
                        type: x.type,
                        style: x.style,
                        label: x.label,
                        custom_id: x.custom_id || null,
                        url: x.url || null,
                        disabled: x.disabled || false,
                        emoji: x.emoji
                    }
                } else {
                    data = {
                        type: x.type,
                        style: x.style,
                        label: x.label,
                        custom_id: x.custom_id || null,
                        url: x.url || null,
                        disabled: x.disabled || false
                    }
                }

                buttons.push(data);
            })

            options.components === null;

            return this.client.api.channels[this.channel.id].messages[this.id].patch({
                data: {
                    allowed_mentions: options.allowedMentions,
                    content: content,
                    components: [
                        {
                            type: 1,
                            components: buttons
                        }
                    ],
                    options,
                    embed: options.embed || null
                }
            })
            .then(d => this.client.actions.MessageCreate.handle(d).message);
        }

        /**
         * Method to inlineReply
         * @param {String} content
         * @param {Object} options
         * @returns {Promise}
        */
        async inlineReply(content, options) {
            const mentionRepliedUser = typeof ((options || content || {}).allowedMentions || {}).repliedUser === "undefined" ? true : ((options || content).allowedMentions).repliedUser;
            delete ((options || content || {}).allowedMentions || {}).repliedUser;

            const apiMessage = content instanceof APIMessage ? content.resolveData() : APIMessage.create(this.channel, content, options).resolveData();
            Object.assign(apiMessage.data, { message_reference: { message_id: this.id } });

            if (!apiMessage.data.allowed_mentions || Object.keys(apiMessage.data.allowed_mentions).length === 0)
            apiMessage.data.allowed_mentions = { parse: ["users", "roles", "everyone"] };
            if (typeof apiMessage.data.allowed_mentions.replied_user === "undefined")
            Object.assign(apiMessage.data.allowed_mentions, { replied_user: mentionRepliedUser });

            if (Array.isArray(apiMessage.data.content)) {
                return Promise.all(apiMessage.split().map(x => {
                    x.data.allowed_mentions = apiMessage.data.allowed_mentions;
                    return x;
                }).map(this.inlineReply.bind(this)));
            }

            const { data, files } = await apiMessage.resolveFiles();
            return this.client.api.channels[this.channel.id].messages
                .post({ data, files })
                .then(d => this.client.actions.MessageCreate.handle(d).message);
        }

        /**
         * Method to buttonsWithReply
         * @param {String} content
         * @param {Object} options
         * @returns {Promise}
        */
        async buttonsWithReply(content, options) {
            if (!options.components) {
                options.components = [];
            }

            if(!options.allowedMentions) {
                options.allowedMentions = { parse: [] };
            }

            if (!Array.isArray(options.components)) {
                return console.log(new Color("&d[GCommands] &cThe buttons must be array.",{json:false}).getText());
            }

            var buttons = [];

            options.components.forEach((x, i) => {
                if (!x.style) x.style = 2;

                if (!x.label) {
                    return console.log(new Color(`&d[GCommands] &c#${i} don't has label!`,{json:false}).getText());
                }

                if (typeof (x.label) !== 'string') x.label = String(x.label);

                if (x.style === 5) {
                    if (!x.url) {
                        return console.log(new Color(`&d[GCommands] &cIf the button style is "url", you must provide url`,{json:false}).getText());
                    }
                } else {
                    if (!x.custom_id) {
                        return console.log(new Color(`&d[GCommands] &cIf the button style is not "url", you must provide custom id`,{json:false}).getText());
                    }
                }

                var style;
                var data = {};

                if(x.emoji) {
                    data = {
                        type: x.type,
                        style: x.style,
                        label: x.label,
                        custom_id: x.custom_id || null,
                        url: x.url || null,
                        disabled: x.disabled || false,
                        emoji: x.emoji
                    }
                } else {
                    data = {
                        type: x.type,
                        style: x.style,
                        label: x.label,
                        custom_id: x.custom_id || null,
                        url: x.url || null,
                        disabled: x.disabled || false,
                    }
                }

                buttons.push(data);
            })

            options.components === null;

            return this.client.api.channels[this.channel.id].messages.post({
                data: {
                    allowed_mentions: options.allowedMentions,
                    content: content,
                    components: [
                        {
                            type: 1,
                            components: buttons
                        }
                    ],
                    message_reference: {
                        message_id: this.channel.lastMessageID
                    },
                    options,
                    embed: options.embed || null
                }
            })
            .then(d => this.client.actions.MessageCreate.handle(d).message);
        }
    }

    return GCommandsMessage;
})