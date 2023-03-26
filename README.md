> *The clean code ethics.*

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/ethics/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/ethics/tree/master)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_ethics&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=raccoons-co_ethics)

Follow:
 
- `@Immutable` class instances;
- *public static `notNull`\<T>(reference: T, message?: string): T.*
 

~~~~
import {Immutable, Strict} from "@raccoons-co/ethics";

@Immutable
export default class TestCase {

    private readonly originalMethod: Method;
    private readonly context: ClassMethodDecoratorContext;

    constructor(originalMethod: Method,
               context: ClassMethodDecoratorContext) {
       this.originalMethod = Strict.notNull(originalMethod);
       this.context = Strict.notNull(context);
   }
 ...
}
~~~~

Install:
```shell script
% npm i @raccoons-co/ethics
```

[Support us with €1](https://send.monobank.ua/jar/6KuKuBf8ki)
