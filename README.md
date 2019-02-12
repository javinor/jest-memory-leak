## Reproduce memory leak in Jest

```
npm i
npm t
```

### Recreated without `babel-polyfill`

```
find . -type d -name '*babel-polyfill*' -print
```

### --harmony / --env=node still doesn't help

```
node --harmony ./node_modules/.bin/jest --no-polyfill --logHeapUsage --env=node
```

### Suggested `setup.js` doesn't seem to help:

```
node --harmony node_modules/.bin/jest --env node --setupFilesAfterEnv ./setup.js --logHeapUsage
```

