import { NextResponse } from "next/server";
import { OpenAIApi, Configuration } from "openai";

interface IResponse {
  code: string;
  language?: string;
  isUnion?: boolean;
  interfacesOnly?: boolean;
  verifyJson?: boolean;
  typesInPlaceOfInterfaces?: boolean;
}

const config = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
});
const openai = new OpenAIApi(config);

export async function POST(req: Request, res: Response) {
  const data: IResponse = await req.json();

  const {
    code,
    language,
    isUnion,
    interfacesOnly,
    verifyJson,
    typesInPlaceOfInterfaces,
  } = data;

  const prompt = `Convert given JSON schema:\n${code}\n\nLanguage: ${
    language ? language : "typescript"
  }\nOptions:\n  isUnion: ${isUnion}\n  interfacesOnly: ${interfacesOnly}\n  verifyJson: ${verifyJson}\n  typesInPlaceOfInterfaces: ${typesInPlaceOfInterfaces}\n`;


  try {
    if (prompt) {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      if (response.data?.choices && response.data.choices.length > 0) {
        const generatedText = response.data.choices[0].text;

        return NextResponse.json({ result: generatedText }, { status: 200 });
      } else {
        return NextResponse.json(
          { result: "Please fill the required fields" },
          { status: 200 }
        );
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { result: "Something went wrong" },
      { status: 500 }
    );
  }
}
