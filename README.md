[![npm version](https://badge.fury.io/js/@raccoons-co%2Fethics.svg)](https://badge.fury.io/js/@raccoons-co%2Fethics)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_ethics&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=raccoons-co_ethics)
[![codecov](https://codecov.io/gh/raccoons-co/ethics/branch/master/graph/badge.svg?token=9X85JVC93D)](https://codecov.io/gh/raccoons-co/ethics)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/ethics/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/ethics/tree/master)

Clean Code Ethics
---

#### Install library
```shell script
% npm i @raccoons-co/ethics
```

Strict
---

#### `Strict.notNull(...)`

>*public static notNull\<T>(reference: T, message?: string): NonNullable\<T>*

Ensures that an object reference is not null.
Returns the non-null reference that was validated.
Throws `NullPointerException` if reference is null.

#### `Strict.checkArgument(...)`

>*public static checkArgument(expression: boolean, message?: string): void*

Ensures the truth of an expression.
Throws `IllegalArgumentException` if expression is false.

Optional
---

#### `Optional.empty()`

>*public static empty\<T>(): Optional<Exclude<T, undefined>>*

Returns an empty optional with no present value to get.

#### `Optional.of(...)`

>*public static of\<T>(value: T): Optional<NonNullable\<T>>*

Returns an optional of given non-null value.

#### `Optional.ofNullable(...)`

>*public static ofNullable\<T>(value: T): Optional<NonNullable\<T>>*

Returns an optional of given non-null value, otherwise an empty optional.

#### Optional `isEmpty()`

>*public isEmpty(): boolean*

Returns status of value absence.

#### Optional `isPresent()`

>*public isPresent(): boolean*

Returns status of value presence.

#### Optional `get()`

>*public get(): T*

Returns the value if present or empty optional throws NoSuchElementException.

#### Optional `orElseThrow()`

>*public orElseThrow(): T*

Returns the value if present or empty optional throws NoSuchElementException.

#### Optional `orElse(...)`

>*public orElse(otherValue: T): T*

Returns the value if present or else returns other value.

#### Optional `ifPresent(...)`

>*public ifPresent(performAction: (value: T) => void): void*

Performs the given action with the value, otherwise does nothing.

#### Optional `ifPresentOrElse(...)`

>*public ifPresentOrElse(action: (value: T) => void, emptyAction: () => void): void*

Performs the given action with the value, otherwise performs the given empty-based action.

Immutable
---

#### Class Annotation  `@Immutable`

Encapsulates instance of annotated class into `ImmutableObject` instance which prevents mutation 
of the original class instance.
