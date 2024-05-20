const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = require("../models/modelSchema");

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "Please provide email and password" });
  } else {
    try {
      const user = await Schema.findOne({ email: email });
      if (!user) {
        res.status(404).json({ msg: "No such user exist" });
      } else {
        if (!(await bcrypt.compare(password, user.password))) {
          res.status(400).json({ msg: "Invalid password" });
        } else {
          let token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
            expiresIn: "2d",
          });

          res.status(200).json({
            msg: "Login successful",
            token: token,
            user: {
              name: user.username,
              email: user.email,
              role: user.role,
            },
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

const Signup = async (req, res) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password || !role) {
    res.status(400).json({ error: "Please provide all the details" });
  } else {
    try {
      if (await Schema.findOne({ email: email })) {
        res.status(400).json({ error: "Email already exist" });
      } else {
        const hashedPassword = await bcrypt.hash(
          password,
          await bcrypt.genSalt(10)
        );
        try {
          const user = await Schema.create({
            username: username,
            email: email,
            password: hashedPassword,
            role: role,
          });

          let token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
            expiresIn: "2d",
          });
          res.status(200).json({
            msg: "signup successfull",
            token,
            user: {
              name: user.username,
              email: user.email,
              role: user.role,
            },
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: error.message });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

module.exports = { Login, Signup };
