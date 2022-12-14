// Locale constants
export enum LOCALE_IDS {
  english = "en",
  french = "fr"
}

export const LOCALES = [
  {
    id: LOCALE_IDS.english,
    name: "locale.english"
  },
  {
    id: LOCALE_IDS.french,
    name: "locale.french"
  }
]

// Storage constants
export const USER_STORAGE_KEY = 'user_token'

// Layout constants
export const STATUS_BAR_HEIGHT = 20;
export const SAFE_VIEW_AREA_HEIGHT = 44;