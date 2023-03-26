import {CleanWayBuilder} from "@raccoons-co/cleanway";
import StrictTest from "./StrictTest";
import ImmutableObjectTest from "./ImmutableObjectTest";

CleanWayBuilder.instance()
    .assign(new StrictTest())
    .assign(new ImmutableObjectTest())
    .build();
