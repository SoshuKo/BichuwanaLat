document.getElementById('generate-btn').addEventListener('click', generateWord);

function generateWord() {
    const partOfSpeech = document.getElementById('part-of-speech').value;
    const syllableCount = document.getElementById('syllable-count').value;

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

    document.getElementById('generated-word').innerText = word;
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
