const genDom = new GeneratorDom()
document.getElementById('options').appendChild(genDom.init())
document.getElementById('clearButton').addEventListener('click', function () {
  genDom.clear()
})
document.getElementById('undoButton').addEventListener('click', function () {
  genDom.undo()
})
document.getElementById('leftButton').addEventListener('click', function () {
  genDom.setAlign(LEFT_ALIGN)
})
document.getElementById('rightButton').addEventListener('click', function () {
  genDom.setAlign(RIGHT_ALIGN)
})
document.getElementById('defaultButton').addEventListener('click', function () {
  genDom.clear()
  genDom.setAlign(LEFT_ALIGN)
  genDom.addElement(findElement('<font color="red">Red foreground</font>'))
  genDom.addElement(findElement('Mode'), genDom.leftAlign)
  genDom.addElement(findElement('<font color="black">Reset foreground</font>'))
  genDom.addElement(findElement('Space character'))
  genDom.addElement(findElement('Left chevron character'))
  genDom.addElement(findElement('Left chevron character'))
  genDom.addElement(findElement('Space character'))
  genDom.addElement(findElement('Short filename'))
  genDom.addElement(findElement('Space character'))
  genDom.addElement(findElement('Right chevron character'))
  genDom.addElement(findElement('Right chevron character'))
  genDom.update()
  genDom.setAlign(RIGHT_ALIGN)
  genDom.addElement(findElement('Modified flag'))
  genDom.addElement(findElement('Help flag'))
  genDom.addElement(findElement('Read-only flag'))
  genDom.addElement(findElement('Space character'))
  genDom.addElement(findElement('<font color="blue">Blue foreground</font>'))
  genDom.addElement(findElement('Git branch'))
  genDom.addElement(findElement('<font color="black">Reset foreground</font>'))
  genDom.addElement(findElement('Space character'))
  genDom.addElement(findElement('Long filename'))
  genDom.addElement(findElement('Colon character'))
  genDom.addElement(findElement('Colon character'))
  genDom.addElement(findElement('<font color="green">Green foreground</font>'))
  genDom.addElement(findElement('Current line number'))
  genDom.addElement(findElement('Slash character'))
  genDom.addElement(findElement('Total line number'))
  genDom.addElement(findElement('<font color="black">Reset foreground</font>'))
  genDom.addElement(findElement('Pipe character'))
  genDom.addElement(findElement('File type'))
  genDom.update()
})

function findElement (title) {
  return options.find(elem => {
    return elem.title === title
  })
};
