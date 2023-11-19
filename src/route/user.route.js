
const router = require("express").Router();

// middlewares
const auth = require('../middlewares/auth');

// controller
const userController = require("../controller/user.controller");

// @route: POST /api/user/signup
// @desc: create new user
// @access: Public
router.post("/signup", userController.signup);

// signin - add session
router.post("/signin", userController.signin);

// logout - delete session
router.delete("/logout", userController.logout);

// reset password
router.put("/reset-password", userController.resetPassword);

// get all user
router.get("/", auth, userController.getAllUsers);

// get user detail
router.get("/:id", userController.getUser);

// update user information
router.put("/:id", userController.updateUser);

// delete user account
router.delete("/:id", userController.deleteUser);

// @route: POST /api/user/refresh-token
// @desc: Refresh token
// @access: public
router.post("/refresh-token", userController.refreshToken)


/* step to step to refresh token
- call api: /api/user/refresh-token -> refresh_token: xxx
- return new access_token
- attacted new access_token into header of api
*/

module.exports = router;
