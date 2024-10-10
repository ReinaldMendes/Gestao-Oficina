import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
  name: {
    type: Schema.Types.String,
    requirede: true,
  },
  price: {
    type: Schema.Types.Number,
    min: 0,
  },
});

const maintenanceSchema = new Schema(
  {
    workshop: {
      type: Schema.Types.ObjectId,
      ref: "Workshop",
      required: true,
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },
    service: serviceSchema,
    date: {
      type: Number,
      min: 0,
      required: true,
    },
    totalCost: {
      type: String,
      required: true,
    },
  },
  { timesstamps: true }
);

const Maintenance = model("Maintenance", maintenanceSchema);

export default Maintenance;
