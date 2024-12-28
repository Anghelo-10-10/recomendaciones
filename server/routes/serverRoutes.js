let express = require('express');
const router = express.Router();
let musicController = require("../controller/musicController")

router.get('/', (req,res)=>{
    res.send("hello Router");
});

router.post('/', musicController.addSong)

module.exports = router;