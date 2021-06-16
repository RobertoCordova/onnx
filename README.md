# Open AI ecosystem with ONNX
This example is base in <a href="https://www.youtube.com/watch?v=Vs730jsRgO8">How to run PyTorch models in the browser with ONNX.js</a>

Sometimes instead of execute our model in the cloud, we need to run it in our customer device. To manage this requerimentm we will use <a href="https://onnx.ai/">ONNX</a>, it is an open format built to represent machine learning models.
<p>This project builds a model in the client environment, in this case, a
<a href="https://github.com/RobertoCordova/onnx">web application</a>.</p>

For this project, I trained a basic neuronal network to detect air image. The image is capture in a web application and I will try to predict the label in the client side.
The trainig process is exactly the same like a conventional model.

I imported a model with air images
<p align="center">
        <img src="./imgs/import_dataset.png"/>

Those are the labels for the images in the dataset
<p align="center">
        <img src="./imgs/labels.png"/>

To train our model as normal, we will change the way that we export the model.

<p><a href="https://github.com/microsoft/onnxjs">ONNX.js</a> is a Javascript library for running ONNX models on browsers and on Node.js.</p>







 <hr>
Remember! .. If you come from the future and I published this post a few days ago, maybe the whole exercise is finished and you can take a look at it by running it
