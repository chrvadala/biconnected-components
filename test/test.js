const Graph = require('../src/graph');
const assert = require('chai').assert;


describe('test biconnected components', function () {
  it('test graph', function () {

    let g = new Graph(12);
    g.addEdge(0, 1);
    g.addEdge(1, 0);
    g.addEdge(1, 2);
    g.addEdge(2, 1);
    g.addEdge(1, 3);
    g.addEdge(3, 1);
    g.addEdge(2, 3);
    g.addEdge(3, 2);
    g.addEdge(2, 4);
    g.addEdge(4, 2);
    g.addEdge(3, 4);
    g.addEdge(4, 3);
    g.addEdge(1, 5);
    g.addEdge(5, 1);
    g.addEdge(0, 6);
    g.addEdge(6, 0);
    g.addEdge(5, 6);
    g.addEdge(6, 5);
    g.addEdge(5, 7);
    g.addEdge(7, 5);
    g.addEdge(5, 8);
    g.addEdge(8, 5);
    g.addEdge(7, 8);
    g.addEdge(8, 7);
    g.addEdge(8, 9);
    g.addEdge(9, 8);
    g.addEdge(10, 11);
    g.addEdge(11, 10);


    console.log(g);

    g.BCC();

    console.log("Above are " + g.count + " biconnected components in graph");

  });
});
