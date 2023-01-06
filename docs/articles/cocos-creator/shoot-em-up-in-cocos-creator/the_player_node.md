---
title: Cocos Creator
titleTemplate: Shoot 'em up in Cocos Creator the Player Node
description: Shoot 'em up in Cocos Creator the Player Node
Author: Daniele Tabanella
head:
  - - meta
    - name: keywords
      content: cocos creator
Updated: 2022-12-16
lastUpdated: false
image: /images/shoot-em-up.png

---

![Shoot 'em up in Cocos Creator](./images/shoot-em-up.png)

# The Player Node

### The Player Node is the main character of the game, it's a spaceship that can move and shoot lasers. It contains a lot of components, but we will see them one by one.

## The `Player` Children Nodes

The Player has 2 children nodes, the `Engine`, which is a particle system, and the `Ship` which is a sprite. I've found that in many tutorials the player node contains the sprite component, but I think it's better to use a sprite as a child of a node, so you can add other components (sprite or particles) to the player node. 

```
Player
├─ Engine
└─ Ship
```

## The Components

The Player Node has 10 components, 3 of them are built-in components, the others are custom scripts. We will see them one by one.

```
Player
├─ cc.UITransform
├─ cc.CircleCollider2D
├─ cc.RigidBody2D
├─ Player.ts
├─ PlayerInput.ts
├─ Health.ts
├─ DamageDealer.ts
├─ Shooter.ts
└─ FireHomingMissile.ts

```

## The built-in Components

`cc.UITransform` is a built-in component that allows you to position the node in the UI. It's not necessary for the player, but it's useful to see the position of the node in the editor. `cc.CircleCollider2D` is a built-in component that allows you to add a circle collider to the node. A circle in this case is better to handle the shape of the ship. `cc.RigidBody2D` is a built-in component that allows you to add a rigid body to the node, as there's no physic involved in this game we use it only to detect collisions.

## The `Player.ts` script

The [`Player.ts`](https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/Player.ts) script handles the player position, it respect the boundaries of the parent node with the `math.clamp` utility. the `move` method is called in the `update` method and it take into account both `deltatime` ([why?](https://drewcampbell92.medium.com/understanding-delta-time-b53bf4781a03)) and `movespeed` variables. It exposes also the `onMove` and `onFire` methods that are called by the `PlayerInput.ts` script.


## The `PlayerInput.ts` script

The [`PlayerInput.ts`](https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/PlayerInput.ts) script handles the player input, it's a very simple script that uses the `input.on` method for events `KEY_DOWN`, `KEY_DOWN` and `GAMEPAD_INPUT`. When the event occurs it calls the `onMove` or `onFire` methods of the `Player.ts` class. It handles also the deadzone of the gamepad to avoid drift.

