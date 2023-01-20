---
title: Shoot 'em up in Cocos Creator
titleTemplate: The Game
description: Shoot 'em up in Cocos Creator | The Game
Author: Daniele Tabanella
head:
  - - meta
    - name: keywords
      content: cocos creator
Updated: 2022-12-16
lastUpdated: false
# prev: 'Get Started | Markdown'

---

![Shoot 'em up in Cocos Creator](./images/shoot-em-up.png)

# Shoot 'em up in Cocos Creator

### Developing a simple game like Shoot 'Em Up in Cocos Creator is not hard, but if you are new to this engine you may have a hard time understanding how to do it. In this article, I'll try to explain the logic behind the code of a simple Shoot 'Em UP and how the different pieces work together.

## :warning: Disclaimer

I will not describe the code line by line for two reasons: 
   1. I assume you have a basic knowledge of Cocos Creator engine and its API but if this is not the case I strongly suggest to start reading the [official [documentation](https://docs.cocos.com/creator/manual/en/) and coming back here once you have a basic grasp of it. 
   2. I also assume that you know how to code. The game's code is pretty simple and straightforward, also the components are really small. If you don't know how to code maybe a game is not the first thing you wanna do... even though it's a great way to learn.
   
I will instead describe the logic behind the code and how the different scenes, nodes, and components work together.

Laser Defender is a game I've learned thanks to this [Udemy course](https://www.udemy.com/course/unitycourse/). I've decided to port it to Cocos Creator to see how it works and to compare it with Unity. I've used Cocos Creator 3.6.2.

Another thing, I'm not a game developer, I'm a web developer, so I'm sure there are better ways to do this, but this is how I did it.

All assets are from [Kenney](https://kenney.nl/assets)! Really great work!

If you want to follow along, you can download the project from [GitHub](https://github.com/theRenard/cocos-creator-laser-defender) and start reading.


## The Game

The game is a simple shoot 'em up. The player controls a spaceship that can move left and right and shoot. The enemies move toward the player and the player can shoot them. The game is over when the player's health is over. The player can collect power-ups that increase the player's health and the player's score. You can control it with a gamepad or with a keyboard.

<div class="game-iframe">
   <iframe src="/games/laser-defender/index.html" title="laser defender" frameborder="0" style="aspect-ratio: 9 / 16;" ></iframe>
</div>
