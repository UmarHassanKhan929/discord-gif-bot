# Discord GIF Bot

A simple Discord bot that fetches and shares GIFs from Giphy, built with Node.js and discord.js.

## Features

- Search and share GIFs using the Giphy API
- Simple command-based interface
- Lightweight and easy to self-host

## Commands

| Command | Description | Example |
|---------|-------------|---------|
| `&ping` | Test bot responsiveness | `&ping` |
| `&gif [keyword]` | Search for a GIF | `&gif cats` |

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [Discord Bot Token](https://discord.com/developers/applications)
- [Giphy API Key](https://developers.giphy.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/discord-gif-bot.git
   cd discord-gif-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your credentials:
   ```env
   token=YOUR_DISCORD_BOT_TOKEN
   gifkey=YOUR_GIPHY_API_KEY
   ```

4. Start the bot:
   ```bash
   node index.js
   ```

## Invite Link

[Add the bot to your server](https://discord.com/oauth2/authorize?client_id=832510213042470953&scope=bot)

## Tech Stack

- **Runtime:** Node.js
- **Library:** discord.js v12
- **API:** Giphy
- **Environment:** dotenv

## License

This project is licensed under the ISC License.
