import {Immutable} from "../main/index";
import {assert} from "chai";
import {Test} from "@raccoons-co/cleanway";
import ExtendedWithPropertyMock from "./given/ExtendedWithPropertyMock";
import ImmutableMock from "./given/ImmutableMock";

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
            "Cannot define property");
    }

    @Test
    public throwsExceptionOnClassExtensionWithProperty() {
        assert.throws(() => new ExtendedWithPropertyMock(), "object is not extensible");
    }
}
