const os = require("os");

// Platform (Windows, Mac, etc.)
console.log(os.platform());

// CPU architecture
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// Free memory / Total mem
console.log(os.freemem() + " / " + os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());
