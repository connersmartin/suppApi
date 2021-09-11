require('dotenv').config();

let mongoose;
try {
    mongoose = require("mongoose");
} catch (e) {
    console.log(e);
}
if (process.env.MONGO_URI)
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const { Schema } = mongoose;

const shareSchema = new Schema({
    id: String,
    rows: [{
        id: String,
        supplement: String,
        cost: Number,
        servings: Number,
        servingsPerDay: Number,
        costPerDay: Number,
        link: String,
        description: String
    }],
    editable: Boolean,
    description: String,
    date: { type: Date, default: Date.now },
});

const Share = mongoose.model('Share', shareSchema);

module.exports = Share;