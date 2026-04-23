document.addEventListener("DOMContentLoaded", ()=>{
    const btn=document.getElementById("btnConvertir");

    if(!btn) return;

    btn.addEventListener("click", convertir);

    input.addEventListener("keydown",(e) =>{
        if(e.key === "Enter") convertir();
    });

    function convertir(){
        const input = document.getElementById("numero");
        const mensaje= document.getElementById("mensaje");
        const resultado = document.getElementById("resultado");

        let num=Number(input.value);
        mensaje.textContent="";
        resultado.textContent="";

        if(isNaN(num) || num<1){
            mensaje.textContent ="Ingresa un número válido! '1 a 3999'";
            return;
        }

        if(num >3999){
            mensaje.textContent="El número límite es 3999";
            return;
        }

        const romanos =[
            ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
            ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
            ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]           
        ];

        let res="";

        for(let i =0; i< romanos.length;i++){
            while (num>= romanos[i][1]){
                res+= romanos[i][0];
                num-= romanos[i][1];
            }
        }

        resultado.textContent=res;
    }
});
