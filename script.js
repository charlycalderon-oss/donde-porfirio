var M={
"Cafés":[["Tinto",3500],["Americano",4500],["Carajillo",7500],["Capuchino clásico",6000],["Capuchino con licor",8000],["Capuchino caramelo",7000],["Capuchino caramelo licor",8500],["Mocachino (chocolate-cocoa)",7000],["Milo",7000]],
"Malteadas":[["Malteada de café",11000],["Malteada de Milo",11000],["Malteada de maracuyá",11000],["Malteada con licor",14000]],
"Aromáticas":[["Frutos rojos",6000],["Frutos amarillos",6000]],
"Tortas":[["Torta de zanahoria",5500],["Pastel de chocolate",7000],["Torta de maduro",5500]],
"Otros comestibles":[["Fresas con crema",11000],["Duraznos con crema",13000],["Empanaditas",1000],["Papas paquete artesanal",5000]],
"Vinos":[["Vino de mora (copa)",10500],["Vino de borojó (copa)",10500],["Vino de uchuva (copa)",10500],["Vino (botella)",41000]],
"Sodas":[["Soda de maracuyá",8000],["Soda de tamarindo",8000],["Soda de lulo",8000]],
"Cervezas":[["Águila",6000],["Águila Light",6000],["Club Colombia Dorada",7000],["Club Colombia Trigo",7000],["Stella Artois",7500]]};
var notes={"Cervezas":"Micheladas: $1.500 adicionales.","Malteadas":"Consulta con el local por cambios de sabor."};
var fmt=function(n){return "$"+n.toLocaleString("es-CO")};
var tabs=document.getElementById("tabs"),menu=document.getElementById("menu"),mn=document.getElementById("mnote");
function show(k){
 [].forEach.call(tabs.children,function(b){b.setAttribute("aria-selected",b.textContent===k)});
 menu.innerHTML=M[k].map(function(i){return '<li><span class="n">'+i[0]+'</span><span class="p">'+fmt(i[1])+'</span></li>'}).join("");
 mn.textContent=k==="Cervezas"?notes[k]:"";
}
Object.keys(M).forEach(function(k,i){var b=document.createElement("button");b.type="button";b.role="tab";b.textContent=k;b.onclick=function(){show(k)};tabs.appendChild(b)});
show("Cafés");
