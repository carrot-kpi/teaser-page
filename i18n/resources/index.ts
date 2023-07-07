import type en from "./en";
import { DEFAULT_LOCALE, type SUPPORTED_LOCALES } from "@/middleware";

export type I18nDictionary = { [key in keyof typeof en]: string };
export type I18nDictionaryGetter = () => Promise<I18nDictionary>;

const i18nDictionaries: {
    [K in (typeof SUPPORTED_LOCALES)[number]]: I18nDictionaryGetter;
} = {
    en: () => import("./en").then((module) => module.default),
};

export async function getI18nDictionary(
    locale: string
): Promise<I18nDictionary> {
    return (i18nDictionaries[locale] || i18nDictionaries[DEFAULT_LOCALE])();
}
