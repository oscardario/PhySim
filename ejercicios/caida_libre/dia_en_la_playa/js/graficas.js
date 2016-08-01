function grafica(){
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'line'
        },
        title: {
            text: 'Dia en la Playa'
        },
       
        yAxis: {
            title: {
                text: 'Distancia'
            }
        },
         tooltip: {
            crosshairs: [true],
   formatter: function() {
        return 'Tiempo: <b>' + this.x + '</b> seg y Altura <b>' + this.y + '</b> metros';
    }     
},
    series: [{
            name: 'Tiempo',
            data: [{ x: 1.74,  y: 0},{ x: 1.74,  y: 17.05}]
        }]
    });

}
