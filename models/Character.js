import mongoose from "mongoose";

const Schema = mongoose.Schema;

let CharacterSchema = new Schema({
    id: {type: String},
    name: {type: String},
    status: {type: String},
    species: {type: String},
    school: {type: String},
    type: {type: String},
    gender: {type: String},
    origin: {type: {String}},
    image: {type: String},
    location: {type: {String}},
});

export default mongoose.model("characters", CharacterSchema)


