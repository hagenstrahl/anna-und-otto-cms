import S from "@sanity/desk-tool/structure-builder";
import { GiCakeSlice } from "react-icons/gi";

export default () =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["product", "productList", "cakeGallery"].includes(listItem.getId())
      ),
      S.listItem()
        .title("Torten")
        .icon(GiCakeSlice)
        .child(S.editor().schemaType("cakeGallery").documentId("cakeGallery")),
    ]);
