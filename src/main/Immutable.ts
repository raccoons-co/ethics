import {Annotation, Any, Class, Method} from "@raccoons-co/genera";

/**
 * Encapsulates class instances into `ImmutableObject`.
 */
class Immutable implements Annotation {

    public decorator(): Method {
        return this.replacementClass;
    }

    /**
     * Returns extended class which prevents mutation of the original class instances.
     *
     * @template C The type of the decorated class
     * @param originalClass The class to decorate
     * @param context The context provided to a class decorator
     * @return Class ImmutableObject.
     */
    private replacementClass<C extends Class>(
        originalClass: C,
        context: ClassDecoratorContext): Class {

        return class ImmutableObject extends originalClass {

            // Remembers encapsulated class name and prohibits immutable to extend immutable.
            private readonly parentClass: string;

            constructor(...args: Any[]) {
                super(...args);
                this.parentClass = String(context.name);
                Object.freeze(this);
            }
        }
    }
}

export default new Immutable().decorator();
