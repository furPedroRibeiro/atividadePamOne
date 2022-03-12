    
    function MostrarTriangulo(){
        let lado1=document.getElementById("lado1").value;
        let lado2=document.getElementById("lado2").value;
        let lado3=document.getElementById("lado3").value;


        if(lado1>(lado2+lado3) || lado2>(lado1+lado3) || lado3>(lado1+lado2)){
            document.getElementById("textarea").value="Não é triângulo";
        }
        else{
            if(lado1==lado2 && lado1==lado3){
                document.getElementById("textarea").value="É um triângulo equilátero";
            }
            else if(lado1==lado2 && lado1!=lado3){
                document.getElementById("textarea").value="É um triângulo isósceles";
            }
            else if(lado1!=lado2 && lado1!=lado3){
                document.getElementById("textarea").value="É um triângulo escaleno";
            }
        }
    }