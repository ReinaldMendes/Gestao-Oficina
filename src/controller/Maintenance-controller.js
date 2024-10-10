import { populate } from "dotenv";
import maintenance from "../model/Maintenance_model.js";

export const store = async (req, resp) => {
  try {
    const content = await maintenance.create(req.body);
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const index = async (req, resp) => {
  try {
    const content = await maintenance.find().exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const show = async (req, resp) => {
  try {
    const content =
      (await maintenance.findById(req.params.id).populate("workshop")) &&
      populate("vehicle").exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const update = async (res, resp) => {
  try {
    const content = await maintenance
      .findByIdAndUpdate(req.params.id, req.body)
      .exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const destroy = async (req, resp) => {
  try {
    maintenance.findByIdAndDelete(req.params.id).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
