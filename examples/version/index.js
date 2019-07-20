try{
  window.onload = function() {
  alert(MiniNova.__VERSION__.NAME);
  }
}catch(e) {
  alert(e.name + ": " + e.message + "\n" + e.stack);
}