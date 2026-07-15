module.exports = {
    BOT_TOKEN: process.env.BOT_TOKEN || 'MTE0NzAxqvg9hoAU5metYUMwNA.G5qAqV.fgKtyVeH-NbGmEeFuXuWa7Hxqvg9hoAU5metYU',
    CLIENT_ID: process.env.CLIENT_ID || '1509626568207630416',
    OWNER_ID: process.env.OWNER_ID || '968064337019301888',
    PREFIX: ',',


    LAVALINK: {
        HOSTS: process.env.LAVALINK_HOSTS || 'panel.peachygang.app',
        PORTS: process.env.LAVALINK_PORTS || '55055',
        PASSWORDS: process.env.LAVALINK_PASSWORDS || 'peachygang',
        SECURES: process.env.LAVALINK_SECURES || 'false'
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