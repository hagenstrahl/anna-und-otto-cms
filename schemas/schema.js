import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import appointments from "./documents/appointments";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([appointments]),
});
