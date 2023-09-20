import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
//GET
export const GET = async (request,{params})=>{
    try{
        await connectToDB();
        const prompt = await Prompt.find({creator : params.id}).populate('creator');
        if(!prompt){
            return new Response("Prompt does not exit", {status : 404});
        }
        return new Response(JSON.stringify(prompts), {status : 200})   
    }catch(error){
        return new Response("Failed to fetch all prompts" , {status: 500});
    }
}
//DELETE


//PATCH
export const PATCH = async(request, {params})=>{
    const {prompt, tag} = await request.json();
    try{
        await connectToDB();
        const existingPrompt = await connectToDB();
    }catch(error){
        
    }
}




