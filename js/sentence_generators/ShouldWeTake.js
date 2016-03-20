var propositions = [
    'des bières',
    'des b52',
    'des shots',
    'une dernière bière',
    'du speed',
    'du jack',
    'du four roses',
    //"d'arrêter avec cette meuf",
];

var start = [
    'les petits amis',
    'rhaaaaaaaaa',
    'rilcy',
    'patou',
    'jimmy',
    'oooooooh jimmyyyyyyy',
    'alex',
    'batoune',
    'touneba'
]

var middle = [
    'ne prendrions-nous pas',
    'veux-tu prendre avec moi',
    "ne serait-t-il pas l'heure de prendre",
    'ne serait-il pas temps de prendre',
    'est-ce-que on ne prendrait pas'
]

var string = '';

function pickOneOf(collection, charsToAddAfter) {
    charsToAddAfter = charsToAddAfter || '';

    string += collection[Math.floor(Math.random() * collection.length)] + charsToAddAfter;
}

export function generate() {
    string = '';
    pickOneOf(start, ', ');
    pickOneOf(middle, ' ');
    pickOneOf(propositions, ' ?!');

    return string;
}
