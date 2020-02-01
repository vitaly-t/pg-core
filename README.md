pg-core
-------

PostgreSQL Core Driver for NodeJS.

[![Build Status](https://travis-ci.org/vitaly-t/pg-core.svg?branch=master)](https://travis-ci.org/vitaly-t/pg-core)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/pg-core/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/pg-core?branch=master)

**This is a work-in-progress project**.

### Main Features

* Zero dependencies
* Everything is in TypeScript
* No extras (query formatting, etc)
* For Node.js >= v10.4.0, with `BigInt` support right out of the box

This low-level PostgreSQL kernel provides only connectivity and basic query execution
that's supported by PostgreSQL server, and nothing else.

Although it can be used directly, the primary purpose is integration with other
libraries, for custom query formatting or any high-level features.

### Installing

```
$ npm install pg-core
```
