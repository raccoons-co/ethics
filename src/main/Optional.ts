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
     * Returns the value if present or else returns other value.
     *
     * @param otherValue - the value to be returned if value is absent
     */
    public orElse(otherValue: T): T {
        return this.value ?? otherValue;
    }

    /**
     * Performs the given action with the value, otherwise does nothing.
     *
     * @param action - the action to be performed
     * @throws NullPointerException if given action is null
     */
    public ifPresent(action: (value: T) => void): void {
        Strict.notNull(action);
        action(this.value);
    }

    /**
     * Performs the given action with the value, otherwise performs the given empty-based action.
     *
     * @param action - the action to be performed if value is present
     * @param emptyAction - the empty-based action to be performed if value is absent
     * @throws NullPointerException if value is present and the given action is null, or value
     * is absent and the given empty-based action is null
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public ifPresentOrElse(action: (value: T) => void, emptyAction: () => void): void {
        this.ifPresent(action);
    }

    /**
     * Returns an optional of given non-null value.
     *
     * @typeParam T - the type of the value
     * @param value - the value to describe
     * @throws NullPointerException if value is null
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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            public ifPresent(performAction: (value: null) => void): void {
                // Intentionally empty
            }

            /** @override */
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            public ifPresentOrElse(action: (value: null) => void, emptyAction: () => void): void {
                Strict.notNull(emptyAction);
                emptyAction();
            }
        };
    }
}

/**
 * Exclude undefined from type T.
 */
type Defined<T> = Exclude<T, undefined>;
