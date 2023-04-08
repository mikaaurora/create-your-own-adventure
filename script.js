//PAGE DISPLAY & RETURN HOME
const hidePages = () => {
  const pages = document.getElementsByClassName('page')
  for (const page of pages) {
    page.style.display = 'none'
  }
}

const returnHome = () => {
  hidePages()
  document.querySelector('.start-page').style.display = 'initial'
}

returnHome()

/*************************************************************CHOICES*************************************************************/
/*************************************************************PLAYER START*************************************************************/
let playerName
const askPlayerName = () => {
  playerName = prompt('Hello strange one. What should I call you?')

  if (playerName) {
    alert(`${playerName}, you're not from here. Welcome.`)
  } else {
    alert('You must be called something. Please, tell me.')
    askPlayerName()
  }
}

const askToJoin = () => {
  let playerChoice = confirm('Would you like to join me on a quest?')

  if (playerChoice) {
    alert(
      "Wonderful. There are many things to see and very little time. Let's go."
    )
    hidePages()
    document.querySelector('.direction-page').style.display = 'initial'
  } else {
    alert('Fine, go away then!')
    returnHome()
  }
}

const askDirection = () => {
  let direction = prompt(
    'In which direction shall we start? North, East, South, or West?'
  )

  if (direction) {
    if (direction.toLowerCase() === 'north') {
      alert('You chose NORTH!')
      alert(
        'The views are beautiful, yes? And look here. We have a new companion.'
      )
      hidePages()
      document.querySelector('.sprite-page').style.display = 'initial'
    } else if (direction.toLowerCase() === 'east') {
      alert('You chose EAST!')
      alert(
        'The views are beautiful, yes? And look here. We have a new companion.'
      )
      hidePages()
      document.querySelector('.bunny-page').style.display = 'initial'
    } else if (direction.toLowerCase() === 'south') {
      alert('You chose SOUTH!')
      alert(
        'The views are beautiful, yes? And look here. We have a new companion.'
      )
      hidePages()
      document.querySelector('.under-construction-page').style.display =
        'initial'
    } else if (direction.toLowerCase() === 'west') {
      alert('You chose WEST!')
      alert("The views are beautiful, yes? Wait. Stop. What's that ahead?")
      hidePages()
      document.querySelector('.wolf-page').style.display = 'initial'
    } else {
      alert("That wasn't a choice!")
      askDirection()
    }
  } else {
    alert("I'm trusting your judgment. Please decide.")
    askDirection()
  }
}

/*************************************************************NORTH PATH*************************************************************/
let spriteName

const spriteFriend = () => {
  spriteName = prompt(
    'A coal sprite has started following us. What shall we name them?'
  )

  if (spriteName) {
    alert(`Welcome, ${spriteName}.`)
    hidePages()
    document.querySelector('.spirited-page').style.display = 'initial'
  } else {
    alert(`It's unkind not to name our new friend.`)
    spriteFriend()
  }
}

const overSlept = () => {
  let noMoney = prompt(
    `Should we make a run for it and head back to the crossroads or let them know we're poor and can't pay that? Run or poor?`
  )
  if (noMoney) {
    if (noMoney.toLowerCase() === 'run') {
      alert('You chose RUN!')
      alert(`**${playerName} gets caught while attempting to run**`)
      alert(
        `I'm sorry, ${playerName}. There's no hope for you. I must return home and distance myself from this...`
      )
      hidePages()
      returnHome()
    } else if (noMoney.toLowerCase() === 'poor') {
      alert('You chose POOR!')
      alert(
        `The inn reasons with us and allows us to clean the spa to cover over bill.`
      )
      hidePages()
      document.querySelector('.cleaning-page').style.display = 'initial'
    } else {
      alert("That wasn't a choice!")
      overSlept()
    }
  } else {
    alert('Please decide.')
    overslept()
  }
}

const sleepTime = () => {
  let hoursOfSleep = prompt(
    `We continue on our path until we start seeing lights in the distance. What's this? A random village. They have an inn! How many hours should we sleep? 7, 8, 9, or 10? Or 0 (cancel)? We could turn back to the crossroads...`
  )

  switch (+hoursOfSleep) {
    case 0:
      alert(
        "There's something about the energy here? Okay, I trust you. Let's get back to the crossroads."
      )
      hidePages()
      document.querySelector('.direction-page').style.display = 'initial'
      break
    case 7:
    case 8:
      alert('We got the perfect amount of sleep. Time to eat.')
      hidePages()
      document.querySelector('.food-page').style.display = 'initial'
      break
    case 9:
    case 10:
      alert(
        'Oh, no. We slept in late and they want to charge us double for staying!'
      )
      overSlept()
      break
    default:
      alert("That wasn't a choice!")
      sleepTime()
  }
}

const cleaningOverkill = () => {
  let tooMuchCleaning = prompt(
    `We finish cleaning the spa and now they're asking us to clean more... ${playerName}, this is not the quest we planned... Let's go back to the crossroads or go back home? Home? Crossroads? Your pick.`
  )

  if (tooMuchCleaning) {
    if (tooMuchCleaning.toLowerCase() === 'home') {
      alert(
        'I thought you would meet challenges with confidence. I was wrong. I must return home and find a worthy quest companion.'
      )
      hidePages()
      returnHome()
    } else if (tooExpensive.toLowerCase() === 'crossroads') {
      alert("That's the spirit! We'll find a new path.")
      hidePages()
      document.querySelector('.direction-page').display.style = 'initial'
    } else {
      alert('Please make a choice.')
      cleaningOverkill()
    }
  } else {
    alert(`You must pick one or the other.`)
    cleaningOverkill()
  }
}

const expensiveFood = () => {
  let tooExpensive = prompt(
    `Everything looks delicious! But, wait. What\'d you say? The food is how much? We can\'t afford that... ${playerName}, it's time to decide. Back to the crossroads or go back home? Home? Crossroads? Your pick.`
  )
  if (tooExpensive) {
    if (tooExpensive.toLowerCase() === 'home') {
      alert(
        'I thought you would meet challenges with confidence. I was wrong. I must return home and find a worthy quest companion.'
      )
      hidePages()
      returnHome()
    } else if (tooExpensive.toLowerCase() === 'crossroads') {
      alert("That's the spirit! We'll find a new path.")
      hidePages()
      document.querySelector('.direction-page').display.style = 'initial'
    } else {
      alert('Please make a choice.')
      expensiveFood()
    }
  } else {
    alert(`You must pick one or the other.`)
    expensiveFood()
  }
}

/*************************************************************EAST PATH*************************************************************/
let bunnyName

const bunnyFriend = () => {
  bunnyName = prompt(
    'A spirit bunny has started following us. What shall we name them?'
  )

  if (bunnyName) {
    alert(`Welcome, ${bunnyName}.`)
    hidePages()
    document.querySelector('.cottage-page').style.display = 'initial'
  } else {
    alert(`It's unkind not to name our new friend.`)
    bunnyFriend()
  }
}

const checkCottage = () => {
  let searchCottage = confirm(
    `We continue on our path until we spot a house in the distance. A small cottage. Looks lovely. Should we check it out?`
  )

  if (searchCottage) {
    alert(`Wonderful. Let's see if they have some food!`)
    hidePages()
    document.querySelector('.dinner-page').style.display = 'initial'
  } else {
    alert("Alright. Let's continue on to the forest ahead. It's getting late.")
    hidePages()
    document.querySelector('.forest-page').style.display = 'initial'
  }
}

const searchForest = () => {
  alert(
    `We've been searching the forest for hours now and found nothing. ${bunnyName} left us. I think they got bored...`
  )

  let turnBack = prompt(
    `${playerName}, should we return to the crossroads or stop the quest and head home? Home or crossroads? Your pick.`
  )
  if (turnBack) {
    if (turnBack.toLowerCase() === 'home') {
      alert('You chose HOME!')
      alert(
        `It\'s okay, ${playerName}. You\'re not built for this life. I will find a new traveler.`
      )
      hidePages()
      returnHome()
    } else if (turnBack.toLowerCase() === 'crossroads') {
      alert('You chose CROSSROADS!')
      alert(`That's the spirit, ${playerName}! Our quest continues!`)
      hidePages()
      document.querySelector('.direction-page').style.display = 'initial'
    } else {
      alert("That wasn't a choice!")
      searchForest()
    }
  } else {
    alert('Please decide.')
    searchForest()
  }
}

let hungryQuestion
const dinnerInvite = () => {
  hungryQuestion = prompt(
    "Well aren't we lucky. This lovely family lives here and invites us to join! Granny asks if we're hungry. I'm starved. What about you? Yes? No?"
  )

  if (hungryQuestion) {
    if (hungryQuestion.toLowerCase() === 'yes') {
      hungryQuestion = true
    } else if (hungryQuestion.toLowerCase() === 'no') {
      hungryQuestion = false
    } else {
      alert('"Yes" or "No", please. Let\'s not be rude.')
      dinnerInvite()
    }
  } else {
    alert('Whatever you want. Your choice.')
    dinnerInvite()
  }
  return hungryQuestion
}

let sleepyQuestion
const stayInvite = () => {
  sleepyQuestion = prompt(
    "Granny asks if we're sleepy. They have a spare room we could use for the night. Shall we rest here? Yes? No?"
  )

  if (sleepyQuestion) {
    if (sleepyQuestion.toLowerCase() === 'yes') {
      sleepyQuestion = true
    } else if (sleepyQuestion.toLowerCase() === 'no') {
      sleepyQuestion = false
    } else {
      alert('"Yes" or "No", please. Let\'s not be rude.')
      stayInvite()
    }
  } else {
    alert('Whatever you want. Your choice.')
    stayInvite()
  }

  return sleepyQuestion
}

const inviteChoices = (hungry, sleepy) => {
  if (hungry === true && sleepy === true) {
    alert(`How wonderful! This is just what we need, ${playerName}.`)
    hidePages()
    document.querySelector('.secret-path-page').style.display = 'initial'
  } else if (hungry === true && sleepy === false) {
    alert(
      "Granny, we appreciate your kindness, but looks like we'll only be staying for dinner and then be on our way..."
    )
    hidePages()
    document.querySelector('.eat-only-page').style.display = 'initial'
  } else if (hungry === false && sleepy === true) {
    alert(
      "Guess food will have to wait... we'll call it for the night and be out of your hands by morning, Granny. Appreciate your kindess."
    )
    hidePages()
    document.querySelector('.stay-only-page').style.display = 'initial'
  } else if (hungry === false && sleepy === false) {
    alert(
      `Oh. Okay. Whatever you say, ${playerName}. Off we go. Apologies, Granny. Looks like we're moving forward.`
    )
    hidePages()
    document.querySelector('.leaves-page').style.display = 'initial'
  }
}

//EAST: stays for dinner and the night
const exploreSecret = () => {
  alert(
    `Food and sleep did us good. We venture forth, but we're suddenly stopped by one of the daughters. She asks us to follow her and brings us to a hole in the forest. "Well," she says, "go ahead. You said you were on a quest."" `
  )
  hidePages()
  document.querySelector('.follow-bunny-page').style.display = 'initial'
}

const followBunny = () => {
  alert(
    `Before we have time to respond, ${bunnyName} scurries in and appears to be following someone... ${playerName}, we must follow and make sure our friend is in no danger.`
  )
  hidePages()
  document.querySelector('.totoro-page').style.display = 'initial'
}

const totoro = () => {
  let wakeUp = prompt(
    `We wind our way through the forest until we reach a grassy clearing. ${playerName}, what's this... could this be the spirit of the forest?! He's HUGE.. and appears to be sleeping. Should we wake him? Don't say anything. Just signal a 1 for yes, and a 2 to leave and head back to the crossroads.`
  )
  if (+wakeUp === 1) {
    alert("I'll do as you ask. Let me give him a little nudge.")
    hidePages()
    document.querySelector('.sleepy-totoro-page').style.display = 'initial'
  } else if (+wakeUp === 2) {
    alert(
      `I'll do as you ask. Let's leave quietly as not to wake him. Hmm. Looks like ${bunnyName} wishes to stay. Farewell, young spirit. It was a pleasure meeting you.`
    )
    hidePages()
    document.querySelector('.direction-page').style.display = 'initial'
  } else {
    alert(
      `${playerName}, I don't understand what you're saying. Please make it clear. 1 or 2.`
    )
    totoro()
  }
}

const wakeTotoro = () => {
  alert("He's not quite awake. I'll nudge him one more time.")
  hidePages()
  document.querySelector('.awake-totoro-page').style.display = 'initial'
}

const befriendTotoro = () => {
  alert(
    "He's awake! And excited to see new faces. He signals for us to come closer. The daughters too... they snuck in with us. One by one we inch closer untial Totoro snatches us up and..."
  )
  hidePages()
  document.querySelector('.befriend-totoro-page').style.display = 'initial'
}

const totoroMagic = () => {
  alert(
    "FLIES! He gives us a tour of his forest well into the night. It's a beautiful sight. But that's not all... he then shows us..."
  )
  hidePages()
  document.querySelector('.magic-totoro-page').style.display = 'initial'
}

const totoroMusic = () => {
  alert('MAGIC and then ends with...')
  hidePages()
  document.querySelector('.music-totoro-page').style.display = 'initial'
}

const totoroEnding = () => {
  alert(
    `MUSIC. What a wonderful adventure, ${playerName}. We must return home and let everyone know! Or should we go back to the crossroads and start a new quest come morning? I believe ${bunnyName} wants to stay either way.`
  )

  let shareNews = prompt(`Home or crossroads? Your pick.`)
  if (shareNews) {
    if (shareNews.toLowerCase() === 'home') {
      alert('You chose HOME!')
      alert(
        `The village will be jealous of what we saw. Great work, ${playerName}! Maybe well find someone else to join us on a new quest.`
      )
      hidePages()
      returnHome()
    } else if (shareNews.toLowerCase() === 'crossroads') {
      alert('You chose CROSSROADS!')
      alert(`HUZZAH, ${playerName}! Our quest continues!`)
      hidePages()
      document.querySelector('.direction-page').style.display = 'initial'
    } else {
      alert("That wasn't a choice!")
      totoroEnding()
    }
  } else {
    alert('Please decide.')
    totoroEnding()
  }
}

//EAST: stays for dinner, but does not stay the night
const hearMusic = () => {
  alert(
    "We thank granny for the meal and head out. It's night now and we hear some music..."
  )
  alert(
    'We look up to see... is that.. the spirit of the forest?! We try to get his attention, but he flies off with annoyance on his face...'
  )
  alert(
    `Well, let's head back to the crossroads. We'll maybe try again tomorrow morning. **${bunnyName} stays behind**`
  )

  hidePages()
  document.querySelector('.direction-page').style.display = 'initial'
}

//EAST: stays for the night without eating and then leaves in the morning
const passOut = () => {
  alert(
    "We head out in the morning having not eaten. We're not finding any food on the trail. This isn't looking good..."
  )
  alert(`**${playerName} faints**`)
  alert(
    "Oh, strange one. This just isn't the life for you. I must turn back home to get you help and find a worthy adventurer."
  )
  hidePages()
  returnHome()
}

//EAST: leaves. does not stay for dinner or the night
const scaryTotoro = () => {
  alert(
    "We get back on the trail. It's raining and night now. But we see something holding an umbrella. WHAT ON EARTH IS THIS?!?!"
  )
  alert(
    `Let's head back to the crossroads. We'll maybe try again tomorrow morning. **${bunnyName} stays behind**`
  )

  hidePages()
  document.querySelector('.direction-page').style.display = 'initial'
}

/*************************************************************SOUTH PATH*************************************************************/
const underConstruction = () => {
  alert("Oh, no! This path is blocked. Let's get back to the crossroads.")

  hidePages()
  document.querySelector('.direction-page').style.display = 'initial'
}

/*************************************************************WEST PATH************************************************************/
const wolfFoe = () => {
  let confrontWolf = prompt(
    `AhhhHhHHHhhhhhh. It's a large wolf! ${playerName}, you must decide. Do we move ahead, go back to the crossroads, or return home? Please, don't speak. I don't wish to startle the beast. Just give me a 1, 2, or 3 with your fingers.`
  )

  switch (+confrontWolf) {
    case 1:
      hidePages()
      document.querySelector('.death-page').style.display = 'initial'
      break
    case 2:
      alert("Yes. Best to be cautious. Let's get back to the crossroads.")
      hidePages()
      document.querySelector('.direction-page').style.display = 'initial'
      break
    case 3:
      alert(
        `I understand, ${playerName}. This world is a dangerous place. I will continue my search for a worthy quest companion.`
      )
      returnHome()
      break
    default:
      alert("That wasn't a choice!")
      wolfFoe()
  }
}
//WEST CHOICE: continues forward and is killed by wolf
const wolfDeath = () => {
  alert(
    `*${playerName}'s unwelcome presence results in their death* Oh, strange one. We should have turned back. I must return home to share the news. You will be missed.`
  )
}

/*************************************************************USER INTERACTIONS*************************************************************/

/*************************************************************START: DONE*************************************************************/
const startHeader = document.querySelector('.start-header')
startHeader.onclick = function () {
  hidePages()
  document.querySelector('.greet-page').style.display = 'initial'
}

const greetHeader = document.querySelector('.greet-header')
greetHeader.onclick = function () {
  console.log('hey')
  askPlayerName()
  askToJoin()
}

const directionHeader = document.querySelector('.direction-header')
directionHeader.onclick = function () {
  askDirection()
}

/*************************************************************NORTH PATH: DONE*************************************************************/
const spriteHeader = document.querySelector('.sprite-header')
spriteHeader.onclick = function () {
  spriteFriend()
}

const spiritedHeader = document.querySelector('.spirited-header')
spiritedHeader.onclick = function () {
  sleepTime()
}

const cleaningHeader = document.querySelector('.cleaning-header')
cleaningHeader.onclick = function () {
  cleaningOverkill()
}

const foodHeader = document.querySelector('.food-header')
foodHeader.onclick = function () {
  expensiveFood()
}

/*************************************************************EAST PATH: DONE*************************************************************/
const bunnyHeader = document.querySelector('.bunny-header')
bunnyHeader.onclick = function () {
  bunnyFriend()
}

const cottageHeader = document.querySelector('.cottage-header')
cottageHeader.onclick = function () {
  checkCottage()
}

const forestHeader = document.querySelector('.forest-header')
forestHeader.onclick = function () {
  searchForest()
}

const dinnerHeader = document.querySelector('.dinner-header')
dinnerHeader.onclick = function () {
  inviteChoices(dinnerInvite(), stayInvite())
}

const secretPathHeader = document.querySelector('.secret-path-header')
secretPathHeader.onclick = function () {
  exploreSecret()
}

const followBunnyHeader = document.querySelector('.follow-bunny-header')
followBunnyHeader.onclick = function () {
  followBunny()
}

const totoroHeader = document.querySelector('.totoro-header')
totoroHeader.onclick = function () {
  totoro()
}

const sleepyTotoroHeader = document.querySelector('.sleepy-totoro-header')
sleepyTotoroHeader.onclick = function () {
  wakeTotoro()
}

const awakeTotoroHeader = document.querySelector('.awake-totoro-header')
awakeTotoroHeader.onclick = function () {
  befriendTotoro()
}

const befriendTotoroHeader = document.querySelector('.befriend-totoro-header')
befriendTotoroHeader.onclick = function () {
  totoroMagic()
}

const magicTotoroHeader = document.querySelector('.magic-totoro-header')
magicTotoroHeader.onclick = function () {
  totoroMusic()
}

const musicTotoroHeader = document.querySelector('.music-totoro-header')
musicTotoroHeader.onclick = function () {
  totoroEnding()
}

//EAST CHOICE: stays for dinner, but does not stay the night
const eatOnlyHeader = document.querySelector('.eat-only-header')
eatOnlyHeader.onclick = function () {
  hearMusic()
}

// EAST PATH: stays for the night without eating and then leaves in the morning
const stayOnlyHeader = document.querySelector('.stay-only-header')
stayOnlyHeader.onclick = function () {
  passOut()
}

//EAST CHOICE: leaves
const leavesHeader = document.querySelector('.leaves-header')
leavesHeader.onclick = function () {
  scaryTotoro()
}

/*************************************************************SOUTH PATH: DONE*************************************************************/
const underConstructionHeader = document.querySelector(
  '.under-construction-header'
)
underConstructionHeader.onclick = function () {
  underConstruction()
}

/*************************************************************WEST PATH: DONE*************************************************************/
const wolfHeader = document.querySelector('.wolf-header')
wolfHeader.onclick = function () {
  wolfFoe()
}

const deathHeader = document.querySelector('.death-header')
deathHeader.onclick = function () {
  wolfDeath()
  returnHome()
}
