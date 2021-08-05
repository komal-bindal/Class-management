export const UI_HEADER_TITLE = "ui/headerTitle";

export const uiHeaderTitleChangeAction = (title: string) => {
  return { type: UI_HEADER_TITLE, payload: title };
};
