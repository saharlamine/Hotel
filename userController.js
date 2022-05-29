let User = require("../Models/user");
exports.ClientAdd = async (req, res) => {
    const UserName = req.body.UserName;
    const email = req.body.email;
    const address = req.body.address;
    //const password = req.body.password;
    const Phone = Number(req.body.Phone);
    const newUser = new User({
      UserName,
      //password,
      email,
      address,
      Phone,
    });
    newUser
      .save()
      .then(() => res.json("User ajouter avec succes !"))
      .catch((err) => res.status(400).json("Error :" + err));
  };
  