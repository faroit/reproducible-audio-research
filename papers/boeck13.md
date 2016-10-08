#### Maximum Filter Vibrato Suppression for Onset Detection
Sebastian Böck and Gerhard Widmer

We present SuperFlux - a new onset detection algorithm with vi- brato suppression. It is an enhanced version of the universal spec- tral flux onset detection algorithm, and reduces the number of false positive detections considerably by tracking spectral trajec- tories with a maximum filter. Especially for music with heavy use of vibrato (e.g., sung operas or string performances), the number of false positive detections can be reduced by up to 60% with- out missing any additional events. Algorithm performance was evaluated and compared to state-of-the-art methods on the basis of three different datasets comprising mixed audio material (25,927 onsets), violin recordings (7,677 onsets) and operatic solo voice recordings (1,448 onsets). Due to its causal nature, the algorithm is applicable in both offline and online real-time scenarios.

### [Download Paper (PDF)](http://www.cp.jku.at/research/papers/Boeck_Widmer_DAFx_2013.pdf)

#### Source Code

* [Python standalone implementation](https://github.com/CPJKU/SuperFlux)
* [SuperFlux is also included in Madmon](https://github.com/CPJKU/madmom)

#### Dataset

* [Datasets used in the paper](https://github.com/CPJKU/onset_db) (mostly not freely available)
* [MODAL Dataset (freely available)](https://github.com/johnglover/modal)

#### Evaluation

* [Evaluation using MADMOM](https://github.com/CPJKU/madmom)
