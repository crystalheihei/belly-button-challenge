
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(url).then(function(data) {
  console.log(data);
});

function init() {

  var dropdownMenu = d3.select("#selDataset");

  d3.json(url).then((data) => {

      var names = data.names;
      names.forEach((name) => {
      dropdownMenu.append("option").text(name).property("value",name);
      });

      var sample_one = names[0];

      console.log(sample_one);

      // Build the initial plots
      buildMetadata(sample_one);
      buildBarchart(sample_one);
      buildBubblechart(sample_one)
  });
};

function buildMetadata(sample){

  d3.json(url).then((data)=>{
      var metadata = data.metadata;
      var results = metadata.filter(sampleObject => sampleObject.id==sample);
      var result = results[0];
      d3.select("#sample-metadata").html("");
      Object.entries(result).forEach(([key, value])=>{
        console.log(key,value);
        d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
  });
});
};

function buildBarchart(sample) {

  d3.json(url).then((data)=>{
      var samples = data.samples;
      var results = samples.filter(sampleObject => sampleObject.id==sample);
      var result = results[0];
      var sample_values=result.sample_values;
      var otu_ids=result.otu_ids;
      var otu_labels=result.otu_labels;
      var yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
      var xticks = sample_values.slice(0,10).reverse();
      var text = otu_labels.slice(0,10).reverse();

      var trace = {
        x: xticks,
        y: yticks,
        text: text,
        type: "bar",
        orientation: "h"
      }

      var layout = {
        title: "Top 10 OTUs"
      };

      Plotly.newPlot("bar", [trace], layout)
});
};

function buildBubblechart(sample) {

  d3.json(url).then((data)=>{
      var samples = data.samples;
      var results = samples.filter(sampleObject => sampleObject.id==sample);
      var result = results[0];
      var sample_values=result.sample_values;
      var otu_ids=result.otu_ids;
      var otu_labels=result.otu_labels;

      var trace1 = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
          size: sample_values,
          color: otu_ids
        }
      }

      var layout = {
        title: "OTUs",
      };

      Plotly.newPlot("bubble", [trace1], layout)
});
};

function optionChanged(newsample) { 

  console.log(newsample); 

  buildMetadata(newsample);
  buildBarchart(newsample);
  buildBubblechart(newsample);
};


init();