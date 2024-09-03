const hasMinLength = (value, minLength) => {
  return value.length >= minLength;
};

export const isKoreanName = (value, minLength = 2) => {
  const koreanRegex = /^[가-힣]+$/;
  return koreanRegex.test(value) && value.length >= minLength;
};

export const isPhoneNumber = (value) => {
  return /^010-\d{4}-\d{4}$/.test(value);
};
