let wordsJson;
fetch('./data.json').then((response) => response.json()).then((json) => wordsJson = json);

export function checkWord(word) {
    if (wordsJson[word]) console.log(word);
    return wordsJson[word];
}