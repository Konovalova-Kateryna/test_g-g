
export function setError(groupId, hasError) {
  document.getElementById(groupId)?.classList.toggle('has-error', hasError);
}

export function clearErrors(...ids) {
  ids.forEach(id => setError(id, false));
}

export function validateEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}