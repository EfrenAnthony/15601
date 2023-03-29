function calendario(){
   Date.prototype.monthDays= function(){
   var d= new Date(this.getFullYear(), this.getMonth()+1, 0);
   return d.getDate();
}
   fecha = new Date();
   fechaActual(fecha); 
   var dias = fecha.monthDays();
   var nombreDias = ['Lu','Ma','Mi','Ju','Vi','Sa','Do'];
   var diacomienzo = empezarDia(fecha); escribirCalendario(fecha,nombreDias,diacomienzo,dias);
}
  
  function mesFecha(mes){
       switch (mes){
           case 0:return 'Enero';break;
           case 1:return 'Febrero';break;
           case 2:return 'Marzo';break;
           case 3:return 'Abril';break;
           case 4:return 'Mayo';break;
           case 5:return 'Junio';break;
           case 6:return 'Julio';break;
           case 7:return 'Agosto';break;
           case 8:return 'Septiembre';break;
           case 9:return 'Octubre';break;
           case 10:return 'Noviembre';break;
           case 11:return 'Diciembre';break;
       }
}
  
   function fechaActual(fecha){
       var anyo = fecha.getFullYear();
       var mes = mesFecha(fecha.getMonth());
       var msg = mes+' de '+anyo; document.getElementById("fechaActual").innerHTML = msg;
   }
  
   function empezarDia(fecha){
       fecha2 = new Date(fecha.getFullYear(),fecha.getMonth(),0);
       var diacomienzo = fecha2.getDay();
       return diacomienzo;
      
   }
  
   function escribirCalendario(fecha,nombreDias,diaComienzo,dias){
       var tds = document.getElementsByTagName('td');
       var contador = 1;
       // Para los dias de la semana;
       for (var i=0;i<tds.length;i++){
          
           if (i>0 && i<8 ){
               tds[i].innerHTML=nombreDias[i-1];
           }
           if (i>7 && diaComienzo!=0){
               tds[i].innerHTML = ' ' ;
               diaComienzo--;
           }
           else if (i>7 && diaComienzo==0 && contador<=dias){
              
               tds[i].innerHTML=contador;
               if (fecha.getDate() == contador){
                   tds[i].style.color = 'red';
               }
               contador++;
              
           }
          
       }
   }