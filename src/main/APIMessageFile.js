const {Collection} = require("discord.js")
const Color = require("../color/Color");

module.exports = {
    reply: async function() {
        if (this.data) {
            return this;
        }
    
        this.data.allowed_mentions = this.data.allowed_mentions || {};
    
        if (this.options.mention === undefined) {
            this.options.mention = false;
        }
    
        Object.assign(this.data, {
            message_reference: {
                message_id: this.options.replyTo.id || this.options.replyTo
            }
        })
    
        this.data.components = [
            {
                type: 1,
                components: this.options.buttons
            }
        ];
    
        delete this.options;
        return this;
    }
}