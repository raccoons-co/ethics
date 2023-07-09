import {Annotation, Any, Class, Method} from "@raccoons-co/genera";

/**
 * Encapsulates instance of annotated class into `ImmutableObject` instance.
 */
class Immutable implements Annotation {

    public decorator(): Method {
        return this.immutableObjectClass;
    }

    /**
     * Returns extended class which prevents mutation of the original class instance.
     *
     * @template C The type of the decorated class
     * @param originalClass The class to decorate
     * @param context The context provided to a class decorator
     * @return Class ImmutableObject.
     */
    private immutableObjectClass<C extends Class>(originalClass: C, context: ClassDecoratorContext): Class {

        return class ImmutableObject extends originalClass {

            /** The way to remember original type and to prohibit extending already immutable class. */
            private readonly originalClassName: string;

            constructor(...args: Any[]) {
                super(...args);
                this.originalClassName = String(context.name);
                Object.freeze(this);
            }
        };
    }
}

export default new Immutable().decorator();
