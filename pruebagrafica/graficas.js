var tiempo2 = 0;
var resultado2 = 0;

  function obtenercadena(){
    tiempo2 = document.getElementById('tiempo').value;
    resultado2 = document.getElementById('resultado').value;
    acciones();
  }

function acciones(){
   var tiempo = parseInt(tiempo2);
    var tiempoc = parseInt(tiempo2);
    var distancia = parseInt(resultado2);
    var distanciap = parseInt(resultado2);
    var x = 0;
    var y = 0; 
    var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'line'
        },
        title: {
            text: 'Fruit Consumption'
        },
       
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
                name: 'Random data',
                data: (function () {
                    var data = [];


/*data.push({ x: 4,  y: 10  },{ x: 10, y: 15  },{ x: 15, y: 25  },{ x: 20,  y: 30  });*/

for (var i = 0; i <= 2; i += 1) {
                        data.push({
                            x:  tiempo ,
                            y: distancia
                        });
                        tiempo = tiempo + tiempoc;
                        distancia = distancia + distanciap
                    }
                   

                    return data;
                }())
            }]
    });

}

