---
title: Shoot 'em up in Cocos Creator
titleTemplate: The Enemies
description: Shoot 'em up in Cocos Creator | The Enemies
Author: Daniele Tabanella
head:
  - - meta
    - name: keywords
      content: cocos creator
Updated: 2022-12-16
lastUpdated: false

---

# 👾 The Enemies

![The enemy prefab](./images/enemy.png)

## The `GameManager` node

The `GameManager` node is very important as it's responsible for the spawning of the enemies thanks to the `WaveFactory` component. It keeps also track of the score thanks to the `scoreKeeper` components that import the `scoreManager` instance.

```
GameManager
├─ WaveFactory
│  ├─ Wave Prefab
│  │  └─ EnemyFactory
│  │     ├─ ...
│  │     ├─ Enemy
│  │     └─ Enemy
│  ├─ ...
│  ├─ Wave Prefab
│  └─ Wave Prefab
└─ ScoreKeeper
```


## The `WaveFactory` component

The [`WaveFactory.ts`](https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/WaveFactory.ts) is responsible for spawning waves of enemies. It can loop through an array of `Wave` prefabs. When the scene starts the script creates a generator that yields all the waves. The wave instantiates the enemies and then after a given amount of time it instantiates the next one. 

## The `Wave`prefab

The `Wave` prefab is a container for enemies. It contains just one component, `EnemyFactory`, the script that instantiates the enemies and lets them follow a given path in the scene.

## The `EnemyFactory` component

The [`EnemyFactory.ts`](https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/EnemyFactory.ts) script handles the instantiation of the enemies (like `WaveFactory` does for waves, but this time the prefab is an `Enemy` node). It accepts an array of `Enemy` prefabs so that you can have different enemies in the same wave. It also accepts a `Path` prefab, so that every wave can have its path. It's time now to see how the `Enemy` prefab works.

## The `Enemy` prefab

The Enemy prefab has 8 components, 3 of them are built-in components, and the others are custom scripts. It is very similar to the `Player` node and we already discussed most of its components. It doesn't have `PlayerController` script but it has `Enemy` and `Score` components. 

```
Enemy
├─ cc.UITransform
├─ cc.CircleCollider2D
├─ cc.RigidBody2D
├─ Enemy.ts
├─ Health.ts
├─ DamageDealer.ts
├─ Shooter.ts
└─ Score.ts
```


## The `Enemy` component

The [`Enemy.ts`](https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/Enemy.ts) script is responsible for the enemy movement. It has the `followPath` method that iterates through some waypoints (waypoints are in the `Path` prefab but we'll get to that later) and it uses the `cc.tween` API to move the enemy from one waypoint to the next. When the enemy reaches the last waypoint which is outside of the camera boundaries it is destroyed.

## The `Score` component

The [`Score.ts`](https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/Score.ts) script is responsible for adding points to the score when the enemy is destroyed. It has a `score` property that is set by the inspector. When the enemy is destroyed the `ScoreKeeper` component is notified and the score is updated.

## The `Path` prefab

The `Path` prefab is a container for the waypoints. Waypoints are just regular nodes positioned in the scene. The `Enemy` component uses the `Path` component (it gets it from its parent, the `Wave` prefab) to follow the waypoints, giving the illusion of a path. 

```
Path
├─ Waypoint-001
├─ Waypoint-002
├─ Waypoint-003
├─ Waypoint-004
├─ Waypoint-005
├─ Waypoint-006
├─ Waypoint-007
└─ Waypoint-008
```

![A Prefab with its waypoints](./images/waypoints.png)

Paths can be very complex like the one in the image below that is used for the boss.

![A complex path](./images/waypoints.gif)

## Wrapping up

So this is it, we have now all the pieces to build a shoot 'em up game. I hope you enjoyed this tutorial and that you learned something new. Stay tuned for the next article!