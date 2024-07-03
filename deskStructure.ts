import { GiCakeSlice } from "react-icons/gi";
import { GrRestaurant } from "react-icons/gr";
import { StructureBuilder } from "sanity/structure";

export default (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "product",
            "productCategory",
            "productList",
            "menu",
            "cakeGallery",
          ].includes(listItem.getId() ?? "")
      ),
      S.listItem()
        .title("Speisekarte")
        .icon(GrRestaurant)
        .child(S.editor().schemaType("menu").documentId("menu")),
      S.listItem()
        .title("Torten")
        .icon(GiCakeSlice)
        .child(S.editor().schemaType("cakeGallery").documentId("cakeGallery")),
    ]);
