const ldap = require("ldapjs");
const server = ldap.createServer();

server.search("o=example", (req, res, next) => {
  const obj = {
    dn: req.dn.toString(),
    attributes: {
      objectclass: ["organization", "top"],
      o: "example"
    }
  };

  if (req.filter.matches(obj.attributes)) res.send(obj);

  res.end();
});

server.listen(1389, () => {
  console.log("LDAP server listening at %s", server.url);
});
