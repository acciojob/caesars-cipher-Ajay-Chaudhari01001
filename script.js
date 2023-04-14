function rot13(str) {
  var decoded = "";
  
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (char.match(/[A-Z]/)) {
      var code = char.charCodeAt(0);
      if (code >= 65 && code <= 77) {
        char = String.fromCharCode(code + 13);
      } else {
        char = String.fromCharCode(code - 13);
      }
    }
    decoded += char;
  }
  
  return decoded;
}
