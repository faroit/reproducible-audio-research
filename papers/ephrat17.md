### Vid2Speech: speech reconstruction from silent video
Ariel Ephrat and Shmuel Peleg

Speechreading is a notoriously difficult task for humans to
perform. In this paper we present an end-to-end model based
on a convolutional neural network (CNN) for generating an
intelligible acoustic speech signal from silent video frames
of a speaking person. The proposed CNN generates sound
features for each frame based on its neighboring frames.
Waveforms are then synthesized from the learned speech
features to produce intelligible speech. We show that by
leveraging the automatic feature learning capabilities of a
CNN, we can obtain state-of-the-art word intelligibility on
the GRID dataset, and show promising results for learning
out-of-vocabulary (OOV) words.

#### [Paper (PDF)](http://www.cs.huji.ac.il/~peleg/papers/arXiv1701.00495-Vid2Speech.pdf)

#### Source Code

* [Python + Keras Model](https://github.com/arielephrat/vid2speech)

#### Dataset

* [GRID corpus](http://spandh.dcs.shef.ac.uk/gridcorpus/)

#### Evaluation

* subjective

#### Further Information

* http://www.vision.huji.ac.il/vid2speech/
