import { Schema, model } from "mongoose";

const clientsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },    
    age: {
      type: Number,
      required: true,
      trim: true,
    },
    birthday: {
      type: Date,
      default: false,
      min: '1950-09-28',
      max: '2020-01-01'
    },
  },
  {
    versionKey: false, //property set on each document when first created by Mongoose (the internal revision of the document).
    timestamps: true,
  }
);

clientsSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default model("Clients", clientsSchema);