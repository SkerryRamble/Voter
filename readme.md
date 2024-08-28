## what's going on?
a wee app, the point of which was me trying to get ai to do everything for me, and see how far i would get.
i even considered getting ai to write this blurb for me.

the actual app concept was inspired by [cellar door](https://logos.substack.com/p/cellar-door). their page invites the reader to decide between a random pair of words, which is more beautiful.  
it got me thinking could i make something similar to that, but much stupider, but trying to get ai to do everything for me.  
voting on the 'best' number popped into my head.  
and it should visually evoke old arcade games, and 90s web pages, a heady emulsion of clashing colours and garishly vibrant visuals.

i've listed my side of the entire prompting conversation at the bottom.

## i heard it through the a-i
i tried to get mistral(codestral) to do as much of it as i could. i had to ask chatgpt though. codestral wouldn't attempt it. it kept suggesting the app was out of its scope.

chatgpt was very helpful off the bat and provided almost all of the code on the first go. i did tweak little bits here and there, no point in asking it to recreate everything (again!) to change the text of a button, or the font stlye.

all i did was change some colours, fonts, font sizes and actual display text. cosmetic things.
code wise, i only added a 'falling' boolean to stop the numbers falling on the `cannae decide` button.

## i need some conceptual healing
this is decent for now. although my original idea was to record votes on each **number** voted for in in the range, not on which button, 1 or 2, was pressed, as is the case with the code it generated. a good example of `you get what you ask for`

while i want to eventually fix everything, i'm happy with this for now.

*my grand plan would be to host this and have random visitors actually vote, store the votes, and periodically analyse them in a serious mathematical fashion. silly i know*

## can i get a witness
my actual promtps, in order:

>Right, now I'd like to make a little web app.
The concept is to allow the user to vote which is the 'best' number of 2 displayed to them.  
It should display a choice of 2 numbers (randomly chosen within a range)  
It should allow to 'vote' for either number, or vote 'both/neither'.  
The displayed numbers are the actual voting buttons, but the both/neither button should be separate, below the numbers.  
The page should be styled as an 80s retro pixel style game.  
There should be some minimal instructions at the top of the page.

i was aiming for a single point per sentence. i didn't succeed, as you can see

>Excellent work Charlie. I'll call you charlie from now on. Charlie the ChatGPT

it just makes the prompting and interaction a bit more fun to pretend chatgpt is some british workshop assistant

>How to track votes

this was actually a suggested prompt by chatgpt, so i tried it. otherwise i'd've written something more loquacious

>Nice. Can you modify the page design to show a grid of numbers 1-100, in 5 columns of 20.
And they should be in a container that looks like an attached box to the larger voting panel

i was hinting at, or working towards my original grand idea of voting on numbers, rather than voting on the choice. to be fair, i didn't think this would work, chatgpt has zero intuition as to a human's intention or imagination. it can't understand a lot of what we intuitively know to be the initial 'correct' direction. as expected it did exactly what i asked. made an inert grid of numbers visually.

>All looking good. Now, I'd like to add an animation. On voting for a number, the chosen number should rain from the top of the page

i decided to move on and add some hideous flair, something like a 90s website might have, with falling numbers from the top of the screen like rain.
i'm irish, i have olympic levels of exeperience with precipitation. torrential rain that bounces upwards off the ground, deftly circumventing your naive choice of umbrella; misty rain that hangs in the air, like a low cloud that only dampens you as you move through it; eternal rain that slowly leaches away the joy from children during their summer holidays; surprise rain that falls from a cloudless sky, blown in from over the mountain and ruins your picnic. that's just a few types, but chatgpt introduced me to the magical 'single raindrop' rain. in my imagination i wanted a few 'drops' of voted number to fall from the top, but chatgpt only gave me a lonely figure

>nice. But can the animation also rotate the number, and fall from several places. Let's say a random amount between 3 and 6 places

my problem with the number of raindrops was easily fixed

>You've done great work this afternoon Charlie. You've earned a teabreak, and a biscuit.

he did. he chose earl grey and a digestive. i don't know enough british workshop assistants to know if thats a realistic combination. but charlie worked hard and can have what he likes. i'm no biscuit police

## day 2 - i'm still in love with ui

now, i don't want to make this my life's work, but i did want to finish off a few things.
today was about recording the frequency of votes per number, rather than choosing number 1 or number 2.
and i wanted to visualise this somehow. 
i decided to promp this as best as i could and see what charlie came up with, and if he suggested prompts for me in return, i'd go with what matched my plan closest

>Let's revisit the voting app we worked on recently. I'd like to modify it.
This time, instead of storing the voting of choice 1 or 2, we need to store the frequency of votes per number. So, after many votes, we'll have an array of 1-100, with each element storing how many times it's been voted for. I imagine we only need to modify the js for this

charlie added the array and jiggled about a few functions to accomodate this change

he then suggested some prompts for me, like improve the ui, or how to visualise this new voting storage. both were in line with what i wanted for today, but i chose ui first

>Any UI improvements?

he suggested 
+ a vote overlay on the number grid
+ a progress bar under each number in the grid
+ highlighting the number voted for visual feedback
+ hover effects, like scaling

i added what he suggested, and it mostly worked but i had to rejig some of his class names, like number-grid became numberGrid with these modifications, and didn't play with the earlier code. not a real problem, just something to track
the only other changes i made were, again, cosmetic. i resized the number grid and vote overlay and changed the colors a bit. not to say my taste is better, but charlie's tea and biccy yesterday didn't help his sense of aesthetics.

after adding his ui changes and fixing things up a bit, i followed through with his second prompt suggestion

>How to visualize data?

again he had a bunch of ideas. pie chart, histogram, heatmap, the usual. but he also suggested a dashboard to present all these together, which i'd never considered. anyway, i've spent enough time on this and i'll stop here. maybe someday charlie and i will revisit this and reminisce on all the good times and tea he digitally imbibed