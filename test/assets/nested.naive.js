export const body = `
function nested () {
  const alpha = function () { Object.assign({}, this) }
  function beta () { return this |> deco }
  function gamma (x,y) { 
    const g1 = function () { return x }
    const g2 = function () { return y } 
  }
}`
