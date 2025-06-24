/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const parts1 = version1.split(".");
  const parts2 = version2.split(".");

  if (parts1.length !== parts2.length) {
    const length = Math.max(parts1.length, parts2.length);

    for (let i = 0; i < length; i++) {
      if (parts1[i] === undefined) {
        parts1[i] = "0";
      }
      if (parts2[i] === undefined) {  
        parts2[i] = "0";
      }
    }
  }

  let value = 0;

  for (let i = 0; i < parts1.length; i++) {
    const v1 = Number(parts1[i]);
    const v2 = Number(parts2[i]);

    if (v1 < v2) {
      value = -1;
      break;
    } else if (v1 > v2) {
      value = 1;
      break;
    }
  }

  return value;
};
