export const supportLocaleList = ['ko-KR', 'en-US'] as const;
export const defaultLocale = 'ko-KR';
export type Locales = (typeof supportLocaleList)[number];
