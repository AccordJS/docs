---
title: "What is AccordJS?"
description: "Introducing AccordJS - a type-safe, modular Discord bot framework that puts developer experience first"
author: "AccordJS Team"
publishDate: 2026-03-14
tags: ["discord", "typescript", "framework", "bots"]
---

*This is the content for the first blog post to be integrated into the site*

# What is AccordJS?

If you've ever built a Discord bot with discord.js, you know the pain. What starts as a simple bot quickly becomes a tangled mess of event handlers, scattered logic, and type assertions that make you question your life choices. We've all been there.

**AccordJS is here to change that.**

## The Problem with Discord Bot Development

Building Discord bots today feels like building a house without blueprints:

- **Type Safety?** What's that? Raw discord.js objects leak everywhere, and `any` types become your reluctant friend
- **Organization?** Good luck keeping your event handlers, commands, and business logic separate
- **Testing?** Hope you enjoy mocking the entire Discord.js ecosystem
- **Scaling?** Every new feature becomes exponentially harder to maintain

Sound familiar? We thought so.

## Enter AccordJS: Discord Bots Done Right

AccordJS is a **typed, modular Discord bot framework** built on three core principles:

### 🛡️ Type Safety First
```typescript
// No more any types or Discord.js object soup
bot.events.subscribe('MESSAGE_CREATE', (event: MessageCreateEvent) => {
  // event is fully typed, IntelliSense works, refactoring is safe
  if (event.content.startsWith('!hello')) {
    // Handle command with confidence
  }
});
```

### 🧩 Plugin Architecture
```typescript
// Features as composable plugins
export class ModerationPlugin implements Plugin {
  name = 'moderation';

  register(ctx: PluginContext) {
    ctx.events.subscribe('MEMBER_JOIN', this.handleMemberJoin);
    ctx.commands.register('ban', this.banCommand);
  }

  // Clean, testable methods
  protected handleMemberJoin = (event: MemberJoinEvent) => {
    // Welcome logic here
  };
}
```

### 🔄 Event Normalization
```typescript
// Discord complexity hidden behind clean interfaces
type MessageCreateEvent = {
  type: "MESSAGE_CREATE";
  serverId?: string;
  channelId: string;
  userId: string;
  content: string;
  timestamp: number;
  // No raw Discord.js objects leaking through
}
```

## Why AccordJS Matters

### For Individual Developers
- **Faster Development**: IntelliSense and type checking catch bugs before runtime
- **Easier Testing**: Mock clean interfaces instead of Discord.js internals
- **Better Organization**: Plugin system keeps features separate and manageable

### For Teams
- **Consistent Architecture**: Everyone follows the same patterns
- **Safer Refactoring**: TypeScript catches breaking changes across the codebase
- **Easier Onboarding**: New team members understand the structure immediately

### For Discord Communities
- **More Reliable Bots**: Type safety and better testing lead to fewer crashes
- **Faster Feature Development**: Plugin architecture makes adding features straightforward
- **Better Performance**: Event normalization and clean separation optimize bot responsiveness

## How AccordJS Works

AccordJS sits between your bot logic and Discord, handling the messy parts:

```
Your Bot Logic
      ↓
   AccordJS Framework
      ↓
   Discord Gateway
```

1. **Event Ingestion**: Discord events are captured and normalized into typed interfaces
2. **Plugin Distribution**: Events are distributed to registered plugins
3. **Type Safety**: Everything is strongly typed - no `any` types allowed
4. **Clean APIs**: Simple, intuitive interfaces for common Discord operations

## Getting Started (Coming Soon)

While AccordJS is still in development, here's what getting started will look like:

```bash
npm install accordjs
```

```typescript
import { AccordBot, IntentFlags } from 'accordjs';
import { WelcomePlugin } from './plugins/welcome';

const bot = new AccordBot({
  intents: [IntentFlags.GUILD_MESSAGES, IntentFlags.MESSAGE_CONTENT],
});

// Register plugins
bot.use(new WelcomePlugin());

// Start the bot
bot.start(process.env.DISCORD_TOKEN);
```

That's it. No boilerplate, no configuration hell, just a working, maintainable Discord bot.

## The Road Ahead

AccordJS is being built by developers who've felt the pain of discord.js complexity. We're creating the framework we wish existed when we started building Discord bots.

**Coming features:**
- 🔧 **Command System**: Intuitive command handling with automatic parsing
- 📊 **Built-in Analytics**: Track bot usage and performance out of the box
- 🧪 **Testing Utilities**: Mock Discord interactions with ease
- 📚 **Rich Documentation**: Comprehensive guides and API reference
- 🏪 **Plugin Marketplace**: Discover and share community plugins

## Join the Movement

Tired of fighting discord.js instead of building features? Ready for Discord bot development that doesn't make you want to tear your hair out?

**Follow our progress:**
- ⭐ [Star us on GitHub](https://github.com/AccordJS)
- 💬 [Join our Discord](https://discord.gg/accordjs)
- 🐦 [Follow us on X](https://x.com/accordjs)

AccordJS is coming soon. Discord bot development is about to get a whole lot better.

---

*Want to contribute to AccordJS? Check out our [GitHub organization](https://github.com/AccordJS) and join the discussion in our [Discord server](https://discord.gg/accordjs). We're building this framework with the community, for the community.*