---
title: Cocos Creator
titleTemplate: Shoot 'em up in Cocos Creator
description: Shoot 'em up in Cocos Creator
Author: Daniele Tabanella
head:
  - - meta
    - name: keywords
      content: cocos creator
Updated: 2022-12-16
lastUpdated: false
image: /images/shoot-em-up.png
# prev: 'Get Started | Markdown'

---

![Shoot 'em up in Cocos Creator](./images/shoot-em-up.png)

# Shoot 'em up in Cocos Creator

### Developing a game in Cocos Creator is very simple, but if you are new to this engine you may have some difficulty understanding how it works. In this article, we'll see how to create a simple shoot 'em up game, in which we have to shoot enemies that move towards our character.

## ⚠️ Disclaimer

I will not describe every step as I assume you have a basic knowledge of Cocos Creator engine and you know how to code, if this is not the case I strongly suggest to start reading the [official documentation](https://docs.cocos.com/creator/manual/en/) and come back here once you have a basic grasp of the engine. I will instead describe the logic behind the code and how the different pieces work togheter. If you want to follow along, you can download the project from [github](https://github.com/theRenard/cocos-creator-laser-defender). The final result is [here](https://tabanella.me/cocos-creator-laser-defender/). All assets are from [Kenney](https://kenney.nl/assets)! Laser Defender is a game I've created for the [Udemy course](https://www.udemy.com/course/unitycourse/). I've decided to port it to Cocos Creator to see how it works and to compare it with Unity. I've used Cocos Creator 3.6.2.

Another thing, I'm not a game developer, I'm a web developer, so I'm sure there are better ways to do this, but this is how I did it.

## The `Assets` folder

The assets are organized in a very simple way, there are 9 folders, one for each type of asset. 

```
Assets
├─ Textures
│  └─ 🖼️
├─ Fonts
│  └─ 🖼️
├─ Music
│  └─ 🎹
├─ Particles
│  └─ 💥
├─ Prefabs
│  ├─ Effects
│  ├─ Enemies
│  ├─ Particles
│  ├─ Paths
│  ├─ Projectiles
│  └─ Waves
├─ Scenes
│  └─ 🎬
├─ Scripts
│  └─ xxx.ts
└─ Sounds
   └─ 🔔
```

There are no surprises here, the `Textures` folder contains all the textures used in the game, the `Fonts` folder contains the font used in the game, the `Music` folder contains the music used in the game, the `Particles` folder contains the particle effects used in the game, the `Prefabs` folder contains the prefabs used in the game, the `Scenes` folder contains the scenes used in the game, the `Scripts` folder contains the scripts used in the game and the `Sounds` folder contains the sounds used in the game.

::: tip 
I had a lot of issues with fonts so I've finally used a bitmap font, I've used [bmGlyph](https://www.bmglyph.com) app but there are free alternatives.
:::

::: warning
Just use `mp3` files for music and sound effects, `ogg` files are not supported in some browsers.
:::


## The `Scenes`

First thing first, the game is composed of 4 Scenes: `Game`, `GameOver`, `MainMenu` and `Preload`. The `Game` scene is the main scene, where the game is played. The `GameOver` scene is shown when the player loses. The `MainMenu` scene is the first scene that is shown when the game is launched. The `Preload` scene is used to load two [singletons](https://refactoring.guru/design-patterns/singleton), one for managing levels and the other for music. Singletons are used to share data between scenes, [Unity](https://gamedevbeginner.com/singletons-in-unity-the-right-way/) does the exact same thing.

```
Scenes
├─ Game
├─ GameOver
├─ MainMenu
└─ Preload
```

## The `Game` Scene Hierarchy

The game scene hieararchy is very simple, there's a `Canvas`, a `Camera`, a `Player` node of course, scrolling `Background` / `Foreground` nodes and `Enemies` prefabs that are instantiated that move towards the player. The player can shoot `Lasers` that destroy enemies. The game is over when the player's health is over. The UI is composed of a `ProgressBar` and a `Score`. There is also a `GameManager` node that hosts the script that manages the game as the `EnemySpawner` and the `ScoreKeeper`. We will see how these work in the next sections. You will also notice a parent node for the `Player` which is `ShipBoundaries`. It's used to limit the player's movement inside the canvas and it uses the `Widget` component to stick to the canvas (even if the game is not responsive).

```
Game
└─ Canvas
   ├─ Camera
   │
   ├─ Background
   │  ├─ Stars
   │  └─ Clouds
   │
   ├─ ShipBoundaries
   │  └─ Player
   │     ├─ Engine
   │     └─ Ship
   │
   ├─ Foreground
   │  └─ Clouds
   │
   ├─ UI
   │  ├─ ProgressBar
   │  │  └─ Bar
   │  └─ Score
   │
   └─ GameManager

```

## The `Camera` node

The camera node is a child of the `Canvas` node, it's used to follow the player. The script attached to the camera is [`CameraShake.ts`](https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/CameraShake.ts) and it does exactly what it says, it shakes the camera. It's used when the player is hit by an enemy. The script is very simple, it just moves the camera in a random direction for a given amount of time. The camera is moved by changing the `position` and the `rotation` property of the node. 


## `Background` and `Foreground` Nodes

These two nodes are placeholder for textures, the `Background` node has `Stars` and `Clouds` textures, those nodes are just sprites with a script attached. The script is [`Scroller.ts`](https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/Scroller.ts) and it does just one thing, it scrolls the texture. How ? It clones the node so that it can scroll infinitely. The two nodes forms a column that begin to scroll at a given speed, when the bottom one reaches the end of the canvas it moves at the top of the other and the process repeats. This is how the scrolling effect is achieved.

## The `Player` Node

The `Player` node is the most complex node in the game, it has a lot of scripts attached to it, so it deserves a [section of its own](/articles/cocos-creator/shoot-em-up-in-cocos-creator/the_player_node). 