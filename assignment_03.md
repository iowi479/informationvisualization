
# Assignment 3

## Task 1 Visual encoding/Perception [Points: 2]
Figure 1 shows a map of the results of the 2014 referendum for Scottish independence from the
United Kingdom. The referendum question was “Should Scotland be an independent country?”,
which voters answered with “Yes” or “No”.

### (a) (1 points) Explain in terms of visual encoding & perception why this visualization may lead to the distorted interpretation that “No” voters won by an overwhelming landslide?

- Color Saturation: The saturated red color used for "No" votes has a stronger visual impact compared to the lighter shade used for "Yes" votes. 
    This can create a perception of dominance for the "No" votes, especially in areas where the "No" vote percentage is significantly higher.

- Area Size: The map’s geographic representation contributes to misinterpretation. Larger areas with "No" votes, imply many voters. Although it might be that dense small Cities have much more voters than a thin populated area.

- Legend: The legend does not really help the viewers to accurately gauge the percentages indicated by color.
    The used intervals between shades are not intuitively enough to get the whole picture correctly.

### (b) (1 points) Briefly describe how you could change or adapt the visualization to mitigate this issue. You may also include a sketch or provide an existing example to better illustrate your idea.

- Proportional Areas: Instead of using a standard geographical map, a cartogram could be employed where the size of each area is adjusted based on the number of voters. 
    This method would visually represent the population rather than the land area, making it clear how vote distributions align with population density.

- Color Encoding: Instead of Red-Green we could use a color scheme based on the hue and intensity.
    With a different color scheme a difference of 49% to 51% is not that big as going from green to red for such a small difference.

- Vote Counts: We could add actual voting counts on each area to make the propotions clearer.


## Task 2 Gestalt Laws [Points: 6]
Figure 2 below shows how students spend their time on average during three periods of the year:
the start of semester, the exam period, and the summer break.
In the lecture we discussed Gestalt Laws for pattern perception. The following requires you to make
yourself familiar with the set of laws and to make use of them to achieve your goal.

### (a) (4 points) Name the Gestalt Laws you used and explain shortly why it helps to quickly identify the groupings.
Through the use of two different Gestalt Laws, link together the bars which belong
to the same period of the year (start of semester, exam period or summer break), AND the
bars which represent the same activity (sleeping, studying or having fun). Draw one sketch
comprising both Gestalt Laws/solutions, i.e. you are not allowed to draw two separate sketches!
Name the Gestalt Laws you used and explain shortly why it helps to quickly identify the
groupings.

- Law of Proximity: By placing the bars representing the same timeframe together and spacing the frames appart, viewers can easily identify which activities belong to each period of the year. 
    The close proximity of bars within the same group helps the brain to perceive them as related.

- Law of Similarity: By using consistent colors for the same activities across different time periods, viewers can quickly identify and compare how much time is spent on each activity regardless of the timeframe.

### (b) (2 points) Name a third Gestalt Law which you DID NOT use in part (a) and explain how it impacts our perception.
- Law of Continuity: When seeing multiple entites, our Brain is assuming that these entities are constructed out of smooth shapes.
    It is unlikely, that the overlayed entities are contstructed out of weird shapes just to give the impression of another construction.

    Example Venn Diagram of two Sets.
    - Our Brain assumes that these are two overlapping circles.
    - But it could really be two partial circles(like a moon) with a cut out.


## Task 3 Preattentive Processing [Points: 5]
Figure 3 shows the results of an experiment conducted to measure the preattentive task response
time of participants. To measure the response time (in ms), participants were asked to press a button
as soon as they identified the target. The number of distractors were increased between tests.

### (a) (1 points) Can the task be considered preattentive? Explain your reasoning!
From the description of the experiment, it seems that the task can be considered preattentive.
Showing a special target among the distractors is a classic example of a preattentive task.
Althoug we have already seent that not all target visualizations are preattentive.
So it depends on the actual visual properties of the target and distractors.


### (b) (1 points) Argue why a response time of 450 to 600 ms (and remaining relatively constant with the increase in distractors) in an actual study does not contradict this observation.
Healey et al. describe preattentively processed visual properties to be identified in less than 200-250 ms.

It could be that the target really is identified really fast but the response time is increased by other factors.
For example decision making of pressing the button.
Or even time taken to move the finger to the button.

The slight increas in response time with more distractors could be due to the increased cognitive load of processing more information, even if the initial detection of the target is preattentive.


### (c) (1 points) Is this a good choice to make use of preattentive processing to quickly identify failures? Explain your reasoning and provide a possible alternative if you disagree!
You are a quality control manager at a high-tech manufacturing plant. You are
monitoring a batch of 200 high-precision cylindrical rods as they come off the assembly line.
Your friend creates an interface to visualize the quality of the rods, where the slope of the rod in
the visualization represents its quality, and failures are represented with a vertical rod. Figure 4
provides an example of how the visual mapping could look like. 

Using slope to represent quality is not a good choice for preattentive processing.
The human visual system is not particularly sensitive to slope differences, especially when the differences are subtle.
This means that identifying a vertical rod among slightly sloped rods may not be immediate or preattentive.

A better alternative would be to use color coding.
Normal rods could be represented in green, while failed rods could be represented in red.
This color contrast would allow for immediate identification of failures, as the human visual system is highly sensitive to color differences.

### (d) (2 points) You want to develop a dynamic dashboard displaying the current temperature of
each machine in a factory, allowing to intervene quickly if a machine overheats. Sketch and
explain how you could exploit preattentive processing to monitor the temperatures and improve
the performance of the task. Please upload your sketch as a PDF to ILIAS!

- Color Coding: Use a color gradient from green (normal) over redish (above normal) to red (overheat) for temperature indicators. This gradient allows quick visual discrimination of temperature levels.
- Dynamic Visual Alerts: Incorporate flashing or pulsating effects for machines that exceed safe temperature thresholds, creating immediate visual alerts.


## Task 4 Change Blindness Test Impl [Points: 7]

### (d) (1 points) Explain the potential problem if you were to use the frameCount instead of the deltaTime to switch between the different scenes?
The frame time might differ depending on the performance of the device running the code.
Therefore using frameCount could lead to inconsistent timing for scene changes across different devices.
Or even changes in speed depending on the current load of the device.
