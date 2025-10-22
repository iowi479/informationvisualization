
# Assignment 2

## Task 1 Scales of Measurement [Points: 2]
Match the following data types to their respective scale of measurement. Each data type should be
matched with only the best fitting scale, such that a 1-to-1 match is the result.

- Nominal: exam passed (yes/no)
- Ordinal: T-shirt size (S, M, L)
- Interval: temperature in Celsius
- Ratio: discount values offered in a store (12%, 50%, ...)


## Task 2 Bar Chart vs. Pie Chart [Points: 2]
Figure 1 shows a bar chart and a pie chart that show the fraction of mass for chemical elements that
the human body consists of1.
Point out three different things that are problematic in the bar chart, the pie chart, or both (from
a visualization perspective), and briefly explain why they are problematic.

- Due to high amount of Oxygen, the scale of both charts ist not good. It is really hard to distinguish between the low-amount components. There is hardly any indiation for those.
- There is no way to get the actual percentage data out of the visualizations. Only estimates are possible.
- Sort by Percentage instead of names


## Task 3 Visual Encodings [Points: 2]
### (a) (1 points) For visually encoding nominal data, different visual variables are more effective than others. Sort the following variables according to their effectiveness from most to least accurate.
Position, Color, Length, Slope, Area


### (b) (1 points) What is the order of visual variables for quantitative data according to their accuracy, from most to least accurate?
Position, Length, Slope, Area, Color


## Task 4 Chart Junk and Visual Clutter [Points: 2]
What is the difference between chart junk and visual clutter? Explain briefly.

- Chart junk refers to visual elements that are not really necessary to comprehend the information.
  It only distracts the viewer from looking at the informatione.
  This is mostly there because "it looks good" but is not needed.

- Visual clutter is when there is too much infromation shown in the visualization.
  A good example are too many points on a scatter plot so it is really hard to extract any information from it now.


## Task 5 Distributions [Points: 2]
Suppose you want to make a histogram visualization for arbitrary grayscale images (sample size n)
larger than 1 megapixel with a bit depth of 8 (28 possible gray values). To choose the number of
bins (k), does any of the rules discussed in the lecture (square root rule, Sturge’s formula, Scott’s
choice) apply here? Explain your choice briefly

<!-- TODO: Argumentation --> 
- Square Root Rule: Is Yes	This simple rule suggests using the square root of the sample size (n) for bin count. Given that the sample size is quite large (over 1 megapixel), this rule can help provide an initial estimate for bin count.
Sturges’ Formula	Yes	Sturges’ formula calculates the number of bins as k=1+log2​(n). With a very large n, this formula may result in a relatively low number of bins that might be inadequate for distinguishing between the 256 gray values.
Scott’s Choice	Yes	Scott's Choice provides a method for determining the bin width based on standard deviation and sample size, which can create a more adaptive binning suited for the dataset's characteristics. It can be particularly useful if the intensity distribution is not uniform.
Explanation of Choice

    Square Root Rule is useful for quickly estimating a reasonable number of bins when the primary aim is to visualize the data distribution without overcomplicating the representation.

    Sturges’ Formula may not capture the nuances of high-resolution images effectively, as it tends to underestimate bin numbers in larger datasets. This might not adequately represent the full range of gray values.

    Scott’s Choice allows for more tailored bin sizing based on the dataset itself, making it ideal when the variance of pixel intensities is possible. Since grayscale images often have significant variation in pixel intensity, this method can enhance the histogram's visual clarity.

In conclusion, while all these rules can be applied, Scott's Choice may provide the most informative and adaptable approach for large grayscale images, ensuring the histogram captures the nuances of the intensities effectively.
