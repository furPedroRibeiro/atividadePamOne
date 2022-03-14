function Write(msg){
    document.getElementById('textarea').innerHTML = msg;
}

function MostrarTriangulo(){
        let A =parseInt(document.getElementById("lado1").value);
        let B =parseInt(document.getElementById("lado2").value);
        let C =parseInt(document.getElementById("lado3").value);
        if( (A<B+C) && (B<A+C) && (C<B+A) ){
            if(A == B && B == C){
                Write('Equilátero');
            }else if(A == C || A == B || B == C){
                Write('Isósceles');
            }else{
                Write('Escaleno');
            }
    }else{
        Write('Não é um triângulo');
    }
}