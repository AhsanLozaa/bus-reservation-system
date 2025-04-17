// import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import models from "../models/index.js";
const { User } = models;

export const registerUser = async (req, res) => {
  try {
    const { name, email, mobile_number, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      mobile_number,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    //   expiresIn: "1d",
    // });
    const token = "";

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
