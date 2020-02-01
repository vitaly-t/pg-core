pg-core
-------

PostgreSQL Core Driver for NodeJS.

[![Build Status](https://travis-ci.org/vitaly-t/pg-core.svg?branch=master)](https://travis-ci.org/vitaly-t/pg-core)

This is a work-in-progress project, implementing a core PostgreSQL driver:

* Zero dependencies;
* Everything is 100% in TypeScript;
* No extras (query formatting, etc);
* For Node.js >= v10.4.0, with `BigInt` support right out of the box.

This low-level PostgreSQL kernel provides only connectivity and basic query execution
that's supported by PostgreSQL server directly, and nothing else.

Although it can be used directly, the primary purpose is integration with other
libraries that can offer custom query formatting and other high-lever features.

### Installing

```
$ npm install pg-core
```
