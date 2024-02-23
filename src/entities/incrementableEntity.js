import mongoose from "mongoose";
import { incrementSequencePlugin } from "../database/plugins/incrementSequencePlugin.js";

const incrementable_entity_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  incremental_id: {
    type: Number,
    unique: true
  }
})

incrementable_entity_schema.plugin(incrementSequencePlugin);

const IncrementableEntity = mongoose.model('incrementable_entity', incrementable_entity_schema);

export { IncrementableEntity }