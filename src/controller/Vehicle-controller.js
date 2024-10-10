import vehicle from "../model/Vehicle_model.js";

export const store = async (req, resp) => {
  try {
    const content = await vehicle.create(req.body);
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const index = async (req, resp) => {
  try {
    const content = await vehicle.find().exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const show = async (req, resp) => {
  try {
    const content = await vehicle
      .findById(req.params.id)
      .populate("maintenances")
      .exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const update = async (res, resp) => {
  try {
    const content = await vehicle
      .findByIdAndUpdate(req.params.id, req.body)
      .exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const destroy = async (req, resp) => {
  try {
    vehicle.findByIdAndDelete(req.params.id).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
