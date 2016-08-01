function grafica(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'line'
        },
        title: {
            text: 'Midiendo Distancia'
        },
       
        yAxis: {
            title: {
                text: 'Distancia Mentros'
            }
        },
         tooltip: {
            crosshairs: [true],
   formatter: function() {
        return 'Tiempo: <b>' + this.x + '</b> seg y Altura <b>' + this.y + '</b> metros';
    }     
},
    series: [{
            name: 'Tiempo en Segundos',
            data: [{ x: 0,  y: 0},{ x: 0,  y: 44.1}]
        }]
    });

}
