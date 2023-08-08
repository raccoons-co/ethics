import Strict from "./Strict";
import NoSuchElementException from "./NoSuchElementException";

/**
 * A container object which may or may not contain a non-null value.
 *
 * @typeParam T - the type of the value
 * @public
 */
export default class Optional<T> {

    private readonly value: T;

    private constructor(value: T) {
        this.value = value;
    }

    /**
     * Returns status of value presence.
     */
    public isPresent(): boolean {
        return true;
    }

    /**
     * Returns status of value absence.
     */
    public isEmpty(): boolean {
        return false;
    }

    /**
     * Returns the value if present or empty optional throws NoSuchElementException.
     */
    public get(): T {
        return this.value;
    }

    /**
     * Returns the value if present or empty optional throws NoSuchElementException.
     */
    public orElseThrow(): T {
        return this.get();
    }

    /**
     * Performs the given action with the value, otherwise does nothing.
     *
     * @param performAction - the action to be performed
     * @throws NullPointerException if given action is null.
     */
    public ifPresent(performAction: (value: T) => void): void {
        Strict.notNull(performAction);
        performAction(this.value);
    }

    /**
     * Returns an optional of given non-null value.
     *
     * @typeParam T - the type of the value
     * @param value - the value to describe
     * @throws NullPointerException if value is null.
     */
    public static of<T>(value: T): Optional<Defined<T>> {
        Strict.notNull(value);
        return new Optional<Defined<T>>(<Defined<T>>value);
    }

    /**
     * Returns an optional of given non-null value, otherwise an empty optional.
     */
    public static ofNullable<T>(value: T): Optional<Defined<T>> {
        return value
            ? this.of<Defined<T>>(<Defined<T>>value)
            : this.empty<Defined<T>>();
    }

    /**
     * Returns an empty optional with no present value to get.
     */
    public static empty<T>(): Optional<Defined<T>> {
        return <Optional<Defined<T>>>new class EmptyOptional extends Optional<null> {

            constructor() {
                super(null);
            }

            /** @override */
            public isPresent(): boolean {
                return false;
            }

            /** @override */
            public isEmpty(): boolean {
                return true;
            }

            /** @override */
            public get(): null {
                throw new NoSuchElementException("No value present");
            }

            /** @override */
            public ifPresent(performAction: (value: null) => void): void { // eslint-disable-line
                // Intentionally empty.
            }
        };
    }
}

/**
 * Exclude undefined from type T.
 */
type Defined<T> = Exclude<T, undefined>;
