import dotenv from 'dotenv';
dotenv.config(); // Load .env file

import { Client, GatewayIntentBits } from 'discord.js'; // Import discord.js

const client = new Client({
    intents: [ // Define the intents that the bot will use
        GatewayIntentBits.Guilds, // Guilds intent
        GatewayIntentBits.GuildMessages, // Guild messages intent
        GatewayIntentBits.GuildMembers, // Guild members intent
        GatewayIntentBits.DirectMessages // Direct messages intent
    ]
}); // Create a new discord client;

client.login(process.env.DISCORD_BOT_TOKEN); // Login to discord with the token from the .env file

client.on('messageCreate', async(message) => {
    console.log("MESSAGE RECEIVED: ", message); // Log the message content
})