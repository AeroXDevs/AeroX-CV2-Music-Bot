module.exports = {
    BOT_TOKEN: process.env.BOT_TOKEN || '',
    CLIENT_ID: process.env.CLIENT_ID || '',
    OWNER_ID: process.env.OWNER_ID || '',
    PREFIX: ',',


    LAVALINK: {
        HOSTS: process.env.LAVALINK_HOSTS || '',
        PORTS: process.env.LAVALINK_PORTS || '',
        PASSWORDS: process.env.LAVALINK_PASSWORDS || '',
        SECURES: process.env.LAVALINK_SECURES || ''
    },


    MUSIC: {
        DEFAULT_PLATFORM: 'ytsearch',
        AUTOCOMPLETE_LIMIT: 5,
        PLAYLIST_LIMIT: 3,
        ARTWORK_STYLE: 'MusicCard' // 'Banner' for MediaGallery or 'MusicCard' for custom image card
    },

    GENIUS: {
        API_KEY: process.env.GENIUS_API_KEY || ''
    }
};

/*
: ! Aegis !
    + Discord: itsfizys
    + Portfolio: https://itsfiizys.com
    + Community: https://discord.gg/8wfT8SfB5Z  (AeroX Development )
    + for any queries reach out Community or DM me.
*/