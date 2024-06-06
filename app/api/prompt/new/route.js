import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
    const { prompt ,userId, tag } = await req.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({ 
            creator: userId, 
            prompt,
            tag 
        });

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {
            status: 201
        })
    } catch (error) {
        return new Response("Failed to create a new prompt", {
            status: 500
        })
    }
}

// You are a professional web developer. I`m going to provide you with a snippet of code, and you can give me advice on how to make it cleaner, more readable and more efficient.