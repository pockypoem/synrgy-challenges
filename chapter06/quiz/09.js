const n = 10;

async function generateSequence(n) {
    if (n < 0) throw new Error ("n must be positive");

    const sequence = [];
    for (let i = 1; i <= n; i++) sequence.push(i);

    return sequence;
}

generateSequence(n).then(console.log);