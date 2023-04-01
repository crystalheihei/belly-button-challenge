# belly-button-challenge

Build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Instructions
Complete the following steps:

Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Use sample_values as the values for the bar chart.

Use otu_ids as the labels for the bar chart.

Use otu_labels as the hovertext for the chart.

bar Chart
![image](https://user-images.githubusercontent.com/118711472/229310501-a8f083a7-6a52-40f2-89e2-7f6884972ce0.png)


Create a bubble chart that displays each sample.

Use otu_ids for the x values.

Use sample_values for the y values.

Use sample_values for the marker size.

Use otu_ids for the marker colors.

Use otu_labels for the text values.

Bubble Chart
![image](https://user-images.githubusercontent.com/118711472/229310503-80885365-5c00-4ad9-a8ab-00afad33b17a.png)


Display the sample metadata, i.e., an individual's demographic information.

Display each key-value pair from the metadata JSON object somewhere on the page.

hw
![image](https://user-images.githubusercontent.com/118711472/229310515-bc6e50d3-853e-4264-a380-3e8f228461df.png)


Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

hw
![image](https://user-images.githubusercontent.com/118711472/229310526-bda19b8a-9b4c-40c5-82f9-16e48f3ca348.png)

