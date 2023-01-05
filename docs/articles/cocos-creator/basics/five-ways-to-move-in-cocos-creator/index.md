---
title: Cocos Creator
titleTemplate: Five ways to move an element in Cocos Creator
description: Five ways to move an element in Cocos Creator
Author: Daniele Tabanella
head:
  - - meta
    - name: keywords
      content: cocos creator
Updated: 2022-12-16
lastUpdated: false
image: /images/5-ways-to-move.png

---

![5 ways to move in cocos creator](./images/5-ways-to-move.png)

# Five ways to move an element in Cocos Creator

### One of the first things you'll want to do for your game is probably to move something from point _A_ to point _B_. There are various ways to move an element in Cocos Creator, some affect the `ridigBody` and the others on the position of the `Node`, based on what you want to achieve you might chose one or another, let's see them together.

## 1. Position

Changing the position of an element is probably the easiest solution, just assign a new position to the `Node`. The position is relative to the parent `Node`. Using position is like teleporting the element to a new position so it's not affected by the `RigidBody` or the `Physics` of the game. Strange things can happen if you use position and physics together (for instance partial or no collisions). You can use `setPosition` or `setWorldPosition` to set the position of the `Node`.

```ts
    // get the current position
    const newPosition = this.node.getPosition();
    // set the new position
    this.node.setPosition(new Vec3(newPosition.x + 10, newPosition.y + 10));
```

You can choose to use `setPosition` or `setWorldPosition` based on the coordinate space you want to use. `setPosition` uses the coordinate space of the parent `Node` while `setWorldPosition` uses the coordinate space of the `World`.

```ts
    this.node.setWorldPosition(new Vec3(0, 0));
```

## 2. Translation

Similar to position, but perform a translation instead of a teleport. The translation is relative to the parent `Node`. You can use a second parameter `nodeSpace` to set the coordinate space `WORLD` or `LOCAL`.

```ts
    this.node.translate(new Vec3(ammount, 0), NodeSpace.WORLD);
```

## 3. Force

The force is applied to the `RigidBody` of the element. You can use `applyForceToCenter` or `applyForce` to apply the force to the center of the `RigidBody` or to a specific point. This is a literal pushing motion where the bigger the mass of the Object, the slower it will speed up. You can use a second parameter `wake` to wake up the `RigidBody` if it's sleeping. Force Add a continuous force to the rigidbody, using its mass.

```ts
    this.rigidBody.applyForceToCenter(new Vec2(ammount, 0), true);
```

## 4. Impulse

The impulse is applied to the `RigidBody` of the element. You can use `applyLinearImpulseToCenter` or `applyLinearImpulse` to apply the impulse to the center of the `RigidBody` or to a specific point. You can use a second parameter `wake` to wake up the `RigidBody` if it's sleeping. Impulse Add an instant force impulse to the rigidbody, using its mass.

```ts
    this.rigidBody.applyLinearImpulseToCenter(new Vec2(ammount, 0), true);

```

## 5. Velocity

The velocity is applied to the `RigidBody` of the element. You can use `linearVelocity` to set the velocity of the `RigidBody`. You can use a second parameter `wake` to wake up the `RigidBody` if it's sleeping.

```ts
    this.rigidBody.linearVelocity = new Vec2(velocity.x - ammount, velocity.y);
```

## Demo

You can find a demo here: [cocos-engine-5-ways-to-move](https://tabanella.me/cocos-engine-5-ways-to-move/).<br>
The repository of the project is here: [https://github.com/theRenard/cocos-engine-5-ways-to-move](https://github.com/theRenard/cocos-engine-5-ways-to-move)

![image](./images/5-ways-to-move_example.gif)
