const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Sequelize, DataTypes } = require("sequelize");
const mysqlConnection = require("./connection.js");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize("picnic_rental", "admin", "Autoplus1!", {
  host: "127.0.0.1",
  dialect: "mysql",
});

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

app.get("/", (req, res) => {
  res.send("Welcome to the Picnic Rental Backend!");
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ userId: newUser.id }, "Authorize54");
    res.status(201).json({ message: "Registration successful", token });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id }, "Authorize54");
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
