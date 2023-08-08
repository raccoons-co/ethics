import {Arguments, ArgumentsSource, DisplayName, ParameterizedTest, Test, TestClass} from "@raccoons-co/cleanway";
import {assert} from "chai";
import Optional from "../main/Optional";

@TestClass
export default class OptionalTest {

    private readonly optional = Optional.of(7);

    @Test
    @DisplayName("Optional.of(value) returns instance of Optional")
    public returnsInstanceOfOptional(): void {
        assert.instanceOf(this.optional, Optional);
    }

    @Test
    @DisplayName("isPresent() returns `True` if has value")
    public returnsTruePresenceIfHasValue(): void {
        assert.isTrue(this.optional.isPresent());
    }

    @Test
    @DisplayName("isEmpty() returns `False` if has value")
    public returnsFalseEmptinessIfHasValue(): void {
        assert.isFalse(this.optional.isEmpty());
    }

    @Test
    @DisplayName("get() returns correct present value")
    public returnsCorrectValueForGet(): void {
        assert.equal(this.optional.get(), 7);
    }

    @Test
    @DisplayName("orElseThrow() returns correct present value")
    public returnsCorrectValueForOrElseThrow(): void {
        assert.equal(this.optional.orElseThrow(), 7);
    }

    @Test
    @DisplayName("Optional.ofNullable(value) returns optional that has correct value")
    public returnsEmptyIfValueIsNull(): void {
        const optional = Optional.ofNullable(8);
        assert.equal(optional.get(), 8);
    }

    @ParameterizedTest
    @ArgumentsSource(Array.of(
        new Arguments(null),
        new Arguments(undefined),
    ))
    @DisplayName("Optional.of(null|undefined) throws `NullPointerException`")
    public throwsExceptionOfNullValue(value: null | undefined): void {
        assert.throws(() => Optional.of(value));
    }

    @Test
    @DisplayName("ifPresent() performs the given action if has value")
    public performsGivenAction(): void {
        let presentValue = 0;
        this.optional.ifPresent((value) => {
            presentValue = value;
        });
        assert.equal(presentValue, 7);
    }
}
