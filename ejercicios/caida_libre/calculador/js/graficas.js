var altura = 0;
var tiempo = 0;
  function obtenercadena(){
    altura = document.getElementById('altura').value;
    tiempo = document.getElementById('tiempo').value;
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
        return 'tiempo: <b>' + this.x + '</b> metros y Altura <b>' + this.y + '</b> metros';
    }     
},
    series: [{
            name: 'Altura',
            data: [{ x: parseInt(tiempo),  y: 0 },{ x: parseInt(tiempo),  y: parseInt(altura) }]
        }]
    });
}


