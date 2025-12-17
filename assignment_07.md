
# Assignment 7

## Task 1 Static Visualizations Limitations [Points: 2]
- If the visualized data is highly dimensional, a static visualization will not efficiently show the important relationships and patterns among multiple dimensions.
    It is hard to display anything beyond 2/3 dimensions in a static image.
    The visualization becomes cluttered and hard to interpret really fast.
    With interaction, users can explore different dimensions dynamically.
    Also dimensions can be mapped to more properties like time, etc.

- When there are really small and really large values in the data, static visualizations may struggle to represent both ends of the spectrum effectively.
    We saw this in the treemaps, where we had to make a trade of between showing small values which made the tree enormus and not observable in full.
    Or we had to make the small values not really visible but therefore we could see the big picture of the whole data better.
    With interaction a user could zoom in and out so see only subsets of the data at a time and this will be better scaled.

Limitations listet in VL.
Es gibt verschiedene von denen wir hätten wählen müssen.
- Spacial display limitations
    - Zoom
    - Panning
- Temporal display limitations
    - Filter
    - Scrolling
- Perceptual limitations
    - ...
- Cognitive limitations
    - highlighting
    - show history of action
- Computational limitations
    - too expensive
    - preprocessing
    - only subsections



## Task 2 Interaction Techniques and Categories [Points: 4]
### (a) (2 points) Describe the difference between “overview+detail” and “focus+context”.
- "Overview+detail" is an interaction technique where the user is provided with two separate views:
    One that shows an overview of the entire dataset and another that provides detailed information about a specific part of the data.
    This allows the user to quickly gather an overall understanding using the overview and he can dive into details which the second view.

- "Focus+context" is an interaction technique where the user can focus on a specific part of the data while still being able to see the surrounding context.
    Here we only display a single modified viwe.
    Here the context like the overview is still visible in the view.
    The details are shown in the focused area in more detail.
    An example would be a fisheye lens effect where the focused area is magnified while the surrounding context is still visible but less prominent.


### (b) (2 points) Gapminder offers interactive tools and data visualizations to explore global development trends. Their Bubbles chart1 visualizes data attributes like life expectancy, GDP, etc., over
time for different countries and regions of the world. Users can freely choose which information
is encoded on the two axes and in the color and size of the bubbles. A timeline at the bottom
allows for animation of the changes over time.
Assign the following interactions to the respective interaction category defined by Yi et al.2.
Give a brief explanation of why you chose that category.
- Interaction 1: The user clicks on the zoom button and draws a rectangle on the screen to zoom into the chart (see Figure 1, left).
    - Select: The user is actively selecting a region of interest and the chart is zoomed in.
        The user seelected a area of interest to focus on.

        Should be abstract/elaborate because we get more details of the selected area.

- Interaction 2: After zooming in, the user clicks on the hand button and pans the chart to the left by dragging the scene with the mouse pointer (see Figure 1, right)
    - Explore: The user is exploring different parts of the data by panning around.
        Only a part is shown because the dataset is too large to fit on the screen reasonably.
        Panning doesnt change the scale.
        WE dont change representation


## Task 3 k-D Tree [Points: 6]
Given the following dataset: {(3,4), (9,3), (8,7), (2,3), (4,7), (7,8)}

### (a) (3 points) Sketch a homogeneous 2-D tree. Make sure to find an insertion order that leads to a balanced tree3 (reminder: on even levels you consider the x position, on odd levels the y position, starting with level 0).
-> (7,8), (4,7), (9,3), (2,3), (3,4), (8,7)


Sort and take median


### (c) (1 points) Briefly explain the type of problem that might occur when arbitrary insertion orders are used to build k-D Trees. What is the impact?
When we insert in a bad order, we end up with an unbalanced tree.
This means that some branches are much deeper than others.
In the worst case we end up with a tree that is essentially a linked list since every node only has one child.
Then searching becomes O(n) instead of O(log n) on average for balanced trees.
This removes the efficiency advantage of using a k-D tree for searching.
