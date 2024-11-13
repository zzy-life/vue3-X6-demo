export default (graph,curCell) => {
  graph.value.on('blank:click', () => {
    console.log('blank:click');
    curCell.value = null
  })
}
