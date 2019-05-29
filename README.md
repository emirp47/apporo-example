# apporo-example

## Verify configuration

```shell
node server.js --tasks=print-config
```

## Run server

```shell
export DEBUG=devebot*,app*
export LOGOLITE_DEBUGLOG_ENABLED=true
export DEVEBOT_CONFIG_ENV=dev-tl
node server.js
```

## Declare /etc/hosts

Open /etc/hostsd file:

```bash
sudo nano /etc/hosts
```

Add IP-domain mapping:
```bash
127.0.0.1 apporo-example.com
## Try example

```shell
curl http://127.0.0.1:7979/restfront/api/v1/test/validator
```
