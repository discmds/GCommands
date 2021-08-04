const GCommandLoader = require('../managers/GCommandLoader'), Color = require('../structures/Color'), GCommandsDispatcher = require('./GCommandsDispatcher'), { GEvents: GEventLoader } = require('@gcommands/events'), GEventHandling = require('../managers/GEventHandling'), GDatabaseLoader = require('../managers/GDatabaseLoader'), { Events } = require('../util/Constants'), GUpdater = require('../util/updater'), {msToSeconds} = require('../util/util');
const { Collection, Client } = require('discord.js');
const fs = require('fs');
const ms = require('ms');

/**
 * The main GCommandsClient class
 * @extends Client
 */
class GCommandsClient extends Client {
    /**
     * The GCommandsClient class
     * @param {GCommandsOptions} options - Options (Discord.js client options, GCommandOptions)
     */
    constructor(options = {}) {
        super(options);

        if(!options.cmdDir) return console.log(new Color('&d[GCommands] &cNo default options provided! (cmdDir)',{json:false}).getText());
        if(!options.language) return console.log(new Color('&d[GCommands] &cNo default options provided! (language (english, spanish, portuguese, russian, german, czech, slovak, turkish))',{json:false}).getText());

        /**
         * GCommandsClient
         * @type {GCommands}
        */
        this.GCommandsClient = this;
        this.GCommandsClient.client = this;

        /**
         * caseSensitiveCommands
         * @type {Boolean}
         * @default true
        */
        this.caseSensitiveCommands = Boolean(options.caseSensitiveCommands) || true

        /**
         * caseSensitivePrefixes
         * @type {Boolean}
         * @default true
        */
        this.caseSensitivePrefixes = Boolean(options.caseSensitivePrefixes) || true

        /**
         * CmdDir
         * @type {string}
        */
        this.cmdDir = options.cmdDir;

        /**
         * EventDir
         * @type {string}
         * @default undefined
        */
        this.eventDir = options.eventDir;

        /**
         * AutoTyping
         * @type {Boolean}
         * @default false
        */
        this.autoTyping = options.autoTyping ? msToSeconds(ms(options.autoTyping)) : null;

        /**
         * ownLanguageFile
         * @type {Object}
        */
        if(!options.ownLanguageFile) this.languageFile = require('../util/message.json');
        else this.languageFile = options.ownLanguageFile;

        /**
         * language
         * @type {Object} language
        */
        this.language = options.language;

        /**
         * database
         * @type {Object} database
         * @default undefined
        */
        this.database = options.database;

        /**
         * gcategories
         * @type {Array}
         */
        this.gcategories = fs.readdirSync(`./${this.cmdDir}`)

        /**
         * gcommands
         * @type {Collection}
         */
        this.gcommands = new Collection();

        /**
         * galiases
         * @type {Collection}
         */
        this.galiases = new Collection();

        /**
         * Prefix
         * @type {string}
         * @default undefined
         */
        this.prefix = !Array.isArray(options.slash.prefix) ? [options.slash.prefix] : options.slash.prefix;

        /**
         * Slash
         * @type {string}
         * @default false
         */
        this.slash = options.slash.slash ? options.slash.slash : false;

        /**
         * defaultCooldown
         * @type {Number}
         * @default 0
         */
        this.defaultCooldown = options.defaultCooldown ? options.defaultCooldown : 0;

        process.on('uncaughtException', (error) => {
            this.emit(Events.LOG, new Color('&d[GCommands Errors] &eHandled: &a' + error + ` ${error.response ? error.response.data.message : ''} ${error.response ? error.response.data.code : ''} | use debug for full error`).getText());
            setTimeout(() => {this.emit(Events.DEBUG, error)}, 1000)
        });
        
        this.dispatcher = new GCommandsDispatcher(this);

        this.loadSys();
        GUpdater.__updater();
    }

    async loadSys() {
        new (require('../structures/GMessage')); 
        new (require('../structures/GGuild')); 

        require('../structures/DMChannel'); require('../structures/NewsChannel'); require('../structures/TextChannel');

        setTimeout(() => {
            new GDatabaseLoader(this.GCommandsClient)
            new GEventHandling(this.GCommandsClient)
            new GEventLoader(this.GCommandsClient)
            new GCommandLoader(this.GCommandsClient)
        }, 1000)
    };
}

module.exports = GCommandsClient;
