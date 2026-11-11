---
title: Placeholders
description: Placeholders which can be globally used in most text inputs
---

Placeholders are dynamic variables that can be used within cactus to display real-time information.  
They are formatted as `{category.name}` and are automatically replaced with the corresponding value by the `PlaceholderHandler`.

## Available Placeholders
All currentl build-in available placeholders

### Cactus

| Key | Description | Fallback |
| --- | --- | --- |
| `{cactus.version}` | Installed Cactus version. | - |
| `{cactus.dev}` | Indicates whether this is a dev build. | - |

### Player

| Key | Description | Fallback |
| --- | --- | --- |
| `{player.name}` | Your username. | - |
| `{player.health}` | Current HP. | `0` |
| `{player.max_health}` | Maximum HP. | `0` |
| `{player.hunger}` | Hunger level. | `0` |
| `{player.saturation}` | Saturation level. | `0` |
| `{player.xp.level}` | Current XP level. | `0` |
| `{player.xp.progress}` | XP progress (0.0 - 1.0). | `0` |
| `{player.x}` | X coordinate. | `0` |
| `{player.y}` | Y coordinate. | `0` |
| `{player.z}` | Z coordinate. | `0` |
| `{player.x.opposite}` | X coordinate in the opposite dimension. | `0` |
| `{player.y.opposite}` | Y coordinate in the opposite dimension. | `0` |
| `{player.z.opposite}` | Z coordinate in the opposite dimension. | `0` |
| `{player.chunk.x}` | Current chunk X position. | `0` |
| `{player.chunk.z}` | Current chunk Z position. | `0` |
| `{player.chunk.x.offset}` | Block offset inside the chunk (X). | `0` |
| `{player.chunk.z.offset}` | Block offset inside the chunk (Z). | `0` |
| `{player.rotation.yaw}` | Horizontal view rotation. | `0` |
| `{player.rotation.pitch}` | Vertical view rotation. | `0` |
| `{player.velocity.x}` | Movement vector X. | `0` |
| `{player.velocity.y}` | Movement vector Y. | `0` |
| `{player.velocity.z}` | Movement vector Z. | `0` |

### World

| Key | Description | Fallback |
| --- | --- | --- |
| `{world.biome}` | Current biome (formatted). | `Unknown` |
| `{world.difficulty}` | World difficulty. | - |
| `{world.weather}` | Weather state (Clear, Rain, Thunderstorm). | `Clear` |
| `{world.weather.rain}` | Is it raining (`true`/`false`). | `false` |
| `{world.weather.thunder}` | Is it thundering (`true`/`false`). | `false` |
| `{world.time}` | Game time as state (Day, Noon, Night, Midnight). | - |
| `{world.day.ticks}` | Elapsed ticks of the current day. | - |
| `{world.time.sec}` | World age in seconds. | `0` |
| `{world.time.min}` | World age in minutes. | `0` |
| `{world.time.hour}` | World age in hours. | `0` |
| `{world.time.day}` | World age in days. | `0` |
| `{world.time.week}` | World age in weeks. | `0` |
| `{world.time.formatted}` | Human-readable time (e.g. `1w 2d`). | `0s` |

### Server

| Key | Description | Fallback |
| --- | --- | --- |
| `{server.name}` | Display name of the server or world name. | - |
| `{server.address}` | Server IP or world name. | `cactusmod.xyz` |
| `{server.ping}` | Your latency to the server. | `0` |
| `{server.tps}` | Server performance (ticks per second). | `20.0` |
| `{server.brand}` | Full server brand (e.g. "Paper (Velocity)"). | `Unknown` |
| `{server.brand.short}` | Short server brand (e.g. "Paper"). | `Unknown` |
| `{server.packets.in}` | Average incoming packets. | `0` |
| `{server.packets.out}` | Average outgoing packets. | `0` |

### Game

| Key | Description | Fallback |
| --- | --- | --- |
| `{client.fps}` | Current frames per second. | `100` |
| `{client.time}` | Current system time (HH:mm:ss). | - |
| `{client.version}` | Client Minecraft version. | `Unknown` |
| `{client.protocol}` | Network protocol version. | `0` |
| `{client.brand}` | Client version type/brand. | `Unknown` |
| `{client.is_singleplayer}` | Whether you are in singleplayer. | `false` |
| `{client.render.distance}` | Render distance setting. | `0` |
| `{client.gui.scale}` | GUI scale. | `0` |
| `{client.vsync}` | VSync status. | `false` |
| `{client.fullscreen}` | Fullscreen enabled. | `false` |
| `{client.window.width}` | Window width in pixels. | `0` |
| `{client.window.height}` | Window height in pixels. | `0` |
| `{input.cps.left}` | Left-clicks per second. | `0` |
| `{input.cps.right}` | Right-clicks per second. | `0` |


### Hardware & JVM

| Key | Description | Fallback |
| --- | --- | --- |
| `{system.os.name}` | Operating system name. | `Unknown` |
| `{system.os.arch}` | OS architecture (e.g. x64). | `Unknown` |
| `{system.os.version}` | OS version. | `Unknown` |
| `{system.user.name}` | OS username. | `Unknown` |
| `{system.user.home}` | Path to the home directory. | `Unknown` |
| `{system.cpu.cores}` | Available CPU cores. | `0` |
| `{system.memory.total.mb}` | Total reserved RAM. | `0` |
| `{system.memory.free.mb}` | Free RAM in the JVM heap. | `0` |
| `{system.memory.used.mb}` | Currently used RAM. | `0` |
| `{system.memory.max.mb}` | Maximum RAM for the JVM. | `0` |
| `{java.version}` | Installed Java version. | `Unknown` |
| `{jvm.name}` | Java VM name. | `Unknown` |
| `{jvm.vendor}` | Java VM vendor. | `Unknown` |
| `{jvm.version}` | Java VM version. | `Unknown` |
| `{jvm.uptime.ms}` | JVM uptime (ms). | `0` |
| `{jvm.threads.count}` | Number of active threads. | `0` |
| `{jvm.threads.daemon}` | Number of daemon threads. | `0` |
| `{jvm.gc.count}` | Number of garbage collections. | `0` |
| `{jvm.gc.time.ms}` | Time spent on GC (ms). | `0` |