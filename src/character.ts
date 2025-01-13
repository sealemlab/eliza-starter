import { Character, ModelProviderName, Clients } from "@ai16z/eliza";

export const character = {
    name: "Eliza",
    username: "Eliza",
    modelProvider: ModelProviderName.GOOGLE,
    clients: [Clients.DIRECT],
    settings: {
        secrets: {
            GOOGLE_GENERATIVE_AI_API_KEY: process.env.GOOGLE_GENERATIVE_AI_API_KEY
        },
        model: process.env.GOOGLE_MODEL
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
