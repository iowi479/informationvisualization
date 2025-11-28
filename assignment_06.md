
# Assignment 6


## Task 1 IT Marketing Plan [Points: 3]
The marketing team of a big IT company should retrospectively analyze the company’s data sales,
then present future plans and strategies in the upcoming years for their annual report.
The three-dimensional bar chart plot in Figure 1 shows the evolution of their worldwide shipments
over the last decade for the three most sold devices, namely desktop PCs, laptops and tablets.
Figure 1: Bar chart visualization of trivariate data (devices shipments over the last years).
### (a) (1 points) What is a limitation of the visualization in Figure 1?
With data more diverse than in the shown chart, it becomes challenging to interpret actual values.
There is a limit on different categories. We can barely see the category at the back.
With more, it would be even more difficult to read.

### (b) (1 points) Describe an alternative solution to avoid the chart’s limitations.
We could use a grouped 2D bar chart instead of a 3D one.
That way we can easily see all categories without occlusion.
We can also see the grouping by category in color difference.
The Groups of years show the time axis.

### (c) (1 points) Keeping the 3D bar chart, describe how could the chart’s limitation be alleviated.
By not plotting the bars behind each other but rather offset, we could make all bars visible.
This would make it easier to read the values of each bar.


## Task 2 Multivariate Data Plots [Points: 5]
### (b) (1 points) Which patterns can you observe in the SPLOM in Figure 2?
Between D and A we could argue there is a negative correlation between blue and dark red.
Between A and B we can observe a positive correlation because the lines are near parallel.
Between B and C we can observe a negative correlation because the lines cross each other.



### (c) (1 points) Name an advantage of a SPLOM over a PCP visualization, and an advantage of a PCP over SPLOM.
- Advantage of SPLOM over PCP
    SPLOM allows for an immediate intuitive understanding of pairwise relationships between multiple variables.
    It efficiently visualizes correlations across numerous dimensions simultaneously,
    enabling quick comparisons across pairs without the need for navigating through multiple dimensions.

- Advantage of PCP over SPLOM
    PCP (Parallel Coordinates Plot) handles high-dimensional data more effectively by allowing each variable to be represented as a separate axis.
    This makes it easier to visualize multi-dimensional relationships in datasets with many variables,
    as it can show all dimensions in a single view without the clutter that can occur in SPLOM when many pairs are involved.


## Task 4 Dimensionality Reduction [Points: 3]
### (a) (2 points) What is a key difference between PCA and other algorithms like t-SNE or MDS?
Explain how this difference affects interpretability for both categories of algorithms.

PCA is a linear dimensionality reduction technique that transforms the data into a new coordinate system and identifies linear combinations.
It is computationally efficient.
The resulting components are linear combinations of the original features,making them interpretable in terms of the original data.

In contrast, t-SNE and MDS are non-linear techniques.
These non-linear methods often result in embeddings that are less interpretable, as the new dimensions
do not have a straightforward relationship to the original features.

### (b) (1 points) What information about the data does PCA preserve? Give an example (2D -> 1D)
where other information of the data is lost when performing a PCA projection

PCA preserves the directions of maximum variance in the data.
For example, when reducing a 2D dataset to 1D using PCA, the projection captures the direction along which the data points vary the most.
However, this projection may lose information about the relationships between the two original dimensions,
such as clusters or patterns that were present in the 2D space but are not captured in the 1D representation.

Example:
Data which is spread along a diagonal line in 2D space will be well represented in 1D by PCA.
The data is spread around the diagonal line with some variance orthogonal to it.

We identify the diagonal line as the direction of maximum variance.
And plot the data as points along this line in 1D.

We lose the variance orthogonal to the diagonal line.







