var tiempo = 0;
var distancia = 0;

  function obtenercadena(){
    tiempo = document.getElementById('tiempo').value;
    distancia = document.getElementById('distancia').value;
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
            text: 'Movimiento Rectilineo Uniformemente Acelerado'
        },
       
        yAxis: {
            title: {
                text: 'Distancia Alcanzada'
            }
        },
         tooltip: {
            crosshairs: [true],
   formatter: function() {
        return 'Tiempo: <b>' + this.x + '</b> seg y Distancia <b>' + this.y + '</b> metros';
    }     
},
    series: [{
            name: 'Tiempo',
            data: [{ x: 0,  y: 0 },{ x: parseInt(tiempo),  y: parseInt(distancia) }]
        }]
    });
}

