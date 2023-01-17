---
title: Cocos Creator
titleTemplate: Pathfinding 2D in Cocos Creator
description: Pathfinding 2D in Cocos Creator
Author: Daniele Tabanella
head:
  - - meta
    - name: keywords
      content: cocos creator
Updated: 2022-12-16
lastUpdated: false
# prev: 'Get Started | Markdown'

---

# A* Algorithm in Cocos Creator
The first thing to notice when reading `Pathfinding.js` documentation is that we need to create a `Grid` object. The `Grid` object is a matrix of nodes. Each node has a `walkable` property that tells us if the node is walkable or not (0 for walkable, 1 for blocked). The `Grid` object is used to create a pathfinding system. Here's an example of a `Grid` object:

```js
var matrix = [
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
];
var grid = new PF.Grid(matrix);
```

To find a path between two points we need to create a `Finder` object. The `findPath` method takes 5 parameters: the starting point (x, y), the destination point (x, y), and the `Grid` object. 

```js
var path = finder.findPath(1, 2, 4, 2, grid);
```

The result of the `Finder` object is an array of points. Each point is a node in the `Grid` object. The first point is the starting point. The last point is the destination point. The points in the middle are the nodes that the pathfinding system will use to find the shortest path between the starting point and the destination point. Here's an example of a path:

```js
[ [ 1, 2 ], [ 1, 1 ], [ 2, 1 ], [ 3, 1 ], [ 3, 2 ], [ 4, 2 ] ]
```
