import {Test, TestClass} from "@raccoons-co/cleanway";
import {assert} from "chai";
import {Immutable, Strict} from "../main/index";
import NullPointerException from "../main/NullPointerException";

@TestClass
@Immutable
export default class StrictNotNullTest {

    @Test
    public throwsExceptionIfNullPointer(): void {
        assert.throws(
            () => Strict.notNull(null, "Null is prohibited"),
            NullPointerException,
            "Null is prohibited"
        );
    }

    @Test
    public throwsExceptionIfUndefinedPointer(): void {
        assert.throws(
            () => Strict.notNull(undefined, "Undefined is prohibited"),
            NullPointerException,
            "Undefined is prohibited"
        );
    }

    @Test
    public returnsSameObjectReference(): void {
        const reference = new Object();
        assert.deepEqual(Strict.notNull(reference), reference);
    }

    @Test
    public excludesUndefined(): void {
        const definedString: string = Strict.notNull(process.env.INIT_CWD);
        assert.isString(definedString);
    }
}
