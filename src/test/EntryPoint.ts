import {CleanWayBuilder} from "@raccoons-co/cleanway";
import StrictTest from "./StrictTest";

CleanWayBuilder.instance()
    .assign(new StrictTest())
    .build();
