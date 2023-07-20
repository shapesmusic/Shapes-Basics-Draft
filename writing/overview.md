### Organization

The way i’d like to introduce Shapes is to show you (part of) the first lesson. And that’ll give a little context to begin talking about how the project is organized, and why:

<style>
.embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }
  iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
<div class='embed-container'>
  <iframe src='https://www.youtube.com/embed/J1Ks_ve2h1I?rel=0' frameborder='0' allowfullscreen></iframe>
</div>
[through 1:50, end of the shape demo]



And here’s a handy map of the whole project:

![map](../map/map.png)



You’ll find Lesson 1 where the land of Symbols overlaps with the land of Imagination. The shape draws on a learner’s implicit knowledge and makes it possible to improvise along with songs right away, to access their musical imagination.

Of course, the shape is a kind of diagram on an instrument, and so the path continues from the land of Symbols, into the land of Instruments, and then into a land where the instrument begins to disappear, to become internalized as the rational side of a musical imagination.

And so, this path winds around again and again until eventually it falls clear off the edge of this map, and the learner has to go find a different map.

But before then, a learner weaves their way through five distinct lesson sequences, and I’d like to give you a brief overview of each of those. They are: [ideally highlight each]

- Playing With Songs
- Tactile Reading
- Chord & Key Levels
- Tonescapes & Tensions
- Reading Imagery





Playing is also the place to talk briefly about software. Or maybe this comes after chord & key levels, to talk about the data model. or through these three.



### Why a Beginner Method?

I would always get stuck, and feel frustrated, every time I tried to write *about* Shapes.

i had to teach it in order to understand it 

​	(this is a creative thesis)

what understanding means then

and i felt that i were to have a conversation about this with someone, we would have to share a certain experiential foundation

and so i needed to build the minimum of that foundation

but it also grew out of a frustration with my own lack of understanding

an impulse to teach myself, to go back to the basics

but i didn't trust the basics (the basics had hurt me)

so maybe that's what it's been, a kind of attempt to talk to other people about these questions i care about 

​	(a way i found to connect to people around music, but not directly through *playing* music)

except the only way i was able to articulate the questions, or have the conversation, was through this kind of shared experience 

​	(what does this say about theory?)

so was i ever really teaching? teaching is the format that was available. music lessons.

but i was more proposing something, and seeing how another person responded.

and i quickly found that the closer to a "beginner" that person was, the more honest our interaction felt. or, the more it was really focused on these questions, experiences

​	(what am I then? also a beginner in a way. what is an "expert beginner?")

rather than on reconciling them with the standard ideas, the ones i felt like i didn't trust.

but what has been the relationship of all this to my own musical practice?

it feels like the initial impulse was trying to move toward it, but that the activity of all this kind of held it at bay. made me understand more of how it could have been, but projecting that potential onto other people, not allowing it to myself

and yet, i rebuilt enough of a foundation where now it feels okay to play, finally, after all that

so what were the confusions? the sticking points? the things that told me i couldn't play, the things i was worried would tell other people they couldn't play?

i remember a feeling of disconnectedness. a lot of ideas that didn't cohere, and an absent feeling of fluency

i had had a good education, supposedly, but the connections between what i heard, imagined, could read, write, play, weren't there.

i traced the problem to theory

the most innocuous things we learn from the very beginning: this is the note C

sow tiny seeds of confusion

that are never really resolved, at least for a typical learner

​	(creates a priority to have access to the underlying system)

or "middle C," all the things that embeds

for me, the place where this most consciously became unbearable was chords

​	(my childhood music lessons were in something like jazz piano)

it didn't make any sense that they were composite objects made up of parts, notes

and were identified by particular structures of these notes, triads

and yet could take completely different forms, and still somehow retain their same names

there's no way, in this case, that chords could be particular structures, made up of notes

it had to be the other way around, contexts expressed by notes, by particular structures implied by them, but not made up of them

perhaps made up of the aggregate of all possible particular structures

around the same time some years ago i'd locked myself in a room to see if i could figure out how to play the piano

i was doing the typical things, playing things through every major and minor key...

​	("woodshedding," but again, not trusting the concepts)

and i was also trying to make some kind of account for what, even, are all the types of chords there are? a minor 6th? minor 6th add 9? minor 9th?

around the same time, i switched from playing through major and minor keys to their shared key signatures

and then one day i noticed, you'd think obviously, that key signatures with the same number of sharps or flats are symmetrical opposites of one another

and that was the day shapes were born. or the seed of shapes anyway

the keyboard became a playable diagram, the symmetry allowed ideas to be grouped and reduced

and the nature of those ideas changed, they were no longer attached to their names in quite the same way

they could exist without names, in a way that clarified and organized the names

and they also matched a symmetry of hands

lots fell out of this. but when did songs start?

that is, playing along with songs. the next part was the playlist. 

people like to complain about pop songs having nothing much going on harmonically

which of course is a somewhat limited view, maybe not so far off of saying the same thing of modal music

but one amazing quality of most pop songs is that ...

so the second part was songs, and that's when the app happened. that's when to talk about technology

the third part is zippering this all together, teaching, adjusting, refining, tweaking...

which goes back to the basics method, it's scope, purpose

why it mattered for me to put it in a form

and now what kind of questions are possible going forward





### Software as a Medium

####  Why Software?

 I started working on this project a long time ago, say 2009. Then in 2012-2013, i started doing software because of this exact situation, where if you want to have somebody play along with a song, and a sound, and instrument, etc. all need to be in the same place, it's a technical hurdle and most people can't do it.

You'd need a playlist of songs, your computer, a stereo, controller, etc., set the levels, choose a song... so the only way to do it at that time was on iPad. There wasn't a good enough Web Audio API back in 2012.

So on one screen, you could have a keyboard, music video, sound, playlist, and lesson together. So I started to learn how to do software development as a medium to try to express the idea.

So the iPad app was a start, then this is an early rebuild of that project, but in a web browser, which is much more ubiquitous and accessible than an iPad.



####  Detection?

This had to be done manually. The idea that you could detect this stuff automatically, but no automatic approach is good enough, reliable enough to really work in a learning context. It has to be right. 

So, for example, there will be songs with only three notes in it, that's the whole song. So there's not enough information in the audio file for a pitchmark detection algorithm to know what the context is.

And it's your brain that fills in the rest. It's an interesting problem of MIR. It also draws on the style. It would be possible to detect, in principle, but it would have to say, for example, this is hip hop, and if it's the same three notes but in a country song, it might be a different shape.



####  Blending the Instrument with the song

It's set for you, becaue one way the song won't sound like it fits is if the instrument doesn't fit with the song. So when that's in place, then you can pay attention to the fit of the notes.

But if the fit is close, you can also fiddle with it--turn the volume up or down a little, try a different sound. That's wading into sound design, which is certainly a part of playing, but it's not the focus right now, we're focusing on the tonal stuff, which generalizes across songs.



### Some Questions / Notes

- Why do you end where you do? (Kate)
- Why do you *start* where you do? (Peter)
- “Expert Beginner”... we’ll have to talk about what this means
- Psychological / perceptual difference in navigating the whole tonal space, all given at once.
- why choose to make this a beginner method?
- what about your own intuition?
- experimental method: developing the lessons, vs. telling how well they work.
- what did you learn about this idea through teaching it?
- historical nodes where this is taking a different route
- in order to talk about the thing, i had to make the thing. this was about making the thing. and about framing some of the questions that will come next.



What this project is. It’s a beginner method. But it’s a beginner method designed to bring about a different kind of access, a different way of understanding some of the concepts we most take for granted in beginning music education.

But is it really about that? The core of this idea is a kind of inversion of the way we typically approach beginner music learning. 



I'm not distinguishing standard from nonstandard terms, like "anchor."

Methodology: separate potential questions about the lesson from the lesson itself. The lesson is the original object. I can develop the questions over time, separately from the lessons. That's another principle of the design of this project.

The lessons talk only about what to do at this moment, not what will happen going forward, all the speculative stuff that's not relevant to right now.

The different threads: play, touch, read...



**Intuition**: A note that "fits" means a note that sounds like you would expect it to. Which suggests an intuition. (unpack this) 