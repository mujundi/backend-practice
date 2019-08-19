const url = require("url");

const myUrl = new URL("http://mywebsite.com:5500/hello.html?id=100&status=active");

// Serialized URL
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

// Hostname (does not include port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Search params object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append("test", "123");
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
