const pool = require("../src/database");

const getUser = async (req, res) => {
  const query = "select * from usuario";
  const resp = await pool.query(query);
  res.status(200).json(resp.rows);
};

const insertUser = async (req, res) => {
    const { nombre, apellido, correo,  password } = req.body;

    await pool.query('INSERT INTO usuario (apellido, correo, nombre, password) VALUES($1, $2, $3, $4);', [apellido, correo, nombre, password]);
    res.json({message: 'User Added Succesfully'});
};

module.exports = {
  getUser,
  insertUser
};