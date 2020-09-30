const mongose = require('mongoose');

const dataSchema = new mongose.Schema({
    nama:{
        type: String,
        required: true,
        lowercase: true
    },
    asal: String
},
);

const Data = mongose.model("dataDiri", dataSchema);
module.exports = Data;