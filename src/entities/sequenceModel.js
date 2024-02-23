import mongoose from "mongoose";

const sequence_schema = new mongoose.Schema({
  sequence_name: {
    type: String,
    required: true,
    unique: true
  },
  sequence_value: {
    type: Number,
    required: true,
    default: 1
  }  
});

sequence_schema.statics.getNextSequenceValue = async function(sequence_name) {
  const sequence = await this.findOneAndUpdate(
    { sequence_name },
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true}
  );

  return sequence.sequence_value;
}

const Sequence = mongoose.model('sequence', sequence_schema);

export { Sequence }