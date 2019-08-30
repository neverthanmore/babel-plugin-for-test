module.exports = function (babel) {
  return {
    visitor: {
      Identifier() {
        console.log("Called!");
      }
    }
  }
}