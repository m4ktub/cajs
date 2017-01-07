Cellular Automata JS
====================

The CAJS library allows you to embed cellular automata animations in a web page
or create cellular automata to simulate processes or patterns.

Building
--------

Runing `npm run build` will compile the TypeScript sources in `src`and put the resulting JavaScript sources in `dist/amd` directory.

Using
-----

The sources in `dist/amd` are [AMD][1] JavaScript modules that can be loaded with a module loader like [RequireJS][2] or [SystemJS][3]. With RequireJS, we can load the main `ca` module with:

``` javascript
requirejs(['ca'], function(ca) {
    // usage of ca
});
```

This assumes that `ca.js` is next to the html page or the path is defined with `require.config(...)`.

Examples
--------

There are a couple of examples available in the `examples` directory. A simple 
HTTP server is configured to allow viewing them without browser security
issues. Just go to http://localhost:8080/examples/ after executing the 
following command:

```
npm start
```

[1]: https://github.com/amdjs/amdjs-api/wiki/AMD
[2]: http://requirejs.org/
[3]: https://github.com/systemjs/systemjs
