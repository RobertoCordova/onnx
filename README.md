# Machine Learning ecosystem with ONNX
<i>This example is base in <a href="https://www.youtube.com/watch?v=Vs730jsRgO8">How to run PyTorch models in the browser with ONNX.js</a></i>

Sometimes instead of execute our model in the cloud, we need to run it in our customer device. To manage this requirement we will use <a href="https://onnx.ai/">ONNX</a>, it is an open format built to represent machine learning models.
<p>This project builds a model in the client environment, in this case, a
<a href="https://github.com/RobertoCordova/onnx">web application</a>.</p>

I trained a basic neuronal network to detect air image using <a href="https://pytorch.org/">Pytorch</a> . The image is capture in a web application and I will try to predict the label in the client side.


I imported a model with air images.
<p align="center">
        <img src="./imgs/import_dataset.png"/>

Those are the labels for the images in the dataset.
<p align="center">
        <img src="./imgs/labels.png"/>

Some image that I used for clasification
<p align="center">
        <img src="./imgs/imgs_sample.png"/>

For my model layer, I will use <a href="https://en.wikipedia.org/wiki/Transfer_learning">Transfer Learning</a>, importing a image for an existing model and just changed the last layer to use my images.
<p align="center">
        <img src="./imgs/transfer_learning.png"/>

Validating my model with diferents images.
<p align="center">
        <img src="./imgs/validation.png"/>

Now, I want export my model to use in my web application, unfortunally do not exits a Pytorch version for Javascript. We have a handful of options here, one of then is <a href="https://www.tensorflow.org/js">TensorFlowjs</a>, this library takes your model and transforms it into a Javascript compatible version.But for this project I will use ONNX, this library generates a representation of my neural network and I can use it with Pytorch, Tensorflow or any tool that can read this format. </br>
ONNX has a Javascritp version called <a href="https://github.com/microsoft/onnxjs">ONNX.js</a>

<p>Pytorch is able to export my model to ONNX format, and in the browser, I can read the model with ONNX.js</p>

I trained my model as normal, but I will change the way to export the model.
<p align="center">
        <img src="./imgs/export.png"/>

This step is optional, but as I know the format of the uncomming data, so I prefer do this with Pytorch, in Javascript is a little more complicate. 
Also added <a href="https://en.wikipedia.org/wiki/Softmax_function">Softmax</a>   because I want to have probability distribution in my outcome.
<p align="center">
        <img src="./imgs/pre_post_process.png"/>

Once I have exported model, I will test in order to be sure that it will work.
<p align="center">
        <img src="./imgs/test.png"/>

 <hr>
If you come from the future and I published this post a few days ago, maybe the whole exercise is finished and you can take a look at it.
