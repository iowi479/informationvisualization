
# Assignment 8

## Task 1 Principal Component Analysis (PCA) [Points: 3]
a) second principal component has to be also through the mean which is in the center of the two clusters.

### (b) (1 points) Assume that the points of the scatter plot in Figure 1 are projected onto the second principal component to achieve a dimensionality reduction into one-dimensional space. Which problem occurs in this specific case?
If we project onto the second principal component we lose all information about the two clusters. Since we project them onto a line which is orthogonal to the direction that separates them, they will overlap completely in the one-dimensional space.
We can not distinguish between the two clusters anymore.


## Task 2 Study Design [Points: 9]
The evaluation of a new visualization technique is an important aspect when creating a new visual-
ization. Often a user study compares two approaches based on different aspects. In this exercise, you
have to describe how to conduct a user study to compare visualizations based on parallel coordinates
and scatter plot matrices, to interpret data correlation with respect to completion time and accuracy.
The study should apply a within-subject design.
Describe how you would conduct such a quantitative, controlled lab study comparing the two visu-
alization techniques.

### (a) (1 points) Create a hypothesis H1 and the corresponding null hypothesis H0 you would evaluate.
- H1: Participants will be faster and more accurate at identifying pairwise correlations using scatter plot matrices (SPLOMs) than using parallel coordinates (PCs).
- H0: There is no difference in completion time or accuracy between SPLOMs and PCs for identifying pairwise correlations.

### (b) (2 points) What are the dependent and independent variables for the hypothesis?
- Independent variable: Visualization technique (two levels: Parallel Coordinates, Scatter Plot Matrix).
- Dependent variables: (1) Completion time per stimulus (continuous), (2) Accuracy of correlation judgment per stimulus (binary/categorical or percentage correct).

### (c) (2 points) We assume that participants take an average of 30 seconds per stimulus and that the
total duration of the experiment should not exceed 60 minutes for each participant (including
30 minutes to read and sign the consent form, get introduced to the task, take a short break
between conditions, etc.). Describe an experimental task to compare three correlation types,
then give the maximum amount of stimuli you could use for this task in total and per correlation
type. Explain your answer briefly.

Task: For each stimulus show a multivariate visualization (either PC or SPLOM) and ask the participant to judge the correlation type between a specified pair of variables: positive linear, negative linear, or no correlation. Record response (accuracy) and response time.

Since we have a timebudget of 60 minutes and 30 minutes are allocated for non-task activities, we have 30 minutes (1800 seconds) available for the experimental task.
With an average of 30 seconds per stimulus, we can present a maximum of 60 stimuli in total (1800 seconds / 30 seconds per stimulus = 60 stimuli).
Since we want to compare three correlation types, we can divide the total number of stimuli equally among the three types.
Therefore, we can present 20 stimuli per correlation type (60 stimuli / 3 correlation types = 20 stimuli per type).

### (d) (2 points) Assume that you have only considered the aspects mentioned in the previous subtasks
in your study. What confounding variables could occur if no further steps are taken for the
study? Name 2 confounding variables and briefly explain what you can do to control these
confounding variables.


- Prior visualization experience: Participants familiar with SPLOMs or PCs may perform better.
    Control: collect self-reported experience and either counterbalance condition order, stratify participants by experience, or include experience as a covariate in analysis.
- Learning / fatigue (order) effects: Performance can improve with practice or decline from fatigue.
    Control: counterbalance the order of techniques across participants (e.g., AB/BA), randomize stimulus order within each condition.

### (e) (2 points) What are the differences between a within-subject and a between-subject study design? Name one benefit and one drawback for each study design
- Within-subject: each participant experiences all conditions.
        Benefit: greater statistical power and fewer participants needed (reduces between-subject variability).
        Drawback: carryover/learning and fatigue effects can bias results.
- Between-subject: each participant experiences only one condition.
        Benefit: no carryover between conditions (no learning/fatigue crossover).
        Drawback: requires more participants and has higher variability due to individual differences, lowering power.


## Task 3 Latin Square [Points: 4]
For this task, we want to use counter-balancing strategies to specify the order of the conditions of
our pilot study. Assume our study design consists of 3 participants, and we want to compare three
visualization techniques with three different modes. Further, we have a within-subject design where
each visualization technique is shown with only one of the modes per participant.
### (a) (2 points) Use the Latin square1 method to counter-balance the presentation order across participants. Fill in the matrix in Figure 2 accordingly.

```
|-------------|-------------|-------------|-------------|
| Participant | Technique 1 | Technique 2 | Technique 3 |
|-------------|-------------|-------------|-------------|
|      1      |      A      |      B      |      C      |
|      2      |      B      |      C      |      A      |
|      3      |      C      |      A      |      B      |
|-------------|-------------|-------------|-------------|
```
### (b) (2 points) Check if the resulting Latin square is orthogonal. If not, then create a mutually orthogonal Latin square2. Explain briefly what the benefit of having mutually orthogonal Latin squares is.
The resulting Latin square is orthogonal because each technique appears exactly once in each row and each column.
The benefit of having mutually orthogonal Latin squares is that we can be sure, that the independent variables are truly independent from each other withou hidden confounding effects.
We can be sure, that the order of presentation does not influence the results of the study.
With this our study design is more robust.


## Task 4 Nested Modeling [Points: 4]
In the lecture, the nested model for visualization design and validation with four layers was presented
to provide guidance for validation methods. Answer the following questions regarding this topic.

### (a) (2 points) Name the four layers of the model and briefly explain the threats to validity for each layer.
- Domain problem characterization: We misidentified the actual problem. This leads to visualizations for other problems and therefore is invalid for the actual one.
- Data/operation abstraction design: Poor abstraction choices that do not accurately represent the underlying data or tasks, leading to misinterpretation.
- Encoding/interaction technique design: Inappropriate visual encodings or interaction techniques that hinder user understanding or usability.
- Algorithm design: Slow or incorrect algorithms for the visualization. Maybe a wrong visualization is computed or the performance is too low for interactivity and therefore it is wronly interpreted.

### (b) (2 points) Name and explain an immediate and a downstream approach for validating if the right problem is addressed by a visualization design
- Immediate: Involve experts of the target domain to review the problem characterization and ensure it aligns with the actual needs and challenges of the domain.
    Experts can provide insights into whether the identified problem is relevant and significant.
    They can also more easily identify problems early on in the design process.

- Downstream: Conduct feedback from target users to assess whether the visualization effectively supports their tasks or not.
    If it is the wrong domain, the users will not adopt the visualization or give negative feedback.

