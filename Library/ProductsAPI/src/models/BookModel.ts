// models/ProductModel.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface Book extends Document {
  name: string;
  id: string;
  aouther:string;
}

const BookSchema: Schema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  aouther: { type: String, required: true },
});

// Instance method
BookSchema.methods.getBookInfo = function() {
  return `Name: ${this.name}, id: ${this.id}, Aouther: ${this.aouther}`;
};

// Static method
BookSchema.statics.findById = function(newId: string) {
  return this.find({ id:newId });
};

export default mongoose.model<Book>('Book', BookSchema);
