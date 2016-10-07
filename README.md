## Classes at universities

- Dan Ellis, Brian McFee: [REPRODUCING COMPUTATIONAL RESULTS](http://www.ee.columbia.edu/~dpwe/e6891/)

## Documents about reproducible research

- [Reproducible Research in Signal Processing - What, why, and how](https://infoscience.epfl.ch/record/136640)
- [Reproducible Research with R & RStudio](http://christophergandrud.github.io/RepResR-RStudio/) 

## Online Resources, databases for reproducible work

- http://www.gitxiv.com
- http://rr.epfl.ch
- http://soundsoftware.ac.uk/rr-prize
- http://soundsoftware.ac.uk/handouts-guides

## List of Papers

### Melody Extraction from Polyphonic Music Signals: Approaches, Applications and Challenges
Justin Salamon et. al.

We present a novel system for the automatic extraction of the main melody from polyphonic music recordings. Our approach is based on the creation and characterisation of pitch contours, time continuous sequences of pitch candidates grouped using auditory streaming cues. We define a set of contour characteristics and show that by studying their distributions we can devise rules to distinguish between melodic and non-melodic contours. This leads to the development of new voicing detection, octave error minimisation and melody selection techniques. A comparative evaluation of the proposed approach shows that it outperforms current state-of-the-art melody extraction systems in terms of overall accuracy. Further evaluation of the algorithm is provided in the form of a qualitative error analysis and the study of the effect of key parameters and algorithmic components on system performance. Finally, we conduct a glass ceiling analysis to study the current limitations of the method, and possible directions for future work are proposed.

#### [Paper (PDF)](http://www.justinsalamon.com/uploads/4/3/9/4/4394963/salamon_gomez_ellis_richard_melodyextractionreview_ieeespm_2013.pdf)

#### Source Code

* [VAMP Binary Code to run in Sonic Visualizer](http://mtg.upf.edu/technologies/melodia)
* [Run vamp plugin from python](https://pypi.python.org/pypi/vamp)
* [C++ Implementation in Melodia](http://essentia.upf.edu/documentation/reference/std_PitchMelodia.html)

#### Dataset

* [ADC2004/MIREX05](http://labrosa.ee.columbia.edu/projects/melody/)

#### Evaluation 

* [mir_eval melody evaluation](https://github.com/craffel/mir_eval/blob/master/evaluators/melody_eval.py)

#### Further Information

* http://www.justinsalamon.com/melody-extraction.html
* http://www.music-ir.org/mirex/wiki/2016:Audio_Melody_Extraction

### Singing-Voice Separation From Monaural Recordings Using Robust Principal Component Analysis
Po-Sen Huang, Scott Deeann Chen, Paris Smaragdis, Mark Hasegawa-Johnson

Separating singing voices from music accompaniment is an important task in many applications, such as music information retrieval, lyric recognition and alignment. Music accompaniment can be assumed to be in a low-rank subspace, because of its repetition structure; on the other hand, singing voices can be regarded as relatively sparse within songs. In this paper, based on this assumption, we propose using robust principal component analysis for singing-voice separation from music accompaniment. Moreover, we examine the separation result by using a binary time-frequency masking method. Evaluations on the MIR-1K dataset show that this method can achieve around 1∼1.4 dB higher GNSDR compared with two state-of-the-art approaches without using prior training or requiring particular features.

#### [Paper (PDF)](https://posenhuang.github.io/papers/RPCA_Separation_ICASSP2012.pdf)

#### Source Code

* [Matlab implementation](https://github.com/posenhuang/singingvoiceseparationrpca) (includes evaluation)
* [Python implementation](https://github.com/IoSR-Surrey/untwist) 

#### Dataset

* [MIR-1K](https://sites.google.com/site/unvoicedsoundseparation/mir-1k)

#### Evaluation

* Matlab: [bss_eval](http://bass-db.gforge.inria.fr/bss_eval/)
* Python: [mir_eval](https://github.com/craffel/mir_eval)

### REpeating Pattern Extraction Technique (REPET): A Simple Method for Music/Voice Separation
Zafar Rafii, Bryan Pardo

Abstract—Repetition is a core principle in music. Many musical pieces are characterized by an underlying repeating structure over which varying elements are superimposed. This is especially true for pop songs where a singer often overlays varying vocals on a repeating accompaniment. On this basis, we present the REpeating Pattern Extraction Technique (REPET), a novel and simple approach for separating the repeating “background” from the non-repeating “foreground” in a mixture. The basic idea is to identify the periodically repeating segments in the audio, compare them to a repeating segment model derived from them, and extract the repeating patterns via time-frequency masking. Experiments on data sets of 1,000 song clips and 14 full-track real-world songs showed that this method can be successfully applied for music/voice separation, competing with two recent state-of-the-art approaches. Further experiments showed that REPET can also be used as a preprocessor to pitch detection algorithms to improve melody extraction.

### [Paper (PDF)](http://www.zafarrafii.com/doc/Rafii-Pardo%20-%20REpeating%20Pattern%20Extraction%20Technique%20(REPET)%20A%20Simple%20Method%20for%20Music-Voice%20Separation%20-%20TALSP%202013.pdf)

#### Source Code

* [Matlab Implementation](http://www.zafarrafii.com/repet.html#Original_REPET_)

#### Dataset

* [MIR-1K](https://sites.google.com/site/unvoicedsoundseparation/mir-1k)

#### Evaluation

* Matlab: [bss_eval](http://bass-db.gforge.inria.fr/bss_eval/)
* Python: [mir_eval](https://github.com/craffel/mir_eval)

### Large-Scale Content-Based Matching of Midi and Audio Files
Colin Raffel, Daniel P. W. Ellis

MIDI files, when paired with corresponding audio record- ings, can be used as ground truth for many music infor- mation retrieval tasks. We present a system which can efficiently match and align MIDI files to entries in a large corpus of audio content based solely on content, i.e., with- out using any metadata. The core of our approach is a con- volutional network-based cross-modality hashing scheme which transforms feature matrices into sequences of vectors in a common Hamming space. Once represented in this way, we can efficiently perform large-scale dynamic time warping searches to match MIDI data to audio recordings. We evaluate our approach on the task of matching a huge corpus of MIDI files to the Million Song Dataset.

#### [Download Paper (PDF)](http://colinraffel.com/publications/ismir2015large.pdf)

#### Source Code

* [Python Implementation](https://github.com/craffel/midi-dataset)

#### Dataset

* [The Lakh MIDI Dataset](http://colinraffel.com/projects/lmd)

#### Tempo Estimation for Music Loops and a Simple Confidence Measure
Font, F., & Serra, X.

* [Source Code](https://github.com/ffont/ismir2016)
