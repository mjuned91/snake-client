const net = require("net");
const { IP, PORT } = require("./constants");
/*
const connect = () => {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541,
  });
*/
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to server.");
    conn.write("Name: MMJ");
  });

  conn.on("data", data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };