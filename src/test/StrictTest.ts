import {Test} from "@raccoons-co/cleanway";
import {assert} from "chai";
import {Strict} from "../main/index";
import NullPointerException from "../main/NullPointerException";

export default class StrictTest {

    @Test
    public throwsExceptionIfNullPointer() {
        assert.throws(
            () => Strict.notNull(null, "Null is prohibited"),
            NullPointerException,
            "Null is prohibited"
        );
    }

    @Test
    public throwsExceptionIfUndefinedPointer() {
        assert.throws(
            () => Strict.notNull(undefined, "Undefined is prohibited"),
            NullPointerException,
            "Undefined is prohibited"
        );
    }

    @Test
    public returnsSameObjectReference() {
        const reference = new Object();
        assert.deepEqual(Strict.notNull(reference), reference);
    }

    @Test
    public referenceNotEqualToAnother() {
        assert.notEqual(Strict.notNull(new Object()), new Object());
    }
}
