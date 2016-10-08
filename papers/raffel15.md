### Large-Scale Content-Based Matching of Midi and Audio Files
Colin Raffel, Daniel P. W. Ellis

MIDI files, when paired with corresponding audio record- ings, can be used as ground truth for many music infor- mation retrieval tasks. We present a system which can efficiently match and align MIDI files to entries in a large corpus of audio content based solely on content, i.e., with- out using any metadata. The core of our approach is a con- volutional network-based cross-modality hashing scheme which transforms feature matrices into sequences of vectors in a common Hamming space. Once represented in this way, we can efficiently perform large-scale dynamic time warping searches to match MIDI data to audio recordings. We evaluate our approach on the task of matching a huge corpus of MIDI files to the Million Song Dataset.

#### [Download Paper (PDF)](http://colinraffel.com/publications/ismir2015large.pdf)

#### Source Code

* [Python Implementation](https://github.com/craffel/midi-dataset)

#### Dataset

* [The Lakh MIDI Dataset](http://colinraffel.com/projects/lmd)
