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
