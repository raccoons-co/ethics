import {DisplayName, Test, TestClass} from "@raccoons-co/cleanway";
import {assert} from "chai";
import NoSuchElementException from "../main/NoSuchElementException";
import {Optional} from "../main";

@TestClass
export default class EmptyOptionalTest {

    private readonly emptyOptional = Optional.empty();

    @Test
    @DisplayName("Optional.empty() returns instance of Optional")
    public returnsInstanceOfOptional(): void {
        assert.instanceOf(this.emptyOptional, Optional);
    }

    @Test
    @DisplayName("isEmpty() returns `True` if empty")
    public returnsTrueEmptinessIfEmpty(): void {
        assert.isTrue(this.emptyOptional.isEmpty());
    }

    @Test
    @DisplayName("isPresent() returns `False` if empty ")
    public returnsFalsePresenceIfEmpty(): void {
        assert.isFalse(this.emptyOptional.isPresent());
    }

    @Test
    @DisplayName("get() throws `NoSuchElementException` if empty")
    public throwsExceptionForGetIfEmpty(): void {
        assert.throws(() => this.emptyOptional.get(), NoSuchElementException);
    }

    @Test
    @DisplayName("orElseThrow() throws `NoSuchElementException` if empty")
    public throwsExceptionForElseThrowIfEmpty(): void {
        assert.throws(() => this.emptyOptional.orElseThrow(), NoSuchElementException);
    }

    @Test
    @DisplayName("Optional.ofNullable(null) returns empty optional ")
    public returnsEmptyIfValueIsNull(): void {
        const optional = Optional.ofNullable(null);
        assert.isTrue(optional.isEmpty());
    }

    @Test
    @DisplayName("Optional.ofNullable(undefined) returns empty optional")
    public returnsEmptyIfValueIsUndefined(): void {
        const optional = Optional.ofNullable(undefined);
        assert.isTrue(optional.isEmpty());
    }

    @Test
    @DisplayName("ifPresent() does nothing if empty")
    public doesNothing(): void {
        assert.doesNotThrow(() => {
            this.emptyOptional.ifPresent(
                (value) => { // eslint-disable-line @typescript-eslint/no-unused-vars
                    assert.fail("This statement should not be executed");
                });
        });
    }

    @Test
    @DisplayName("orElse(otherValue) returns correct other value if empty")
    public returnsCorrectOtherValueForOrElse(): void {
        assert.equal(this.emptyOptional.orElse(8), 8);
    }

    @Test
    @DisplayName("ifPresentOrElse() performs given empty-based action if empty")
    public performsGivenEmptyActionIfEmpty(): void {
        assert.throws(() => {
            this.emptyOptional.ifPresentOrElse(
                (value) => { // eslint-disable-line @typescript-eslint/no-unused-vars
                    assert.ok("This statement should not be executed");
                },
                () => {
                    assert.fail("Fails intentionally");
                });
        });
    }
}
