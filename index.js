
function handleString(phrase) {
  return `👏${phrase.split(' ').join('👏')}👏`;
}


module.exports = (phrase) => typeof phrase == 'string' ?
  handleString(phrase) :
  phrase.length === 1 ?
    handleString(phrase[0]) : // handle quoted strings in cli
    `👏${phrase.join('👏')}👏`;