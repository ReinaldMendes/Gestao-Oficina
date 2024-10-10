import vehicle from "../model/Vehicle-model.js";

export const store = async (req, res) => {
  try {
    const content = await vehicle.create(req.body);
    res.status(201).json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const index = async (req, res) => {
  try {
    const content = await vehicle.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const show = async (req, res) => {
  try {
    const content = await vehicle
      .findById(req.params.id)
      .populate("maintenance")
      .exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const update = async (req, res) => {
  try {
    const content = await vehicle
      .findByIdAndUpdate(req.params.id, req.body)
      .exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const destroy = async (req, res) => {
  try {
    const content = await vehicle.findByIdAndDelete(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
