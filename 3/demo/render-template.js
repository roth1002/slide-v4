const render = function (str, data) {
  let tpl = str.replace(/<%=([\s\S]+?)%>/g, function(match, code) {
    return `'+ obj.${code} +'`;
  });
  tpl = `var tpl = '${tpl}';\nreturn tpl;`
  const compiled = new Function('obj', tpl);
  return compiled(data);
}

const tpl = 'Hello <%=username%> !!';
console.log(render(tpl, { username: 'cph' }));
