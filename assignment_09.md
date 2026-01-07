
# Assignment 9

## Task 1 Principal Component Analysis (PCA) [Points: 3]
Visual Analytics can be described as the combination of interactive visualizations and automated
analysis. Consider the example of classifying data, i.e., you have a set of high-dimensional datapoints
and want to assign them to different classes. Your task is to pitch a Visual Analytics approach. For
this, answer the following questions as brief as possible.

### (a) (2 points) What three characteristics do typical VA problems have?
1. Complex: The data structures and relationships are intricate, often requiring sophisticated analytical techniques.
2. Underspecified: Problems may lack clear definitions, making it challenging to establish specific goals or queries for analysis.
3. Open-ended: Users may explore various questions and insights, resulting in a non-linear exploration process.


### (b) (2 points) How are interactive visualization and automated analysis used?
- Interactive Visualization: This allows users to engage with data through various visual formats, such as scatter plots or heatmaps, enabling them to manipulate views, zoom in/out, and filter data in real-time for personalized insights.
- Automated Analysis: Employs algorithms to process data efficiently, identifying patterns and classifications that may not be immediately apparent, thus providing a foundation for exploration and helping to suggest relevant visualizations.


### (c) (2 points) What are the limits of the interactive visualization and automated analysis approaches if used without the other?
- Without Interactive Visualization: Automated analysis can yield results, but users may struggle to interpret findings or apply them to specific contexts, limiting actionable insights.
- Without Automated Analysis: Interactive visualization may be intuitive but can overwhelm users with information, making it difficult to discern meaningful patterns or insights without analytic backing.


### (d) (2 points) The dataset is too big to visualize everything at once. How do you deal with that?
- Data Sampling: Randomly select a representative subset of the data for visualization while ensuring it retains characteristic distributions.
- Aggregation: Combine data points to show summary statistics instead of individual points, allowing a clearer overview.
- Progressive Loading: Initially load a small portion of the dataset and progressively reveal more data based on user interaction or interest.


### (e) (2 points) How will you ensure data and analysis provenance?
- Metadata Documentation: Maintain detailed logs of data sources, transformations, and analysis steps, capturing the origin and modifications of the data throughout the process.
- Version Control: Utilize tools to track changes to data and analyses over time, ensuring that every step can be traced back to its source.
- User Annotations: Allow users to add comments or tags to specific analyses or visualizations, providing context regarding decisions and insights derived during the exploration process.


## Task 2 k-Means Clustering Impl [Points: 10]

### (b) (2 points) Test different values of k (< 10) for the following questions. What can you observe from the visual representation when you change k? How good is the clustering and which k give good results? What happens, when you run the algorithm multiple times with the same k?
- Observation: As I tested different values of k (from 1 to 9), I noticed that:
        With a lower value of k, the clusters may be too broad, grouping dissimilar points together.
        As k increases, the clustering becomes more refined. However, too high a value may lead to overfitting, where noise or outliers are considered as separate clusters.

- Good Results: Due to the nature of the dataset, a k = 3 lead to the best clustering results. But also bigger values of k provided reasonable results with splitting the clusters into smaller sub-clusters.

- Multiple Runs: When running the algorithm multiple times with the same k, variations in the resultant cluster composition may occur due to the random initialization of centroids.


### (c) (2 points) In which cases does k-means fail to provide appropriate cluster assignments? What other clustering algorithm could be used instead?
- Non-Spherical Clusters: If clusters are not spherical or have varying densities, k-Means may not find meaningful groupings. (Example top right center cluster and ring around)
- Outliers: The presence of outliers can skew the centroids significantly, leading to poor clustering results.
- Overlapping Clusters: When clusters overlap significantly, k-Means may misassign points to the nearest centroid. (We can see that on the bottom left)
