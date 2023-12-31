// Summarizer

function summarize() {
    // Get the input text
    var inputText = document.getElementById("inputText").value;

    // Split the text into sentences
    var sentences = inputText.split('.');

    // Calculate the number of sentences to include in the summary (e.g., 30%)
    var numSentences = Math.round(sentences.length * 0.3);

    // Sort sentences based on their length (number of words)
    sentences.sort(function(a, b) {
        return a.split(' ').length - b.split(' ').length;
    });

    // Take the top N sentences to form the summary
    var summary = sentences.slice(0, numSentences);

    // Display the summary
    document.getElementById("summary").innerText = summary.join('. ');
}
