import {CleanWayBuilder} from "@raccoons-co/cleanway";
import StrictTest from "./StrictTest";
import ImmutableObjectTest from "./ImmutableObjectTest";

CleanWayBuilder.instance()
    .use(StrictTest)
    .use(ImmutableObjectTest)
    .build();
