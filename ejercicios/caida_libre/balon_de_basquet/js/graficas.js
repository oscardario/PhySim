function grafica(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'line'
        },
        title: {
            text: 'El Tornillo'
        },
       
        yAxis: {
            title: {
                text: 'Distancia en Metros'
            }
        },
         tooltip: {
            crosshairs: [true],
   formatter: function() {
        return 'Tiempo: <b>' + this.x + '</b> seg y Altura <b>' + this.y + '</b> metros';
    }     
},
    series: [{
            name: 'Tiempo En Segundos',
            data: [{ x: 0,  y: 0},{ x: 0,  y: 9.3},{ x: 0,  y: 18.6},{ x: 0,  y: 28}]
        }]
    });

}
