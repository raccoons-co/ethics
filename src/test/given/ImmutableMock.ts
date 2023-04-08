import {Immutable} from "../../main";

@Immutable
export default class ImmutableMock {

    private mutableProperty = "Some value";

    public setProperty(value: string) {
        this.mutableProperty = value;
    }
}
