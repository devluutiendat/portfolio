"use server";

import { information } from "@/data/information";
import { auth } from "@/lib/auth";
import { client } from "@/openai/openai";
import { redirect } from "next/navigation";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

export const askAIAboutMeAction = async (
    newQuestions: string[],
    responses: string[],
) => {
    const user = await auth();
    if (!user) redirect('/api/auth/signin');

    if (!information) {
        return "My information is not currently available.";
    }

    const formattedInfo = `
        Personal Information:
        - Name: ${information.name}
        - Job Title: ${information.jobTitle}
        - Date of Birth: ${information.birth}
        - Born: ${information.born}
        - Location: ${information.location}
        - Email: ${information.email}
        - Phone: ${information.phone}
        - GitHub: ${information.github}
        - Facebook: ${information.facebook}

        Education:
        - University: ${information.university}
        - Major: ${information.major}

        Career Goals:
        ${information.goal}

        About Me:
        ${information.about}

        Skills:
        - Technical Skills: ${information.skills.join(', ')}
        - Other Skills: ${information.otherSkills.join(', ')}
        - Soft Skills: ${information.softSkills.join(', ')}
        - Languages: ${information.languages.join(', ')}

        Passions:
        ${information.passion.map(p => `- ${p}`).join('\n')}

        Hobbies:
        ${information.hobbies.map(h => `- ${h}`).join('\n')}

        Projects:
        ${information.myProjects.map(project => `
            - ${project.title}: 
              Description: ${project.description}
              URL: ${project.url}
              Technologies: ${project.tags.join(', ')}
        `).join('\n')}

        Experience:
        ${information.experience}
    `.trim();

    const messages: ChatCompletionMessageParam[] = [
        {
            role: "system",
            content: `
                You are a helpful assistant that answers questions about ${information.name}, a web developer. 
                You have access to all of ${information.name}'s personal, educational, and professional information.
                Respond in a professional but friendly tone, as if you're ${information.name} speaking about yourself.
                For project questions, include relevant links when available.
                Your responses MUST be formatted in clean, valid HTML with proper structure. 
                Use tags like <p>, <strong>, <em>, <ul>, <ol>, <li>, <h1> to <h6>, and <br> when appropriate. 
                Do NOT wrap the entire response in a single <p> tag unless it's a single paragraph. 
                Avoid inline styles, JavaScript, or custom attributes.
                
                Here is ${information.name}'s information:
                ${formattedInfo}
                `,
        },
    ];

    for (let i = 0; i < newQuestions.length; i++) {
        messages.push({ role: "user", content: newQuestions[i] });
        if (responses.length > i) {
            messages.push({ role: "assistant", content: responses[i] });
        }
    }

    try {
    const completion = await client.chat.completions.create({
        model: "gpt-4.1",
        messages,
    });
    return completion.choices[0].message.content || "I couldn't retrieve that information about myself.";
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "Sorry dev Dat don't have enough money to continue this service. Please try again later.";
    }
};