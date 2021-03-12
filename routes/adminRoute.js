const express = require("express");
const passport = require("../middleware/passport");
const { ensureAdminAuthenticated, isAdmin } = require("../middleware/checkAuth");

const router = express.Router();

router.get("/", ensureAdminAuthenticated, (req, res) => {
    var sessionIDsArray = new Array();
    for(var session in req.sessionStore.sessions){
        sessionIDsArray.push(session);
    }
    res.render("admin", {
        sessions: sessionIDsArray, 
        user: req.user,
      });
    });

module.exports = router;
