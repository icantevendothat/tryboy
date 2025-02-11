const prompts = [
    "take boogas on a walk",
    "facetime me <3",
    "go to a bookstore you've never been before",
    "go outside and take pictures of 5 interesting signs",
    "just relax! it's ok",
    "do literally nothing for as long as you can",
    "draw a spider",
    "think of an experimental salad and write the ingredients down",
    "make a to-do list for tomorrow",
    "go eat one piece of candy. u deserve it ;)",
    "write a letter to leah in the future",
    "make a 'not to do' list",
    "clean the casa",
    "go for a 20 minute run",
    "do 30 push ups",
    "do 10 minutes of stream of conciousness writing",
    "stretch your body!!!",
    "text someone you haven't talked to in a while",
    "call your mom!",
    "call your dad!",
    "make a 2 minute short film on your phone",
    "text me a thing to do",
    "watch a youtube spanish lesson",
    "watch an episode of easy german",
    "code a very simple html page",
    "set a skating goal for yourself and don't come back till you meet it",
];

function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    return prompts[randomIndex];
}

setTimeout(() => {
    document.querySelector('.container').classList.add('expanded');
}, 500);

const circle = document.querySelector('.circle');
const prompt = document.querySelector('.prompt');

circle.addEventListener('click', () => {
    if (!circle.classList.contains('spinning')) {
        circle.classList.remove('wiggle');
        circle.classList.add('spinning');
        
        setTimeout(() => {
            circle.classList.remove('spinning');
            prompt.textContent = getRandomPrompt();
            prompt.classList.add('show');
        }, 5000);
    }
});

document.addEventListener('click', (event) => {
    if (prompt.classList.contains('show')) {

        if (!circle.contains(event.target)) {
            prompt.classList.remove('show');
        }
    }
});