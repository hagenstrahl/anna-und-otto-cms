// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items(
      S.documentTypeListItems().filter(
        (listItem) => !["product", "productList"].includes(listItem.getId())
      )
    );
