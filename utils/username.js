const Adjectives = [
    'Idiot',
    'elite',
    'willing',
    'evanescent',
    'screeching',
    'intelligent',
    'attractive'
]

const Objects = [
    'floor',
    'crowbar',
    'perfume',
    'Aesthetic',
    'flashlight',
    'baseball',
    'pillow'
]

function genrateRandomWords() {
    const adjv = Adjectives[Math.floor(Math.random()*7)];
    const objt = Objects[Math.floor(Math.random()*7)];
    return `${adjv}~${objt}`
}

exports = module.exports = {
    genrateRandomWords
}