// Crear conjunto de nodos (temas de teoría de grafos)
const nodes = new vis.DataSet([
  { id: 0, label: 'Teoría de Grafos', shape: 'star', color: '#06b6d4', font: { size: 20 }, url: 'index.html' },
  { id: 1, label: '1.1 Tipos de grafos', url: 'tipos-de-grafos.html' },
  { id: 2, label: '1.2 Representación\nde grafos', url: 'representacion.html' },
  { id: 3, label: '1.3 Isomorfismo', url: 'isomorfismo.html' },
  { id: 4, label: '1.4 Rutas y circuitos', url: 'rutas-circuitos.html' },
  { id: 5, label: '1.5 Ruta más corta', url: 'ruta-mas-corta.html' },
  { id: 6, label: '1.6 Grafos planos', url: 'grafos-planos.html' },
  { id: 7, label: '1.7 Coloreado\nde grafos', url: 'coloreado.html' }
]);

// Crear conjunto de aristas (relaciones entre nodos)
const edges = new vis.DataSet([
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 0, to: 3 },
  { from: 0, to: 4 },
  { from: 0, to: 5 },
  { from: 0, to: 6 },
  { from: 0, to: 7 }
]);

// Obtener el contenedor HTML donde se insertará el grafo
const container = document.getElementById('graph');

// Agrupar nodos y aristas en un objeto de datos
const data = { nodes, edges };

// Configuraciones de visualización del grafo
const options = {
  nodes: {
    shape: 'dot',
    size: 16,
    font: {
      color: 'white',        // Color del texto
      strokeWidth: 4,        // Grosor del borde del texto
      strokeColor: 'black',  // Color del borde del texto
      face: 'Arial'
    },
    borderWidth: 2
  },
  edges: {
    color: '#ffffff',
    width: 2,
    smooth: true
  },
  physics: {
    enabled: true,
    stabilization: false,
    barnesHut: {
      gravitationalConstant: -1000, // Fuerza de repulsión entre nodos
      springLength: 150,            // Distancia "ideal" entre nodos conectados
      springConstant: 0.02,         // Elasticidad del enlace
      damping: 0.25                 // 🔧 Amortiguación (0 = muy libre, 1 = muy rígido)
      // Puedes ajustar damping para controlar el movimiento cuando arrastras nodos
    },
    minVelocity: 0.10            // 🔧 Velocidad mínima antes de detener el movimiento
    // Aumenta este valor si quieres que el grafo esté en movimiento constante
  },
  layout: {
    improvedLayout: true,
    randomSeed: 42                 // Misma disposición inicial cada vez
  },
  interaction: {
    hover: true,
    tooltipDelay: 100,
    dragNodes: true,              // Permite arrastrar nodos individualmente
    dragView: true,               // Permite mover la vista del grafo (el conjunto)
    zoomView: true                // Permite no hacer zoom
    // se puede desactivar alguna de estas opciones :)
  }
};

// Crear el grafo en el contenedor con los datos y configuraciones
const network = new vis.Network(container, data, options);

// Evento al hacer clic en un nodo
network.on('click', function (params) {
  if (params.nodes.length > 0) {
    // Obtener el ID del nodo clicado
    const nodeId = params.nodes[0];
    const node = nodes.get(nodeId);

    // Si el nodo tiene una URL definida, redirigir a esa página
    if (node.url) {
      window.location.href = node.url;
    }
  }
});
