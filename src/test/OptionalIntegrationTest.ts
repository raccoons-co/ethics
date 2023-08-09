import {DisplayName, Test, TestClass} from "@raccoons-co/cleanway";
import {assert} from "chai";
import {Optional} from "../main";

@TestClass
export default class OptionalIntegrationTest {

    private readonly emptyArrayMock = [];
    private readonly arrayMock = [7];
    private readonly mapMock = new Map<string, number>().set("existedKey", 8);

    @Test
    @DisplayName("Optional.ofNullable([].pop() returns empty optional")
    public handlesEmptyArrayPop(): void {
        const optional = Optional.ofNullable(this.emptyArrayMock.pop());
        assert.isTrue(optional.isEmpty());
    }

    @Test
    @DisplayName("Optional.ofNullable([7].pop()).orElseThrow() returns correct value")
    public returnsCorrectValueForArrayPop(): void {
        const optional = Optional.ofNullable(this.arrayMock.pop());
        assert.equal(optional.orElseThrow(), 7);
    }

    @Test
    @DisplayName("Optional.ofNullable(map.get('nonExistedKey')) returns empty optional")
    public handlesMapGetOfNonExistedKey(): void {
        const optional = Optional.ofNullable(this.mapMock.get("nonExistedKey"));
        assert.isTrue(optional.isEmpty());
    }

    @Test
    @DisplayName("Optional.ofNullable(map.get('existedKey')).orElseThrow() returns correct value")
    public returnsCorrectValueForExistedKeyInMap(): void {
        const optional = Optional.ofNullable(this.mapMock.get("existedKey"));
        assert.equal(optional.orElseThrow(), 8);
    }
}
