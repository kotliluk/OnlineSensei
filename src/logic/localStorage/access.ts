import { Predicate } from '../../utils/function'


/**
 * Returns parsed number if the key exists in local storage and parsed number is valid.
 * If not, saves the given default value in local storage and returns it.
 */
export const getValidatedNumberFromLS = (
  key: string | undefined,
  validator: Predicate<number>,
  defaultValue: number,
): number => {
  if (key === undefined) {
    return defaultValue
  }

  const item = localStorage.getItem(key)
  const num = Number(item)

  if (item === null || !validator(num)) {
    localStorage.setItem(key, defaultValue.toString())
    return defaultValue
  }

  return num
}

/**
 * Returns saved item if the key exists in local storage and the item is valid.
 * If not, saves the given default value in local storage and returns it.
 */
export const getValidatedStringFromLS = (
  key: string | undefined,
  validator: Predicate<string>,
  defaultValue: string,
): string => {
  if (key === undefined) {
    return defaultValue
  }

  const item = localStorage.getItem(key)

  if (item === null || !validator(item)) {
    localStorage.setItem(key, defaultValue)
    return defaultValue
  }

  return item
}

/**
 * Returns saved item typed as given type if the key exists in local storage and the item is valid.
 * If not, saves the given default value in local storage and returns it.
 */
export const getValidatedTypeFromLS = <T extends string>(
  key: string | undefined,
  validator: Predicate<T>,
  defaultValue: T,
): T => {
  if (key === undefined) {
    return defaultValue
  }

  const item = localStorage.getItem(key)

  if (item === null || !validator(item as T)) {
    localStorage.setItem(key, defaultValue)
    return defaultValue
  }

  return item as T
}

/**
 * Saves given key-value pair into local storage if the key is defined.
 */
export const saveToLS = (key: string | undefined, value: string | number): void => {
  if (key !== undefined) {
    localStorage.setItem(key, value.toString())
  }
}