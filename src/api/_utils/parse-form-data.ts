type ParsedFormData = {
  [key: string]: string | ParsedFormData | string[];
};

/**
 * Parse FormData object to a nested object
 * @param formData
 */
export function parseFormData(formData: FormData): ParsedFormData {
  const obj: ParsedFormData = {};

  function setNestedProperty(
    path: string[],
    value: string,
    target: ParsedFormData,
  ) {
    const key = path.shift();
    if (!key) return;

    if (path.length === 0) {
      if (Array.isArray(target[key])) {
        target[key].push(value);
      } else if (target[key] !== undefined) {
        target[key] = [target[key] as string, value];
      } else {
        target[key] = value;
      }
    } else {
      if (target[key] === undefined) {
        target[key] = isNaN(Number(path[0])) ? {} : [];
      }
      setNestedProperty(path, value, target[key] as ParsedFormData);
    }
  }

  formData.forEach((value, key) => {
    const path = key.split(/\[|\]\[|\]/).filter(Boolean);
    setNestedProperty(path, value as string, obj);
  });

  return obj;
}
