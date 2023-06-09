/**
 * © 2023 Raccoons. Developing a simple way to change.
 *
 * The clean code ethics library.
 *
 * @example
 * ```typescript
 * @Immutable
 * export default class TestCase {
 *
 *    private readonly originalMethod: Method;
 *    private readonly context: ClassMethodDecoratorContext;
 *
 *    constructor(originalMethod: Method,
 *               context: ClassMethodDecoratorContext) {
 *       this.originalMethod = Strict.notNull(originalMethod);
 *       this.context = Strict.notNull(context);
 *   }
 * ...
 * }
 * ```
 *
 * @packageDocumentation
 */
import Strict from "./Strict";
import Immutable from "./Immutable";

export {
    Strict,
    Immutable
};
