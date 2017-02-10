### Vibrato NTF: source separation by NMF plus frequency modulation cues
Elliot Creager, Noah D. Stein, Roland Badeau, Philippe Depalle

We present Vibrato Nonnegative Tensor Factorization, an
algorithm for single-channel unsupervised audio source
separation with an application to separating instrumental or
vocal sources with nonstationary pitch from music recordings.
Our approach extends Nonnegative Matrix Factorization
for audio modeling by including local estimates of
frequency modulation as cues in the separation. This permits
the modeling and unsupervised separation of vibrato
or glissando musical sources, which is not possible with
the basic matrix factorization formulation.
The algorithm factorizes a sparse nonnegative tensor
comprising the audio spectrogram and local frequencyslope-to-frequency
ratios, which are estimated at each
time-frequency bin using the Distributed Derivative
Method. The use of local frequency modulations as
separation cues is motivated by the principle of common
fate partial grouping from Auditory Scene Analysis,
which hypothesizes that each latent source in a mixture
is characterized perceptually by coherent frequency and
amplitude modulations shared by its component partials.
We derive multiplicative factor updates by MinorizationMaximization,
which guarantees convergence to a local
optimum by iteration. We then compare our method to the
baseline on two separation tasks: one considers synthetic
vibrato notes, while the other considers vibrato string instrument
recordings.

#### [Paper (PDF)](https://arxiv.org/pdf/1606.00037.pdf)

#### Source Code

* [Python](https://github.com/ecreager/vibntf)

#### Dataset

* synthetic

#### Evaluation

* mir_eval
