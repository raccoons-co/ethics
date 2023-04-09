import {Immutable} from "../main/index";
import {assert} from "chai";
import {Test} from "@raccoons-co/cleanway";
import ClassWithPropertyExtendsImmutableMock from "./given/ClassWithPropertyExtendsImmutableMock";
import ImmutableMock from "./given/ImmutableMock";
import ImmutableExtendsImmutableMock from "./given/ImmutableExtendsImmutableMock";

@Immutable
export default class ImmutableObjectTest {

    @Test
    public isFrozen() {
        assert.isFrozen(new ImmutableObjectTest());
    }

    @Test
    public hasCorrectInstanceType() {
        assert.instanceOf(new ImmutableObjectTest(), ImmutableObjectTest);
    }

    @Test
    public throwsExceptionOnChangeProperty() {
        assert.throws(() => new ImmutableMock().setProperty("New value"),
            "Cannot assign to read only property");
    }

    @Test
    public throwsExceptionOnCreateProperty() {
        assert.throws(() => {
                const descriptor = Object.create(null);
                descriptor.value = "static";
                Object.defineProperty(new ImmutableObjectTest(), "newPropertyKey", descriptor);
            },
            "Cannot define property newPropertyKey");
    }

    @Test
    public throwsExceptionOnExtensionWithProperty() {
        assert.throws(() => new ClassWithPropertyExtendsImmutableMock(),
            "object is not extensible");
    }

    @Test
    public throwsExceptionOnImmutableExtendsImmutable() {
        assert.throws(() => new ImmutableExtendsImmutableMock(),
            "Cannot assign to read only property 'parentClass'");
    }
}
