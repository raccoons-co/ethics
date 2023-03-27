import NullPointerException from "./NullPointerException";
import Immutable from "./Immutable";

/**
 * Static method to enforce a clean code ethics.
 */
@Immutable
export default class Strict {
    private constructor() {
        // Intentionally empty.
    }

    /**
     * Ensures that an object reference is not null.
     *
     * @param reference of an object
     * @param message of the exception if the check fails (optional)
     * @return the non-null reference that was validated
     * @throws NullPointerException if reference is null
     */
    public static notNull<T>(reference: T, message?: string): T {
        if (reference == null) {
            throw new NullPointerException(message);
        }
        return reference;
    }
}
