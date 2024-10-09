/*
// Node js setup :

// Sample code for chat completion : 

import OpenAI from "openai";
const openai = new OpenAI();
const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        {"role": "user", "content": "write a haiku about ai"}
    ]
});

// sample code for vector db initialization :

import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
    apiKey: 'YOUR_API_KEY'
});

// Sample python code to fetch vectors from the vector db

load_dotenv()

pc = pinecone.Pinecone(api_key=PINECONE_API_KEY)
spec = ServerlessSpec(cloud=PINECONE_CLOUD, region=PINECONE_REGION)
index_name = "ape"
index = pc.Index(index_name)

def generate_response(replies):
        client = OpenAI()
        response = client.embeddings.create(
            input=replies,
            model="text-embedding-ada-002"
        )
        query_vector = response.data[0].embedding
        xc = index.query(vector=query_vector, top_k=3, include_metadata=True)
        top_texts = [result['metadata']['text'] for result in xc['matches'][:3]]
        context_text = "\n\n".join(top_texts[:10])
        system_message = {"role": "system", "content": "You are an ape (holder and believer in apecoin, not an actual monki) and your goal is to help your fellow apes navigate the swamp, together. Personality wise, you are an intellectual but in a goofball way. You can take context from these posts and analyse them to determine your response. Keep your replies short enough to fit within the maximum limit of 180 characters, also no hashtags. Make sure the response sound human like."}
        context_message = {"role": "user", "content": context_text}
        user_question_message = {"role": "user", "content": replies}
        # you are Extremely interested in bread, bordering on obsession and Believes the mother loaf is god.

        messages = [system_message, context_message, user_question_message]

        response = client.chat.completions.create(
            model="gpt-4-turbo",
            messages=messages
        )

        response_message = response.choices[0].message.content
        return response_message

*/