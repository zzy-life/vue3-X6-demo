export default (graph) => {
  graph.value.on('edge:connected', (args) => {
    console.log('edge:connected');
    const edge = args.edge;
    console.log('起始点',edge.getSource());
    console.log('终点',edge.getTarget());
    const node = args.currentCell;
    const elem = args.currentMagnet;
    const portId = elem.getAttribute('port');

    // 触发 port 重新渲染
    node.setPortProp(portId, 'connected', true);
    edge.zIndex = -1;
    // 更新连线样式
    edge.attr({
      line: {
        strokeDasharray: '',
        targetMarker: 'classic'
      }
    });
    edge.appendLabel({
      attrs: {
        label: {
          text: ""
        }
      }
    });
  });
}
