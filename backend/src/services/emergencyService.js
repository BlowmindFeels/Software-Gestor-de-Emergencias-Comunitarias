// Lógica de negocio minimal
const EmergencyModel = require('../models/emergencyModel');

exports.list = async () => {
  // placeholder: normalmente consultaría DB
  return [];
};

exports.create = async (data) => {
  // placeholder: normalmente validación y persistencia
  return { id: Date.now(), ...data };
};
