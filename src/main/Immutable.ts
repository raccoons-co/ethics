import {Annotation, Any, Class, Method} from "@raccoons-co/genera";
import Strict from "./Strict";

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
     * @typeParam C - the type of the decorated class
     * @param originalClass - the class to decorate
     * @param context - the context provided to a class decorator
     * @returns class ImmutableObject.
     */
    private immutableObjectClass<C extends Class>(originalClass: C, context: ClassDecoratorContext): Class {

        Strict.notNull(originalClass);
        Strict.notNull(context);
        Strict.checkArgument(String(context.kind) === "class");

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
