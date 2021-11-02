const Classes = require('../models/classes');

exports.createClasses = async (req, res) => {
  const classes = new Classes({
    name: req.body.name,
    teacherName: req.body.teacherName,
    description: req.body.description,
  });

  try {
    const response_data = await classes.save();
    res.status(200).json(response_data);
  } catch (err) {
    res.send(`Error : ${err}`);
  }
};

exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Classes.find();
    res.json(classes);
  } catch (err) {
    res.send(`Error : ${err}`);
  }
};
