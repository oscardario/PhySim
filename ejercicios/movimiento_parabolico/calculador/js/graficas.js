var altura = 0;
var ymax = 0;
var xmax = 0;
var punto_medio = 0;

  function obtenercadena(){
    altura = document.getElementById('altura').value;
    ymax = document.getElementById('ymax').value;
    xmax = document.getElementById('xmax').value;
    punto_medio = xmax/2;
    grafica();
  }

function grafica(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'spline'
        },
        title: {
            text: 'Disparo de Cañon'
        },
       
        yAxis: {
            title: {
                text: 'Altura Maxima'
            }
        },
         tooltip: {
            crosshairs: [true],
   formatter: function() {
        return 'Distancia: <b>' + this.x + '</b> metros y Altura <b>' + this.y + '</b> metros';
    }     
},
    series: [{
            name: 'Altura',
            data: [{ x: 0,  y: parseInt(altura) },{ x: parseInt(punto_medio),  y: parseInt(ymax) },{ x: parseInt(xmax),  y: 0 }]
        }]
    });
}

