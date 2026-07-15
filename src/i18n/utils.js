import { ui } from "./index";

export function useTranslations(locale) {
  return ui[locale];
}