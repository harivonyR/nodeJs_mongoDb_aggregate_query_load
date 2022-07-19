const {main} = require("./aggregate")

require('dotenv').config();

main().catch(console.error);