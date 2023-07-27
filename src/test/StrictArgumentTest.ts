import {Test, TestClass} from "@raccoons-co/cleanway";
import {Immutable, Strict} from "../main";
import {assert} from "chai";
import IllegalArgumentException from "../main/IllegalArgumentException";


@TestClass
@Immutable
export default class StrictArgumentTest {

    @Test
    public throwsExceptionIfFalseExpression(): void {
        assert.throws(
            () => Strict.argument(false, "Illegal argument"),
            IllegalArgumentException,
            "Illegal argument"
        );
    }

    @Test
    public doesNotThrowsExceptionIfTrueExpression(): void {
        assert.doesNotThrow(
            () => Strict.argument(true, "Argument is ok"),
            IllegalArgumentException,
            "Argument is ok"
        );
    }
}
