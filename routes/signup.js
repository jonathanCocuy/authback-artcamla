const router = require("express").Router();
const { jsonResponse } = require("../lib/jsonResponse");

router.post("/", (req, res) => {
  const { username, name, email, password } = req.body;

  if (!!!username || !!!name || !!!email || !!!password) {
    return res
      .status(400)
      .json(jsonResponse(400, { error: "Fields are required" }));
  }

  res
    .status(200)
    .json(jsonResponse(200, { message: "User created successfully" }));
  res.send("signup");
});

module.exports = router;
