import Clients from "../models/Clients";

export const getListByAge = async(req,res)=>{
    
    const clients = await Clients.find({}, function(err, users) {
        
        var listByAge = [];
        var promedio;
        var square;        
    
        users.forEach(function(user) {
          listByAge.push(user.age)
        });

        var cant = listByAge.length;
        var count = 0;
        for(var i = 0; i < listByAge.length; i++) { count += listByAge[i] }
        promedio = Math.round(count/cant);

        var total = 0;
        var total1 = 0;
        var temp23;        
        var v;
        var v1;
        var mean;
        for (var i = 0; i < listByAge.length; i++) {
            v = parseFloat(listByAge[i]);
            total += v;
        }        
        mean = total / listByAge.length;
        for (var i = 0; i < listByAge.length; i++) {
        v1 = Math.pow( (parseFloat(listByAge[i])-mean),2 );
        total1 += v1;
        }
        temp23 = total1 / listByAge.length;
        square = Math.sqrt(temp23);
        square = Math.round(square);
    
        res.json( { 'Promedio' : promedio , 'Desviacion estandar' : square } );
    });
}