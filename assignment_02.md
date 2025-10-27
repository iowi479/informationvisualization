
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
larger than 1 megapixel with a bit depth of 8 (255 possible gray values). To choose the number of
bins (k), does any of the rules discussed in the lecture (square root rule, Sturge’s formula, Scott’s
choice) apply here? Explain your choice briefly

We alread have good buckets. With only 255 distinct greyscale values. We can just use these as buckets.
In theory all of the rules discussed in the lecture can be applied. But whether they make sense is the question.
For example the quare root rule doesnt really make sence because we loose a lot of information by only taking 16 buckets.
In this use case it just doesnt really make sense to reduce the number of buckets at all.


## Task 6 Dot Matrix Chart [Impl] [Points: 10]
### (f) (2 points) Visual Variables
Name two visual variables that encode a Pokémon type and two visual variables that encode
the quantity of Pokémon of a specific type.

- The Pokemon type is encoded in the position on the field (first type) and the color (second type).
- The quantity is encoded in the number of circles per space of a specific type.
  And also by how many circles with the types color are on the whole field (secondary type).
