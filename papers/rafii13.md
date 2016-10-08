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
