document.getElementById('generate-btn').addEventListener('click', generateWords);

function generateWords() {
    const partOfSpeech = document.getElementById('part-of-speech').value;
    const syllableCount = document.getElementById('syllable-count').value;
    const wordCount = parseInt(document.getElementById('word-count').value);
    
    let wordsContainer = document.getElementById('generated-words');
    wordsContainer.innerHTML = ''; // 生成された単語のリストをクリア

    for (let i = 0; i < wordCount; i++) {
        let word = generateSyllableStructure(syllableCount);

        switch (partOfSpeech) {
            case 'reduplication':
                word = reduplication(word);
                break;
            case 'adjective':
                word = makeAdjective(word);
                break;
            case 'verb':
                word = makeVerb(word);
                break;
        }

        let wordElement = document.createElement('p');
        wordElement.textContent = word;
        wordsContainer.appendChild(wordElement);
    }
}

function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateSyllableStructure(syllableCount) {
    const consonants = ['m', 'ph', 'b', 'w', 'n', 'th', 'd', 's', 'l', 'ch', 'j', 'sh', 'kh', 'g', 'h', ''];
    const vowels = ['a', 'ai', 'aa', 'e', 'ee', 'i', 'ii', 'o', 'u'];

    let word = getRandomFromArray(consonants) + getRandomFromArray(vowels);
    
    if (syllableCount === 'random' && Math.random() > 0.5 || syllableCount === '2') {
        word += getRandomFromArray(consonants) + getRandomFromArray(vowels);
        if (Math.random() > 0.2 || syllableCount === '2') {
            word += getRandomFromArray(consonants);
        }
    }
    return word;
}

function reduplication(word) {
    return `${word}-${word}`;
}

function makeAdjective(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(word.slice(-1))) {
        return word + getRandomFromArray(['da', 'daa']);
    } else {
        return word + getRandomFromArray(['a', 'aa']);
    }
}

function makeVerb(word) {
    return word + 'naa';
}
