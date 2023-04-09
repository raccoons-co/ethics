import ImmutableMock from "./ImmutableMock";

export default class ClassWithPropertyExtendsImmutableMock extends ImmutableMock {

    private readonly value: string;

    constructor() {
        super();
        this.value = "Some value";
    }
}
