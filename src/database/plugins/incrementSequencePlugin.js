import { Sequence } from '../../entities/sequenceModel.js'

const incrementSequencePlugin = (schema, options) => {
  schema.pre('save', async function(next) {
    if (this.isNew) {
      this.incremental_id = await Sequence.getNextSequenceValue(this.constructor.modelName);
    }
    next();
  });
};

export { incrementSequencePlugin }