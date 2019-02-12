### Reproduce memory leak in Jest:

```
npm i
npm t
```

### GC at end of each test is triggered by `--detectLeaks`:

```
npm t -- --detectLeaks
```