function show(text) {
  document.getElementById("app").innerText = "hello," + text;
}
//通过CommonJs规范导出show函数
module.exports = show;
