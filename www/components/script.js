    
    function MostrarTriangulo(){
        let lado1=document.getElementById("lado1").value;
        let lado2=document.getElementById("lado2").value;
        let lado3=document.getElementById("lado3").value;

        if(lado1>(lado2+lado3) && lado2>(lado1+lado3) && lado3>(lado1+lado2)){
            alert("NÃO É TRIÂNGULO");
        }
        else{
            if(lado1==lado2 && lado1==lado3){
                alert("É um triângulo equilátero :p");
            }
            else if(lado1==lado2 && lado1!=lado3){
                alert("É um triângulo isósceles :p");
            }
            else if(lado1!=lado2 && lado1!=lado3){
                alert("É um triângulo escaleno :p");
            }
        }
    }