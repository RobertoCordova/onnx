const lables =[
  'sparseresidential',
  'mediumresidential',
  'agricultural',
  'airplane',
  'buildings',
  'mobilehomepark',
  'baseballdiamond',
  'golfcourse',
  'beach',
  'storagetanks',
  'forest',
  'runway',
  'denseresidential',
  'freeway',
  'tenniscourt',
  'harbor',
  'chaparral',
  'river',
  'intersection',
  'overpass',
  'parkinglot']

const session = new onnx.InferenceSession();
session.loadModel("/model_onnx.onnx").then(()=>{
    console.log("modelo cargado correctamente")
})
document.addEventListener('DOMContentLoaded', function() {
  
    var mymap = L.map('mapa').setView([-2.20, -79.90], 17);
    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    //     maxZoom: 18,
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    //         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     id: 'mapbox/streets-v11',
    //     tileSize: 512,
    //     zoomOffset: -1
    // }).addTo(mymap);
    L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(mymap);

    var btn = document.getElementById("btn");
    // var x = document.getElementById("myBtn");
    // x.disabled = true;
    // btn.innerText = "Cargando...";
    // alert('nbtn', btn)
    document.getElementById("btn").addEventListener("click", function() {
        btn.innerText = "Cargando...";
        btn.disable = true;

        return leafletImage(mymap, function(err, canvas){
            alert("entra")
        });
        //     const img = new Image();
        //     img.src = canvas.toDataURL();

        //     img.onload = function (){
        //         alert("entra")
        //         // crop_canvas = document.getElementById('crop_canvas')

        //         // img.onload = function () {
        //         //     crop_canvas = document.getElementById()
        //         //     const w = crop_canvas.width
        //         //     const h = crop_canvas.height
        //         //     const sx = (canvas.width - w) / 2
        //         //     const sy = (canvas.height - h) / 2
        //         //     crop_canvas.getContext('2d').drawImage(img,sx,sy,w,h,0,0,w,h)
        //         // };
        //         // const imageData = crop_canvas
        //         // .getContext("2d")
        //         // .getImageData(0,0,w,h);

        //         // const tensorX = new onnx.Tensor(
        //         //     new Float32Array(imageData.data),
        //         //     "float32",
        //         //     [w,h,4]
        //         // );

        //         // return session.run([tensorX])
        //         // .then(output => {
        //         //     const pred = output.values().next().value.data;
        //         //     const maxValue = Math.max.apply(null, pred)
        //         //     const maxIdx = pred.indexOf(maxValue)
        //         //     const label = lables[maxIdx]

        //         //     const panel = document.getElementById('resultado')
        //         //     panel.innerText = label

        //         //     btn.innerText='Clasifica'
        //         //     btn.disable = false
        //         // });
        //     }
        // }
        // )
    });
    // x.addEventListener('clik', function(){
    //     btn.innerText = "Cargando...";
    //     btn.disable = true;
    //     alert("entra")
        // return leafletImage(mapa, function(err, canvas){
        //     const img = new Image();
        //     img.src = canvas.toDataURL();

        //     img.onload = function (){
        //         crop_canvas = document.getElementById('crop_canvas')

        //         img.onload = function () {
        //             crop_canvas = document.getElementById()
        //             const w = crop_canvas.width
        //             const h = crop_canvas.height
        //             const sx = (canvas.width - w) / 2
        //             const sy = (canvas.height - h) / 2
        //             crop_canvas.getContext('2d').drawImage(
        //                 img,
        //                 sx,
        //                 sy,
        //                 w,
        //                 h,
        //                 0,
        //                 0,
        //                 w,
        //                 h
        //             )
        //         };
        //         const imageData = crop_canvas
        //         .getContext("2d")
        //         .getImageData(0,0,w,h);

        //         const tensorX = new onnx.Tensor(
        //             new Float32Array(imageData.data),
        //             "float32",
        //             [w,h,4]
        //         );

        //         return session.run([tensorX])
        //         .then(output => {
        //             const pred = output.values().next().value.data;
        //             const maxValue = Math.max.apply(null, pred)
        //             const maxIdx = pred.indexOf(maxValue)
        //             const label = lables[maxIdx]

        //             const panel = document.getElementById('resultado')
        //             panel.innerText = label

        //             btn.innerText='Clasifica'
        //             btn.disable = false
        //         });
        //     }
        // }
        // )
    // });

});