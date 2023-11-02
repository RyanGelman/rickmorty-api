import mongoose from "mongoose";

const Schema = mongoose.Schema

let LocationSchema = new Schema({
    id: {type: String},
      name: {type: String},
      type: {type: String},
      dimension:{type: String},
      residents: {type: [String]},
      url: {type: String},
      created: {type: String},
})

export default mongoose.model("locations", LocationSchema)


