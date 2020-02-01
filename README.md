pg-core
-------

PostgreSQL Core Driver for NodeJS.

[![Build Status](https://travis-ci.org/vitaly-t/pg-core.svg?branch=master)](https://travis-ci.org/vitaly-t/pg-core)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/pg-core/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/pg-core?branch=master)

**THIS IS A WORK-IN-PROGRESS PROJECT**.

### Main Features

* Minimum dependencies
* Everything is in TypeScript
* No extras (query formatting, etc.)
* For Node.js >= v10.4.0, with native `BigInt` support
* Multi-host connections (for PostgreSQL v10+).

This low-level PostgreSQL kernel provides only connectivity and basic query execution
that's supported by PostgreSQL server, but nothing else.

Although it can be used directly, the primary purpose is integration with other
libraries, for custom query formatting or any high-level features.

### Installing

```
$ npm install pg-core
```
