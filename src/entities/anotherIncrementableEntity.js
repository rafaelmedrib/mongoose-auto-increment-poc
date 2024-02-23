import mongoose from "mongoose";
import { incrementSequencePlugin } from '../database/plugins/incrementSequencePlugin.js'

const another_incrementable_entity_schema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  incremental_id: {
    type: Number,
    unique: true
  }
});

another_incrementable_entity_schema.plugin(incrementSequencePlugin);

const AnotherIncrementableEntity = mongoose.model('another_incrementable_entity', another_incrementable_entity_schema);

export { AnotherIncrementableEntity }