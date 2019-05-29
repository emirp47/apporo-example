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
```

## Declare /etc/hosts

```shell
curl http://0.0.0.0:7979/apporo-example/api/v1/test/validator
```

