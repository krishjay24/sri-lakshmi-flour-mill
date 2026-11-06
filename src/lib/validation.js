export function validPhone(value) {
  const length = value.replace(/\D/g, '').length;
  return length >= 10 && length <= 15;
}
