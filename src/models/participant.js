const mongoose = require('mongoose');

const participantScheme = new mongoose.Schema( {
    riotName: {
        type: String,
        required: true
    },
    twitchName: {
        type: String,
        required: true
    },
    discordName: {
        type: String,
        required: true
    },
    discordId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: false
    }

});

mongoose.model('Participant', participantScheme);