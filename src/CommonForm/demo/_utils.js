// 说明
// 规整方法用于修正输入数据，可减少错误输入
// 
// 规整方法的应用，例如输入手机号码，自动去掉非数字的字符
// 规整方法的缺点，可能导致与用户输入预期不符（如复制的字符中含空格或特殊符号，会自动过滤字符）
// 除了规整方法处理，还有另一个方案，如果用户输入不符合格式，将格式告知用户。这样可能更合理？
// 终极方案，格式和规整同时使用？


// 密码支持的特殊字符
export const SUPPORT_SPECIAL_CHAR = "-_!@#$%^&*";

// 判断是否为字符串
function isString(str) {
  return typeof str === "string";
}

// 规整化非空字符（如名称输入）
export function normalizeNotWhiteSpace(val) {
  if (isString(val)) {
    return val.replace(/\s/g, "");
  }
  return val;
}

// 规整化中文（如中文姓名输入）
export function normalizeChinese(val) {
  if (isString(val)) {
    return val.replace(/[^\u4e00-\u9fa5]/g, "");
  }
  return val;
}

// 规整化数字，不含小数点（如手机号、身份证号等输入）
export function normalizeNumber(val) {
  if (isString(val)) {
    return val.replace(/[^\d]/g, "");
  }
  return val;
}

// 规整化数字和大写字母（如统一社会信用代码输入）
export function normalizeNumberAndWordUpperCase(val) {
  if (isString(val)) {
    return val.replace(/[^\da-z]/ig, "").toUpperCase();
  }
  return val;
}

// 规整化身份证输入
export function normalizeIdCard(val) {
  if (isString(val)) {
    return val.replace(/[^\d|x]/ig, "").toUpperCase();
  }
  return val;
}

// 规整化脱敏 数字输入
export function normalizeNumberAndMask(val) {
  if (isString(val)) {
    return val.replace(/[^\d\*]/g, "");
  }
  return val;
}

// 规整化脱敏 身份证输入
export function normalizeIdCardAndMask(val) {
  if (isString(val)) {
    return val.replace(/[^\d|x|\*]/ig, "").toUpperCase();
  }
  return val;
}

// 过滤密码的数字、字母，剩余的为特殊字符
export function checkSpecialChar(val, chars = SUPPORT_SPECIAL_CHAR) {
  let ret = true;

  // 过滤出特殊字符
  const specialChar = val.replace(/[a-z]|\d/gi, "");

  // 不存在特殊字符
  if (specialChar.length <= 0) {
    return ret;
  }

  // 当前特殊字符拆分数组
  const specialCharArr = specialChar.split("");
  specialCharArr.some(item => {
    if (chars.indexOf(item) === -1) {
      ret = false;
    }
    return !ret
  });

  return ret;
}


// 是否为银行卡号
export function isBankCardNo(val) {
  const regNum = /^\d+$/g; // 纯数字

  if (!val || typeof val !== "string") {
    return false;
  }

  if (!regNum.test(val) || val.length > 30 || val.length < 8) {
    return false;
  }

  return true;
}