const prompts = [
    { text: "take boogas on a walk", icon: "18" },
    { text: "go for a 20 minute run", icon: "10" },
    { text: "do 30 push ups", icon: "10" },
    { text: "stretch your body!!!", icon: "1" },
    { text: "set a skating goal for yourself and don't come back till you meet it", icon: "1" },
    { text: "do jumping jacks while naming animals until you can't name anymore animals", icon: "10" },
    { text: "do 20 squats", icon: "10" },
    { text: "find a way to stretch a muscle you've never used before", icon: "1" },
    { text: "just relax! it's ok", icon: "3" },
    { text: "do literally nothing for as long as you can", icon: "3" },
    { text: "do a breathing exercise", icon: "3" },
    { text: "list 5 sounds you can hear right now with your eyes closed", icon: "6" },
    { text: "facetime me <3", icon: "7" },
    { text: "text someone you haven't talked to in a while", icon: "7" },
    { text: "call your mom!", icon: "7" },
    { text: "call your dad!", icon: "7" },
    { text: "text me a thing to do", icon: "7" },
    { text: "write a thank-you note to someone", icon: "4" },
    { text: "draw a spider", icon: "4" },
    { text: "do 10 minutes of stream of conciousness writing", icon: "4" },
    { text: "write down a memory that makes you smile", icon: "4" },
    { text: "draw your favorite food with your non-dominant hand", icon: "4" },
    { text: "write a haiku about your current mood", icon: "4" },
    { text: "make tea and draw how it tastes", icon: "4" },
    { text: "write the alphabet in a new style", icon: "4" },
    { text: "practice your signature in 5 different styles", icon: "4" },
    { text: "watch a youtube spanish lesson", icon: "9" },
    { text: "watch an episode of easy german", icon: "9" },
    { text: "code a very simple html page", icon: "9" },
    { text: "learn how to say 'butterfly' in 3 new languages", icon: "9" },
    { text: "learn one constellation and find it tonight", icon: "9" },
    { text: "learn a new word and use it in three sentences", icon: "9" },
    { text: "dance to your favorite song from middle school", icon: "6" },
    { text: "make a playlist for someone", icon: "6" },
    { text: "make a playlist called 'songs that taste like döner'", icon: "6" },
    { text: "make a mixtape for your mom", icon: "6" },
    { text: "have a dance party in your shower", icon: "6" },
    { text: "make a to-do list for tomorrow", icon: "1" },
    { text: "make a 'not to do' list", icon: "9" },
    { text: "clean the casa", icon: "5" },
    { text: "do a 5-minute kitchen counter cleanup", icon: "17" },
    { text: "reorganize one drawer - just one!", icon: "5" },
    { text: "go outside and take pictures of 5 interesting signs", icon: "13" },
    { text: "make a 2 minute short film on your phone", icon: "7" },
    { text: "find a cloud that looks like something and photograph it", icon: "13" },
    { text: "count all the plants you can see from one window", icon: "8" },
    { text: "go eat one piece of candy. u deserve it ;)", icon: "3" },
    { text: "write down 3 things you're proud of from last week", icon: "4" },
    { text: "leave a nice note for future you to find", icon: "4" },
    { text: "write a letter to leah in the future", icon: "4" },
    { text: "make the silliest sandwich possible", icon: "17" },
    { text: "create a tiny paper boat and float it somewhere", icon: "16" },
    { text: "make the tiniest art gallery on a sticky note", icon: "16" },
    { text: "make a card out of whatever's within arm's reach", icon: "16" },
    { text: "create a custom connections for someone", icon: "16" },
    { text: "go to a bookstore you've never been before", icon: "11" },
    { text: "find three objects in your room that are the same color", icon: "15" },
    { text: "find something that starts with Z in your home", icon: "15" },
    { text: "find three things that are exactly the same height", icon: "15" },
    { text: "find something that's older than you are", icon: "15" },
    { text: "give directions from my house to yours using only landmarks and colors", icon: "5" },
    { text: "think of an experimental salad and write the ingredients down", icon: "17" },
    { text: "choose a random spice and smell it for 10 seconds", icon: "17" },
    { text: "find the oldest thing in your fridge and give it a funeral", icon: "17" },
    { text: "create a secret handshake with yourself", icon: "1" },
    { text: "arrange your books by color to make a rainbow", icon: "11" },
    { text: "make up a new holiday and write its origin story", icon: "4" },
    { text: "make a flower bouquet out of paper", icon: "8" },
    { text: "go urban foraging (be careful!!)", icon: "8" },
    { text: "outline an idea for a book", icon: "11" },
    { text: "read 3 chapters of a book", icon: "11" },
    { text: "write a foreward for a biography of someone you know", icon: "11" },
    { text: "make hats for boogas", icon: "18" },
    { text: "read 3 chapters of a book", icon: "11" },
    { text: "take self portraits", icon: "13" },
    { text: "draw some pictures from your camera roll favorites", icon: "13" },
    { text: "drink a tall glass of water", icon: "14" },
    { text: "wash boogas", icon: "14" },
    { text: "skip stones in the river", icon: "14" },
    { text: "walk around the gowanus canal area", icon: "14" },
    { text: "pick up 10 pieces of trash from outside", icon: "1" },
    { text: "set a short term goal for the day", icon: "1" }
];

//no 12, 14

function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    return prompts[randomIndex];
}

setTimeout(() => {
    document.querySelector('.container').classList.add('expanded');
}, 500);

const circle = document.querySelector('.circle');
const promptContainer = document.querySelector('.prompt-container');
const promptIcon = promptContainer.querySelector('.prompt-icon');
const promptText = promptContainer.querySelector('.prompt-text');

circle.addEventListener('click', () => {
    if (!circle.classList.contains('spinning')) {
        // Remove existing classes
        circle.classList.remove('wiggle');
        promptIcon.classList.remove('bounce');
        
        // Add spinning animation
        circle.classList.add('spinning');
        
        setTimeout(() => {
            // Remove spinning animation
            circle.classList.remove('spinning');
            
            // Get and set new prompt
            const randomPrompt = getRandomPrompt();
            promptIcon.src = `media/icon${randomPrompt.icon}.png`;
            promptText.textContent = randomPrompt.text;
            
            // Show prompt container
            promptContainer.classList.add('show');
            
            // Trigger bounce animation after a tiny delay
            setTimeout(() => {
                promptIcon.classList.add('bounce');
            }, 50);
        }, 5000);
    }
});

document.addEventListener('click', (event) => {
    if (promptContainer.classList.contains('show')) {
        if (!circle.contains(event.target)) {
            promptContainer.classList.remove('show');
            promptIcon.classList.remove('bounce');
        }
    }
});