const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose)
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    username: {type: String, required: true, default: "Guest"}, 
    points: {type: Number}
});


const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
