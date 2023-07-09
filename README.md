[![npm version](https://badge.fury.io/js/@raccoons-co%2Fethics.svg)](https://badge.fury.io/js/@raccoons-co%2Fethics)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_ethics&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=raccoons-co_ethics)
[![codecov](https://codecov.io/gh/raccoons-co/ethics/branch/master/graph/badge.svg?token=9X85JVC93D)](https://codecov.io/gh/raccoons-co/ethics)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/ethics/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/ethics/tree/master)

> *Clean code ethics.*

#### Annotation  `@Immutable`

Encapsulates instance of annotated class into `ImmutableObject` instance which prevents mutation 
of the original class instance.

#### Method `notNull`

>*public static notNull\<T>(reference: T, message?: string): T*

Ensures that an object reference is not null.
Returns the non-null reference that was validated.
Throws `NullPointerException` if reference is null.

#### Usage example
~~~~
import {Immutable, Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";

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

#### Install library
```shell script
% npm i @raccoons-co/ethics
```

[Support us with €1](https://send.monobank.ua/jar/6KuKuBf8ki)
