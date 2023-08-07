import Strict from "./Strict";
import NoSuchElementException from "./NoSuchElementException";

/**
 * A container object which may or may not contain a non-null value.
 *
 * @typeParam T - the type of the value
 * @since 0.4.0
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
     * Returns the value if present or empty {@code Optional} throws {@code NoSuchElementException}.
     */
    public get(): T {
        return this.value;
    }

    /**
     * Returns the value if present or empty {@code Optional} throws {@code NoSuchElementException}.
     */
    public orElseThrow(): T {
        return this.get();
    }

    /**
     * Returns an {@code Optional} of given non-null value.
     *
     * @typeParam T - the type of the value
     * @param value - the value to describe
     * @throws {@code NullPointerException} if value is {@code null}.
     */
    public static of<T>(value: T): Optional<Defined<T>> {
        Strict.notNull(value);
        return new Optional<Defined<T>>(<Defined<T>>value);
    }

    /**
     * Returns an {@code Optional} of given non-null value, otherwise an empty {@code Optional}.
     */
    public static ofNullable<T>(value: T): Optional<Defined<T>> {
        return value
            ? this.of<Defined<T>>(<Defined<T>>value)
            : this.empty<Defined<T>>();
    }

    /**
     * Returns an empty {@code Optional} with no present value to get.
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
        };
    }
}

/**
 * Exclude {@code undefined} from type T.
 */
type Defined<T> = Exclude<T, undefined>;
