// * Workshop (Oficina)
//     * name  - o nome da oficina (String)
//     * address - o endereço completo da oficina (String)
//     * specialties - uma lista de especialidades da oficina ex: motor, freios, suspensão (Array de Strings)
//     * maintenances - Um array de ObjectID referenciando a manutenção, aqui se armazena todas as manutenções realizada pela oficina (é um valor computado)

import workshop from "../model/Workshop-model.js";

export const store = async (req, resp) => {
  try {
    const content = await workshop.create(req.body);
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
export const index = async (req, resp) => {
  try {
    const content = await workshop.find().exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const show = async (req, resp) => {
  try {
    const content = await workshop
      .findById(req.params.id)
      .populate("maintenances")
      .exec();
    resp.json(content);
  } catch (error) {
    resp.json(error);
  }
};
export const update = async (req, res) => {
  try {
    const content = await workshop
      .findByIdAndUpdate(req.params.id, req.body)
      .exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const destroy = async (req, resp) => {
  try {
    workshop.findByIdAndDelete(req.params.id).exec();
    resp.json();
  } catch (error) {
    resp.json(error);
  }
};
