import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import event from "./documents/event";
import menu from "./documents/menu";
import productList from "../models/product-list";
import product from "../models/product";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([event, menu, productList, product]),
});
