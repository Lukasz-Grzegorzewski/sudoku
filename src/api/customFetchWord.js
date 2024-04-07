import { nonRepetitiveWord } from "../utils/helpers";

const customFetchWord = async (size, limit) => {
  try {
    const words = [];
    let currentWord = "";
    do {
      const response = await fetch(`https://trouve-mot.fr/api/size/${size}/${limit}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      words.push(...data.map((el) => el.name));
      currentWord = nonRepetitiveWord(words);
      if (currentWord === "") {
        words.length = 0;
      }

    } while (currentWord === "");
    return currentWord;
  } catch (error) {
    console.error(error);
  }

};

export {
  customFetchWord
};
