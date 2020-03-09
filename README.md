## LDAP Server

### Install Dependency

```
yarn
```

### Start Server & Client

```
yarn server
yarn client
```

### Test Connection

```
ldapsearch -H ldap://localhost:1389 -x -b o=example objectclass=*
```
