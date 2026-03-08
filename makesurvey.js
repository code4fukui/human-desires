import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("human-desires.csv");
const survey = data.map((i, idx) => ({
  id: idx + 1,
  question: i.desire,
  category1: i.category,
  answer1: "はい（不足）",
  answer2: "いいえ（十分）",
}));
await Deno.writeTextFile("human-desires-question.csv", CSV.stringify(survey));
