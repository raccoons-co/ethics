import NullPointerException from "./NullPointerException";
import IllegalArgumentException from "./IllegalArgumentException";

/**
 * Static method to enforce a clean code ethics.
 */
export default class Strict {

    private constructor() {
        // Intentionally empty.
    }

    /**
     * Ensures that an object reference is not null.
     *
     * @param reference - an object reference
     * @param message - an optional of the exception if the check fails
     * @returns the non-null reference that was validated
     * @throws NullPointerException if reference is null
     */
    public static notNull<T>(reference: T, message?: string): NonNullable<T> {
        if (reference == null) {
            throw new NullPointerException(message);
        }
        return reference;
    }

    /**
     * Ensures the truth of an expression.
     *
     * @param expression - a boolean expression
     * @param message - an optional message of the exception if check fails
     * @throws IllegalArgumentException if expression is false
     */
    public static checkArgument(expression: boolean, message?: string): void {
        if (!expression) {
            throw new IllegalArgumentException(message);
        }
    }
}
