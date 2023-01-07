import{_ as e}from"./chunks/shoot-em-up.b8536380.js";import{_ as a,o as t,c as n,a as o}from"./app.3d78a5a2.js";const s="/assets/enemy.c6e2f68f.png",r="/assets/waypoints.d2d14c43.png",c="/assets/waypoints.568251e5.gif",w=JSON.parse(`{"title":"Cocos Creator","titleTemplate":"Shoot 'em up in Cocos Creator the GameManager Node","description":"Shoot 'em up in Cocos Creator the GameManager Node","frontmatter":{"title":"Cocos Creator","titleTemplate":"Shoot 'em up in Cocos Creator the GameManager Node","description":"Shoot 'em up in Cocos Creator the GameManager Node","Author":"Daniele Tabanella","head":[["meta",{"name":"keywords","content":"cocos creator"}]],"Updated":"2022-12-16T00:00:00.000Z","lastUpdated":false,"image":"/images/shoot-em-up.png"},"headers":[{"level":3,"title":"The GameManager Node is the core of the game, it contains the EnemySpawner component and the ScoreKeeper.","slug":"the-gamemanager-node-is-the-core-of-the-game-it-contains-the-enemyspawner-component-and-the-scorekeeper","link":"#the-gamemanager-node-is-the-core-of-the-game-it-contains-the-enemyspawner-component-and-the-scorekeeper","children":[]},{"level":2,"title":"The EnemySpawner component","slug":"the-enemyspawner-component","link":"#the-enemyspawner-component","children":[]},{"level":2,"title":"The Waveprefab","slug":"the-waveprefab","link":"#the-waveprefab","children":[]},{"level":2,"title":"The WaveConfig component","slug":"the-waveconfig-component","link":"#the-waveconfig-component","children":[]},{"level":2,"title":"The Enemy prefab","slug":"the-enemy-prefab","link":"#the-enemy-prefab","children":[]},{"level":2,"title":"The Enemy component","slug":"the-enemy-component","link":"#the-enemy-component","children":[]},{"level":2,"title":"The Score component","slug":"the-score-component","link":"#the-score-component","children":[]},{"level":2,"title":"The Path prefab","slug":"the-path-prefab","link":"#the-path-prefab","children":[]}],"relativePath":"articles/cocos-creator/shoot-em-up-in-cocos-creator/the_game_manager.md","lastUpdated":1673116767000}`),p={name:"articles/cocos-creator/shoot-em-up-in-cocos-creator/the_game_manager.md"},h=o('<p><img src="'+e+`" alt="Shoot &#39;em up in Cocos Creator"></p><h1 id="the-gamemanager" tabindex="-1">The GameManager <a class="header-anchor" href="#the-gamemanager" aria-hidden="true">#</a></h1><h3 id="the-gamemanager-node-is-the-core-of-the-game-it-contains-the-enemyspawner-component-and-the-scorekeeper" tabindex="-1">The GameManager Node is the core of the game, it contains the <code>EnemySpawner</code> component and the <code>ScoreKeeper</code>. <a class="header-anchor" href="#the-gamemanager-node-is-the-core-of-the-game-it-contains-the-enemyspawner-component-and-the-scorekeeper" aria-hidden="true">#</a></h3><h2 id="the-enemyspawner-component" tabindex="-1">The <code>EnemySpawner</code> component <a class="header-anchor" href="#the-enemyspawner-component" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/EnemySpawner.ts" target="_blank" rel="noreferrer"><code>EnemySpawner.ts</code></a> is responsible for spawning enemies. It can loop through an array of <code>Waves</code> of enemies. When the scene starts the script creates a generator that yields all the waves. The wave instantiates the enemies and then after a given ammount of time it instantiate the next one.</p><h2 id="the-waveprefab" tabindex="-1">The <code>Wave</code>prefab <a class="header-anchor" href="#the-waveprefab" aria-hidden="true">#</a></h2><p>The <code>Wave</code> prefab is a container for the enemies. It contains just one component, <code>WaveConfig</code>, the script that instantiates the enemies and that let them follow a given path in the scene. The <code>WaveConfig</code> script accepts an array of prefab of enemies and one <code>Path</code> prefab (plus some other fancy time paramters).</p><h2 id="the-waveconfig-component" tabindex="-1">The <code>WaveConfig</code> component <a class="header-anchor" href="#the-waveconfig-component" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/WaveConfig.ts" target="_blank" rel="noreferrer"><code>WaveConfig.ts</code></a> script handles the instantiation of the enemies (like <code>EnemySpawner</code> does for waves, but this time the prefab is an <code>Enemy</code> node). It accepts and array of <code>Enemy</code> so that you can have different enemies in the same wave. It also accepts a <code>Path</code> prefab, so that every wave can have its own path. It&#39;s time now to see how the <code>Enemy</code> prefab works.</p><h2 id="the-enemy-prefab" tabindex="-1">The <code>Enemy</code> prefab <a class="header-anchor" href="#the-enemy-prefab" aria-hidden="true">#</a></h2><p>The Enemy prefab has 8 components, 3 of them are built-in components, the others are custom scripts. It is very similar to the <code>Player</code> node and we already discussed about most of its components. It doesn&#39;t have <code>PlayerController</code> script but it has <code>Enemy</code> and <code>Score</code> components.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Enemy</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ cc.UITransform</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ cc.CircleCollider2D</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ cc.RigidBody2D</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Enemy.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Health.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ DamageDealer.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Shooter.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ Score.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+s+`" alt="The enemy prefab"></p><h2 id="the-enemy-component" tabindex="-1">The <code>Enemy</code> component <a class="header-anchor" href="#the-enemy-component" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/Enemy.ts" target="_blank" rel="noreferrer"><code>Enemy.ts</code></a> script is responsible for the enemy movement. It has the <code>followPath</code> method that iterates through some waypoins (waypoints are in the <code>Path</code> prefab but we&#39;ll get to that later) and it uses the <code>cc.tween</code> API to move the enemy from one waypoint to the next. When the enemy reaches the last waypoint which is outside of the camera boundaries it is destroyed.</p><h2 id="the-score-component" tabindex="-1">The <code>Score</code> component <a class="header-anchor" href="#the-score-component" aria-hidden="true">#</a></h2><p>The <a href="https://github.com/theRenard/cocos-creator-laser-defender/blob/master/assets/Scripts/Score.ts" target="_blank" rel="noreferrer"><code>Score.ts</code></a> script is responsible for adding points to the score when the enemy is destroyed. It has a <code>score</code> property that is set in the inspector. When the enemy is destroyed the <code>ScoreKeeper</code> component is notified and the score is updated.</p><h2 id="the-path-prefab" tabindex="-1">The <code>Path</code> prefab <a class="header-anchor" href="#the-path-prefab" aria-hidden="true">#</a></h2><p>The <code>Path</code> prefab is a container for the waypoints. Waypoints are just regular nodes positioned in the scene. The <code>Enemy</code> component uses the <code>Path</code> component (it gets it from its parent, the <code>Wave</code> prefab) to follow the waypoints, giving the illusion of a path.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Path</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Waypoint-001</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Waypoint-002</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Waypoint-003</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Waypoint-004</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Waypoint-005</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Waypoint-006</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ Waypoint-007</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ Waypoint-008</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="`+r+'" alt="A Prefab with its waypoints"></p><p>Paths can be very complex like the one in the image below that is used for the boss.</p><p><img src="'+c+'" alt="A complex path"></p>',23),i=[h];function l(d,m,f,y,g,b){return t(),n("div",null,i)}const v=a(p,[["render",l]]);export{w as __pageData,v as default};
