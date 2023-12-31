// Simple dictionary of synonyms for word replacement
const synonymDictionary1 = {
    "happy": ["joyful", "content", "ecstatic"],
    "sad": ["unhappy", "mournful", "depressed"],
    // Add more synonyms as needed
};

function simplifyAndParaphrase() {
    const inputTextElement = document.getElementById("inputText");
    const errorMsgElement = document.getElementById("errorMsg");
    const outputTextElement = document.getElementById("outputText");

    const inputText = inputTextElement.value;

    // Check if input exceeds 500 characters
    if (inputText.length > 500) {
        errorMsgElement.textContent = "Error: Input exceeds 500 characters.";
        return;
    } else {
        errorMsgElement.textContent = "";
    }

    const simplifiedAndParaphrasedText = simplifyAndParaphraseText(inputText);
    outputTextElement.textContent = simplifiedAndParaphrasedText;
}

function simplifyAndParaphraseText(inputText) {
    // Basic simplification: Convert all text to lowercase
    const simplifiedText = inputText.toLowerCase();

    // Split the simplified text into words
    const words = simplifiedText.split(' ');

    // Replace words with synonyms from the dictionary
    const paraphrasedWords = words.map(word => {
        if (synonymDictionary1.hasOwnProperty(word.toLowerCase())) {
            const synonyms = synonymDictionary1[word.toLowerCase()];
            return synonyms[Math.floor(Math.random() * synonyms.length)];
        }
        return word;
    });

    // Join the words back into a paraphrased sentence
    const paraphrasedText = paraphrasedWords.join(' ');

    return paraphrasedText;
}