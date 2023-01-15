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
# prev: 'Get Started | Markdown'

---

# The Scenes

## The folder structure

With time you will find that the `Assets` folder will become a mess, so I suggest to organize it in a way that makes sense to you. I've used the following structure:

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

::: tip 
I had a lot of issues with system fonts so I've finally used a bitmap one. I've used [bmGlyph](https://www.bmglyph.com), which is a great app that does plenty of things like gradient and other effects.
:::

::: warning
Save your time and just use `mp3` files for music and sound effects, `ogg` files are not supported in some browsers.
:::

## The `Scenes`

First thing first, the game is composed of 4 scenes. The `Preload` scene is where the game starts it loads immediatly the `MainMenu` scene that is the first scene that is shown to the player when the game is launched. The `Game` scene is the main scene, where the game is played. The `GameOver` scene is shown when the player loses.

```
Scenes
├─ Preload
├─ MainMenu
├─ Game
└─ GameOver
```

::: tip
You set the game starting scene not in preferences but during the build phase so that you can, for instance, start with a different scene according to the target platform.
:::

## The `Preload` Scene

The `Preload` scene is used to instantiate two [singletons](https://refactoring.guru/design-patterns/singleton). One is for managing levels and the other to play the game music. Singletons are used to share data between scenes. This tecnique is also used in [Unity](https://gamedevbeginner.com/singletons-in-unity-the-right-way/).

## The Singletons

The `LevelManager` singleton is used to manage the the scenes, the `AudioManager` singleton is used to play the game music.

## The `MainMenu` Scene

The `MainMenu` and `GameOver` scenes are very similar. They both have some `Buttons` that are used to navigate between the scenes. Buttons have click events connected to `LevelManager` script that loads the scene. The `GameOver` scene also has a `Label` that shows the player's high score.

## The `Game` Scene

The game scene  is very simple, there's a `Canvas`, a `Camera`, a `Player` node of course, scrolling `Background` / `Foreground` nodes and `Enemies` prefabs that are instantiated that move towards the player. The player can shoot `Projectiles` that destroy enemies. The game is over when the player's health is over. The UI is composed of a `ProgressBar` and a `Score`. There is also a `GameManager` node that hosts the script that manages the game as the `EnemyFactory` and the `ScoreKeeper`. We will see how these work in the next sections. You will also notice a parent node for the `Player` which is `ShipBoundaries`. It's used to limit the player's movement inside the canvas and it uses the `Widget` component to stick to the canvas (even if the game is not responsive).

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

These two nodes are placeholder for textures, the `Background` node has `Stars` and `Clouds` textures, those nodes are just sprites with a script attached. The script is [`Scroller.ts`](https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/Scroller.ts) and it does just one thing, it scrolls the texture. How ? It clones the node so that it can scroll infinitely. The two nodes forms a column that begin to scroll at a given speed, when the bottom one reaches the end of the canvas (and it is out of sight) it moves at the top of the other and the process repeats. This is how the scrolling effect is achieved.

## The `Player` Node

The `Player` node is the most complex node in the game, it has a lot of scripts attached to it, so it deserves a [section of its own](/articles/cocos-creator/shoot-em-up-in-cocos-creator/the_player). 