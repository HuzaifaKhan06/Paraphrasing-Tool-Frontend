// Paraphrase 
const synonymDictionary = {
    "happy": ["joyful", "content", "ecstatic"],
    "sad": ["unhappy", "mournful", "depressed"],
};

function paraphrase() {
    const inputTextElement = document.getElementById("inputText");
    const errorTextElement = document.getElementById("errorText");
    const paraphrasedTextElement = document.getElementById("paraphrasedText");

    const inputText = inputTextElement.value.trim();

    if (inputText === "") {
        errorTextElement.textContent = "Error: Please enter text to paraphrase.";
        paraphrasedTextElement.textContent = "";  // Clear any previous paraphrased text
    } else if (getWordCount(inputText) > 500) {
        errorTextElement.textContent = "Error: Exceeded 500 words limit.";
        paraphrasedTextElement.textContent = "";  // Clear any previous paraphrased text
    } else {
        errorTextElement.textContent = "";
        const paraphrasedText = paraphraseText(inputText);
        paraphrasedTextElement.textContent = paraphrasedText;
    }
}

function paraphraseText(inputText) {
    const words = inputText.split(' ');

    const paraphrasedWords = words.map(word => {
        if (synonymDictionary.hasOwnProperty(word.toLowerCase())) {
            const synonyms = synonymDictionary[word.toLowerCase()];
            return synonyms[Math.floor(Math.random() * synonyms.length)];
        }
        return word;
    });

    const paraphrasedText = paraphrasedWords.join(' ');

    return paraphrasedText;
}

function getWordCount(text) {
    const trimmedText = text.trim();
    const wordCount = trimmedText.split(/\s+/).length;
    return wordCount;
}