# Machine Learning ecosystem with ONNX
<i>This example is base in <a href="https://www.youtube.com/watch?v=Vs730jsRgO8">How to run PyTorch models in the browser with ONNX.js</a></i>

Sometimes instead of execute our model in the cloud, we need to run it in our customer device. To manage this requirement I will use <a href="https://onnx.ai/">ONNX</a>, it is an open format built to represent machine learning models.
<p>This project runs a model in the client environment, in this case, a web application.</p>

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

For my model layer, I will use <a href="https://en.wikipedia.org/wiki/Transfer_learning">Transfer Learning</a>, to import a image from an existing model and just changed the last layer to use my images.
<p align="center">
        <img src="./imgs/transfer_learning.png"/>

I validate my model with diferents images.
<p align="center">
        <img src="./imgs/validation.png"/>

Now, I want export my model to use in my web application, unfortunally do not exits a Pytorch version for Javascript. We have a handful of options here, one of then is <a href="https://www.tensorflow.org/js">TensorFlowjs</a>, this library takes your model and transforms it into a Javascript compatible version, but for this project I will use ONNX, this library generates a representation of my neural network and I can use it with Pytorch, Tensorflow or any tool that can read this format.
ONNX has a Javascritp version called <a href="https://github.com/microsoft/onnxjs">ONNX.js</a>

<p>Pytorch can export my model to ONNX format, and in the browser, I can read the model with ONNX.js</p>

I trained my model as usual, but I will change the way to export the model.
<p align="center">
        <img src="./imgs/export.png"/>

This step is optional, but since I know the format of the input data, so I prefer do it with Pytorch, in Javascript is a bit more complicate. 
Also added <a href="https://en.wikipedia.org/wiki/Softmax_function">Softmax</a>   because I want to have probability distribution in my result.
<p align="center">
        <img src="./imgs/pre_post_process.png"/>

Once I have exported model, I will test in order to make sure that it will work.
<p align="center">
        <img src="./imgs/test.png"/>

In a few days, I will upload the web application &#128540;
 <hr>
 
If you come from the future and I published this post a few days ago, maybe the whole exercise is finished and you can take a look at it n my <a href="https://github.com/RobertoCordova/onnx">github account</a>.
