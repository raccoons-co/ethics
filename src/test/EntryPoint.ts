import {CleanWayBuilder} from "@raccoons-co/cleanway";
import StrictNotNullTest from "./StrictNotNullTest";
import StrictArgumentTest from "./StrictArgumentTest";
import ImmutableObjectTest from "./ImmutableObjectTest";

CleanWayBuilder.instance()
    .use(StrictNotNullTest)
    .use(StrictArgumentTest)
    .use(ImmutableObjectTest)
    .build();
