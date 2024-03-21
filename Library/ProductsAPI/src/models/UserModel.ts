// models/ProductModel.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  name: string;
  id: number;
  email:string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
  email:{type:String, required: true }
});

// Instance method
UserSchema.methods.getUserInfo = function() {
  return `Name: ${this.name}, Id: ${this.id}`;
};

// Static method
UserSchema.statics.findById = function(newId: string) {
  return this.find({ id:newId });
};

export default mongoose.model<User>('User', UserSchema);
