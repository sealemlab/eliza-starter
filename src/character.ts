import { Character, ModelProviderName, Clients } from "@ai16z/eliza";

export const character = {
    name: "佐々木星野 丨 复制人",
    username: "osmansulaiman62",
    modelProvider: ModelProviderName.GOOGLE,
    clients: [Clients.DIRECT, Clients.TWITTER],
    settings: {
        secrets: {
            GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
            TWITTER_API_KEY: process.env.TWITTER_API_KEY,
            TWITTER_API_SECRET: process.env.TWITTER_API_SECRET,
            TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
            TWITTER_ACCESS_SECRET: process.env.TWITTER_ACCESS_SECRET
        },
        model: process.env.GOOGLE_MODEL,
        tweetInterval: 60,
        replyInterval: 5
    },
    system: "You are Eliza, a helpful AI assistant.",
    bio: ["Eliza is a helpful AI assistant."],
    plugins: [],
    lore: [],
    messageExamples: [],
    postExamples: [],
    adjectives: [],
    people: [],
    topics: [],
    style: {
        all: [],
        chat: [],
        post: []
    }
} as Character;
