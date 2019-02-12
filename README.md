### Reproduce memory leak in Jest:

```
npm i
npm t
```

### GC at end of each test is triggered by `--detectLeaks`:

```
npm t -- --detectLeaks
```

### babel-polyfill?

Running `find . -type d -name '*babel-polyfill*' -print` doesn't find `babel-polyfill` anywhere in `node_modules`
