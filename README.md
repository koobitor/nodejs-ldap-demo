## LDAP Server

### Start Development

```
yarn
yarn dev
```

### Test Connection

```
ldapsearch -H ldap://localhost:1389 -x -b o=example objectclass=*
```
