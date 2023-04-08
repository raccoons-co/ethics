import ImmutableMock from "./ImmutableMock";

export default class ExtendedWithPropertyMock extends ImmutableMock {

    private readonly value: string;

    constructor() {
        super();
        this.value = "Some value";
    }
}
