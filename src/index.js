import mongoose from "mongoose";
import { IncrementableEntity } from './entities/incrementableEntity.js'
import { AnotherIncrementableEntity } from './entities/anotherIncrementableEntity.js'

;(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");

    for(let i = 0; i < 5; i++) {
    const entity = new IncrementableEntity({ name: `test_name_${i}` });
    await entity.save();

    const another_entity = new AnotherIncrementableEntity({ description: `test_description_${i}` });
    await another_entity.save();
    }
  } catch (error) {
    console.log("🚀 ~ ; ~ error:", error)
  }

  mongoose.connection.close();
  console.log("Connection closed");
})();