import {Immutable} from "../main/index";
import {Test, TestClass} from "@raccoons-co/cleanway";
import {assert} from "chai";
import ImmutableMock from "./given/ImmutableMock";
import ClassWithPropertyExtendsImmutableMock from "./given/ClassWithPropertyExtendsImmutableMock";
import ImmutableExtendsImmutableMock from "./given/ImmutableExtendsImmutableMock";

@TestClass
@Immutable
export default class ImmutableObjectTest {

    @Test
    public isFrozen() {
        assert.isFrozen(new ImmutableMock());
    }

    @Test
    public hasCorrectInstanceType() {
        assert.instanceOf(new ImmutableMock(), ImmutableMock);
    }

    @Test
    public throwsExceptionOnChangeProperty() {
        assert.throws(() => new ImmutableMock().setProperty("New value"),
            "Cannot assign to read only property");
    }

    @Test
    public throwsExceptionOnCreateProperty() {
        assert.throws(
            () => {
                const descriptor = Object.create(null);
                descriptor.value = "static";
                Object.defineProperty(new ImmutableMock(), "newPropertyKey", descriptor);
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
            "Cannot assign to read only property 'originalClassName'");
    }
}
