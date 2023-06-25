## Colloqium-As-Introduction



I'm not distinguishing standard from nonstandard terms, like "anchor."

Methodolody: separate potential questions about the lesson from the lesson itself. The lesson is the original object. I can develop the questions over time, separately from the lessons. That's another principle of the design of this project.

The lessons talk only about what to do at this moment, not what will happen going forward, all the speculative stuff that's not relevant to right now.

The different threads: play, touch, read...



**Intuition**: A note that "fits" means a note that sounds like you would expect it to. Which suggests an intuition. (unpack this) 





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