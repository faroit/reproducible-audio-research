### Analyzing Chroma Feature Types for Automated Chord Recognition
Nanzhu Jiang et al.

The computer-based harmonic analysis of music recordings 
with the goal to automatically extract chord labels directly 
from the given audio data constitutes a major task in 
music information retrieval. In most automated chord recognition 
procedures, the given music recording is first converted into 
a sequence of chroma-based audio features and then pattern 
matching techniques are applied to map the chroma features 
to chord labels. In this paper, we analyze the role of the 
feature extraction step within the recognition pipeline of 
various chord recognition procedures based on template 
matching strategies and hidden Markov models. In particular, 
we report on numerous experiments which show how the various 
procedures depend on the type of the underlying chroma feature 
as well as on parameters that control temporal and spectral aspects.


#### [Paper (PDF)](http://www.audiolabs-erlangen.de/content/05-fau/professor/00-mueller/03-publications/2011_JiangGroscheKonzMueller_ChordRecognitionEvaluation_AES42-Ilmenau.pdf)

#### Source Code

* [Chroma Toolbox](http://www.audiolabs-erlangen.de/resources/MIR/chromatoolbox)

#### Dataset

* [Beatles songs mp3s (Dan Ellis)](http://labrosa.ee.columbia.edu/projects/chords/)
* [Beatles songs Chord Annotations (Chris Harte)](http://labrosa.ee.columbia.edu/projects/chords/)

#### Evaluation

* [mir_eval chord evaluation](https://craffel.github.io/mir_eval/#module-mir_eval.chord)

#### Further Information

* Meinard Müller, Fundamentals of Music Processing, Textbook (SpringerLink eBook http://link.springer.com/book/10.1007%2F978-3-319-21945-5, available from FAU computers or vpn) with Chapter 5 on Chord Recognition
* Accompanying website with exercises and solutions (http://www.music-processing.de/)
