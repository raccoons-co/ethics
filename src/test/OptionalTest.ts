import {Arguments, ArgumentsSource, DisplayName, ParameterizedTest, Test, TestClass} from "@raccoons-co/cleanway";
import {assert} from "chai";
import Optional from "../main/Optional";
import NoSuchElementException from "../main/NoSuchElementException";

@TestClass
export default class OptionalTest {

    private readonly emptyOptional = Optional.empty();

    @Test
    public emptyNullObjectIsInstanceOfOptional(): void {
        assert.instanceOf(Optional.empty(), Optional);
    }

    @Test
    @DisplayName("isPresent() returns `False` if empty")
    public returnsFalsePresenceIfEmpty(): void {
        assert.isFalse(this.emptyOptional.isPresent());
    }

    @Test
    @DisplayName("isPresent() returns `True` if has value")
    public returnsTruePresenceIfHasValue(): void {
        const optional = Optional.of(7);
        assert.isTrue(optional.isPresent());
    }

    @Test
    @DisplayName("isEmpty() returns `False` if has value")
    public returnsFalseEmptinessIfHasValue(): void {
        const optional = Optional.of(7);
        assert.isFalse(optional.isEmpty());
    }

    @Test
    @DisplayName("isEmpty() returns `True` if empty")
    public returnsTrueEmptinessIfEmpty(): void {
        assert.isTrue(this.emptyOptional.isEmpty());
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
    @DisplayName("get() returns correct value")
    public returnsCorrectValueForGet(): void {
        const optional = Optional.of(7);
        assert.equal(optional.get(), 7);
    }

    @Test
    @DisplayName("get() from Optional.empty() throws `NoSuchElementException`")
    public throwsExceptionIfGetFromEmpty(): void {
        assert.throws(() => this.emptyOptional.get(), NoSuchElementException);
    }

    @Test
    @DisplayName("orElseThrow() returns correct value")
    public returnsCorrectValueForOrElseThrow(): void {
        const optional = Optional.of(7);
        assert.equal(optional.orElseThrow(), 7);
    }

    @Test
    @DisplayName("orElseThrow() from Optional.empty() throws `NoSuchElementException`")
    public throwsExceptionForElseThrowOnEmpty(): void {
        assert.throws(() => this.emptyOptional.orElseThrow(), NoSuchElementException);
    }

    @Test
    @DisplayName("Optional.ofNullable(null) returns optional empty")
    public returnsEmptyIfValueIsNull(): void {
        const optional = Optional.ofNullable(null);
        assert.isTrue(optional.isEmpty());
    }

    @Test
    @DisplayName("Optional.ofNullable(undefined) returns optional empty")
    public returnsEmptyIfValueIsUndefined(): void {
        const optional = Optional.ofNullable(undefined);
        assert.isTrue(optional.isEmpty());
    }
}
