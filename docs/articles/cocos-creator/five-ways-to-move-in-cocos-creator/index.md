---
title: Cocos Creator
titleTemplate: Cinque modi di muovere un elemento
description: Cinque modi di muovere un elemento in Cocos Creator
Author: Daniele Tabanella
head:
  - - meta
    - name: keywords
      content: cocos creator
Updated: 2022-12-16
lastUpdated: false
image: /images/5-ways-to-move.png
prev: 'Get Started | Markdown'

---

![5 ways to move in cocos creator](./images/5-ways-to-move.png)

# Five ways to move an element in Cocos Creator

One of the first things you'll want to do for your game is probably to move a sprite, an object, from point A to point B. There are various ways to move an element in Cocos Creator, some affect the `ridigBody` and the others on the position of the `Node`, let's see them together:

## 1. Position

Changing the position of an element is probably the first solution, just assign a new position to the `Node`.

```ts
    const ammount = 10;
    const position = this.node.getPosition();
    this.node.setPosition(new Vec3(position.x + ammount, position.y)); 
```

## 2. Translation

Similar to position, but it's relative to the world position of the `Node`.

```ts
    this.node.translate(new Vec3(ammount, 0), this.worldPosition);
```

## 3. Impulse



```ts
    this.rigidBody.applyLinearImpulseToCenter(new Vec2(ammount, 0), true);

```

## 4. Force

```ts
    this.rigidBody.applyForceToCenter(new Vec2(ammount, 0), true);
```

## 5. Velocity

```ts
    this.rigidBody.linearVelocity = new Vec2(velocity.x - ammount, velocity.y);
```

![image](./images/move.gif)


## Fronde vestras pomi

Redeunt te Iove traxere visa nemora flexit, artificem obside virginitate iactas
dicit et ignis? Ardua ergo, sequenti in erat cinximus,
[et](http://pro.org/solvit-in) Meropis [nobilis multis](http://nervisdeum.com/),
viri sum resistit!

1. Desuetudine lugebat arceor pietasque a pondere tenet
2. Ratis mihi iubar robora fallique te Troiam
3. Mediis laudem in sonanti passibus nec arma
4. Non disces multi totis sapiente
5. Totiens non modo tristis factus dissipat est

Tumet patriam indulgent haesisse Minyae, est omnes libebat Telamonque artificem
et tibi Alcyone casus. Fluctus nunc vigiles madefacta deriguere quem.