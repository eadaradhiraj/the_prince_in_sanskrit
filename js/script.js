document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class 'sentence'
    const sentences = document.querySelectorAll('.sentence');

    // Add a click event listener to each sentence
    sentences.forEach(sentence => {
        sentence.addEventListener('click', function() {
            // 1. Remove the 'highlight' class from all sentences
            sentences.forEach(s => s.classList.remove('highlight'));

            // 2. Get the data-id of the clicked sentence
            const id = this.getAttribute('data-id');

            // 3. Find both sentences (Sanskrit and English) with that ID and highlight them
            if(id) {
                const matchedSentences = document.querySelectorAll(`.sentence[data-id="${id}"]`);
                matchedSentences.forEach(matched => matched.classList.add('highlight'));
            }
        });
    });
});
