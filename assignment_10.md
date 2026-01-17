1. text visualization helps identify patterns in large datasets by highlighting the most frequent words and phrases
2. word clouds are an effective way of visualizing text data by displaying the most common words in larger sizes
3. text analysis through visualization reveals key trends by emphasizing frequently occurring words and patterns


(a)

analysis, an, and, are, by, clouds, common, data, datasets, displaying, effective, emphasizing, frequent, frequently, helps, highlighting, identify, in, key, large, larger, most, occurring, of, patterns, phrases, reveals, sizes, text, the, through, trends, visualization, visualizing, way, word, words

| Word          | S1 | S2 | S3 |
| ------------- | -: | -: | -: |
| analysis      |  0 |  0 |  1 |
| an            |  0 |  1 |  0 |
| and           |  1 |  0 |  1 |
| are           |  0 |  1 |  0 |
| by            |  1 |  1 |  1 |
| clouds        |  0 |  1 |  0 |
| common        |  0 |  1 |  0 |
| data          |  0 |  1 |  0 |
| datasets      |  1 |  0 |  0 |
| displaying    |  0 |  1 |  0 |
| effective     |  0 |  1 |  0 |
| emphasizing   |  0 |  0 |  1 |
| frequent      |  1 |  0 |  0 |
| frequently    |  0 |  0 |  1 |
| helps         |  1 |  0 |  0 |
| highlighting  |  1 |  0 |  0 |
| identify      |  1 |  0 |  0 |
| in            |  1 |  1 |  0 |
| key           |  0 |  0 |  1 |
| large         |  1 |  0 |  0 |
| larger        |  0 |  1 |  0 |
| most          |  1 |  1 |  0 |
| occurring     |  0 |  0 |  1 |
| of            |  0 |  1 |  0 |
| patterns      |  1 |  0 |  1 |
| phrases       |  1 |  0 |  0 |
| reveals       |  0 |  0 |  1 |
| sizes         |  0 |  1 |  0 |
| text          |  1 |  1 |  1 |
| the           |  1 |  1 |  0 |
| through       |  0 |  0 |  1 |
| trends        |  0 |  0 |  1 |
| visualization |  1 |  0 |  1 |
| visualizing   |  0 |  1 |  0 |
| way           |  0 |  1 |  0 |
| word          |  0 |  1 |  0 |
| words         |  1 |  1 |  1 |

(b)
Cosine similarities

Vector lengths:
||S1|| = 13^0.5 ~ 3.61
||S2|| = 14^0.5 ~ 3.74
||S3|| = 11^0.5 ~ 3.32

Dot products:
S1 · S2 = 6
(shared words: by, in, most, text, the, words)

S1 · S3 = 6
(shared words: and, by, patterns, text, visualization, words)

S2 · S3 = 3
(shared words: by, text, words)

Cosine similarities

cos(S1, S2) = 6 / (3.61 x 3.74) ~ 0.44

cos(S1, S3) = 6 / (3.61 x 3.32) ~ 0.50

cos(S2, S3) = 3 / (3.74 x 3.32) ~0.24

Observations:
- S1 and S3 are most similar,  which makes sense: both focus on text, visualization, patterns, and analysis.
- S2 is different in wording, even though it is thematically related.
- Many similarities are driven by common function words (by, the, in, most).


Effect of removing stop words

Stop words removed:
an, and, are, by, in, of, the

What happens?

- Dot products decrease because many shared words were stop words.
- Similarities drop, especially for sentence pairs that shared mostly function words.
- Content words (text, visualization, patterns, words) dominate the similarity.

Resulting trend (qualitative):
- S1–S3 similarity remains highest
- S1–S2 and S2–S3 similarities decrease noticeably
- Differences between documents become clearer
