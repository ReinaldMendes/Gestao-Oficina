// * Maintenance (Manutenção)
//     * workshop - referenciando a oficina onde a manutenção foi realizada (ObjectId em referência ao Workshop)
//     * vehicle - referenciando o veículo que foi submetido à manutenção (ObjectId em referência ao Vehicle)
//     * services - os serviços prestados, cada um contendo o nome do serviço e o preço (Subdocumento com name (String) e price (Number))
//     * date - a data em que a manutenção foi realizada (Date)
//     * totalCost - valor total da manutenção (Number computado do campo *price de *services)

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
    },
  },
  { timesstamps: true }
);

const Maintenance = model("Maintenance", maintenanceSchema);

export default Maintenance;
