const EmergencyService = require('../services/emergencyService');

exports.listEmergencias = async (req, res, next) => {
  try {
    const list = await EmergencyService.list();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

exports.createEmergencia = async (req, res, next) => {
  try {
    const created = await EmergencyService.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};
