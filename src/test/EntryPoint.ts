import {CleanWayBuilder} from "@raccoons-co/cleanway";
import StrictNotNullTest from "./StrictNotNullTest";
import StrictArgumentTest from "./StrictArgumentTest";
import ImmutableObjectTest from "./ImmutableObjectTest";
import OptionalTest from "./OptionalTest";
import EmptyOptionalTest from "./EmptyOptionalTest";
import OptionalIntegrationTest from "./OptionalIntegrationTest";

CleanWayBuilder.instance()
    .use(StrictNotNullTest)
    .use(StrictArgumentTest)
    .use(ImmutableObjectTest)
    .use(OptionalTest)
    .use(EmptyOptionalTest)
    .use(OptionalIntegrationTest)
    .build();
