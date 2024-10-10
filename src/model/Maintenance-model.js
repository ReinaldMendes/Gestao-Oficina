import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  price: {
    type: Schema.Types.Number,
    min: 0,
    required: true,
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
    services: [{ serviceSchema }],
    date: {
      type: Date,
      required: true,
    },
    totalCost: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

maintenanceSchema.pre("save", function (next) {
  this.totalCost = this.services.reduce(
    (total, services) => total + services.price,
    0
  );
  next();
});

const Maintenance = model("Maintenance", maintenanceSchema);

export default Maintenance;
