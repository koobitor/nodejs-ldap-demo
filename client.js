require("dotenv").config();

const ldap = require("ldapjs");
const client = ldap.createClient({
  url: process.env.LDAP_SERVER
});

const opts = {
  filter: "(&(l=Seattle)(email=*@foo.com))",
  scope: "sub",
  attributes: ["dn", "sn", "cn"]
};

client.search("o=example", opts, (err, res) => {
  if (err) console.error(err);

  res.on("searchEntry", entry => {
    console.log("entry: " + JSON.stringify(entry.object));
  });
  res.on("searchReference", referral => {
    console.log("referral: " + referral.uris.join());
  });
  res.on("error", err => {
    console.error("error: " + err.message);
  });
  res.on("end", result => {
    console.log("status: " + result.status);
  });
});
