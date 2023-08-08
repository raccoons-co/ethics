import {DisplayName, Test, TestClass} from "@raccoons-co/cleanway";
import {assert} from "chai";
import Optional from "../main/Optional";
import NoSuchElementException from "../main/NoSuchElementException";

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
    @DisplayName("ifPresent() doesNothing if empty")
    public doesNothing(): void {
        assert.doesNotThrow(() => {
            this.emptyOptional.ifPresent((value) => { // eslint-disable-line
                throw new NoSuchElementException("This statement should be unreachable");
            });
        });
    }
}
