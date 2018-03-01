## Effect of Transducer Positioning in Active Noise Control


### Sajil C. K., Biji C. L. and Achuthsankar S. Nair
> 5th International Conference on Signal Processing and Integrated Networks(SPIN 2018)

Research in traditional Active Noise Control(ANC) often abstracts acoustic channels with band-limited filter coefficients. This is a limitation in exploring structural and positional aspects of ANC. As a solution to this, we propose the use of room acoustic models in ANC research. As a use case, we demonstrate anti-noise source position optimization using room acoustics models in achieving better noise control. Using numerical simulations, we show that level of cancellation can be improved up to 7.34 dB. All the codes and results are available in the Github repository https://github.com/cksajil/ancram in the spirit of reproducible research.

##### Supplementary code to reproduce the results

### Dependencies
* Python 2.7.(Prefered Anaconda Distribution)
* Numpy, Scipy, Pandas and Matplotlib.
* Code is written with to do computations in parallel on a 4 Node Cluster Computing Facility. Running on a normal PC might take more time.

### How to run the program
Open terminal in any of the Cluster(e.g. Cluster_0) directory and run.
```sh
cd Cluster_0
$ python RunMeClustered.py
```
This will do the simulation and log the results. In our case it took around ~12 Hours.

### Recreate the figures
```sh
$ python ScatterMap.py
```
### Simulation Input Data
The simulation input data is availabel at [Configurations_Zpos_1_53.h5](https://github.com/cksajil/ancram/tree/master/Cluster_0/Input/Configurations_Zpos_1_53.h5)

### Systems Tested

```
|OS Linux|Machine|OptiPlex 7010 (OptiPlex 7010)|64 bits|RAM 8GiB|
CPU : Intel(R) Core(TM) i7-3770 CPU @ 3.40GHz

Python Version and Major Packages:
Python 2.7.13 |Anaconda custom (64-bit)
adaptfilt==0.2, 
cython==0.25.2, 
h5py==2.7.0, 
matplotlib==2.0.2, 
numpy==1.13.1, 
pandas==0.20.1, 
pip==9.0.1,
scipy==0.19.1. 
```
[![Download PDF](https://image.ibb.co/hoAbYk/pdf.png)](https://arxiv.org/pdf/1802.10058)        [![Found a bug ?](https://image.ibb.co/b8twYk/bug.png)](mailto:sajilckdcb@keralauniversity.ac.in)      [![Download Data](https://image.ibb.co/jL5MzQ/data.png)](https://github.com/cksajil/ancram/blob/master/Cluster_0/Results/Results__Zpos_1_53_Cluster_0.csv)     [![Cite](https://image.ibb.co/cVN1zQ/cite.png)]()






### Contact
**Sajil C. K.**,
Research Scholar,
Dept. of Computational Biology & Bioinformatics,
University of Kerala, Kerala- 695581, India.
**Email : sajilckdcb@keralauniversity.ac.in.**



