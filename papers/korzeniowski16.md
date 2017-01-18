### FEATURE LEARNING FOR CHORD RECOGNITION: THE DEEP CHROMA EXTRACTOR
Filip Korzeniowski and Gerhard Widmer

We explore frame-level audio feature learning for chord
recognition using artificial neural networks. We present
the argument that chroma vectors potentially hold enough
information to model harmonic content of audio for chord
recognition, but that standard chroma extractors compute
too noisy features. This leads us to propose a learned
chroma feature extractor based on artificial neural networks.
It is trained to compute chroma features that encode
harmonic information important for chord recognition,
while being robust to irrelevant interferences. We
achieve this by feeding the network an audio spectrum with
context instead of a single frame as input. This way, the
network can learn to selectively compensate noise and resolve
harmonic ambiguities.
We compare the resulting features to hand-crafted ones
by using a simple linear frame-wise classifier for chord
recognition on various data sets. The results show that the
learned feature extractor produces superior chroma vectors
for chord recognition.

#### [Download Paper (PDF)](http://www.cp.jku.at/research/papers/Korzeniowski_ISMIR_2016.pdf)

#### Website/Source Code

* [Website](http://fdlm.github.io/post/deepchroma/)
* [Madmon Python Implementation](https://github.com/CPJKU/madmom)
