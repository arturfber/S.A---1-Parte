
<script>

let cont = 0;

let tabela;

function mostrar(id1, id2, id3){


    switch(cont){
    
        case 0:
            
            // CONFIGURAÇÃO H1
            document.getElementById(id1).style.color = 'rgb(255, 255, 255)'
            document.getElementById(id1).style.zIndex = '1'

            // CONFIGURAÇÃO TABLE
            tabela = document.getElementById(id2).style.opacity = '1'
            document.getElementById(id2).style.color = 'rgb(255, 255, 255)'
            document.getElementById(id2).style.zIndex = '1'

            // CONFIGURAÇÃO OFUSCAR
            document.getElementById(id3).style.backgroundColor='rgba(00, 00, 00, 0.8)'
            document.getElementById(id2).style.zIndex = '1'


            cont = 1
            break;

        case 1:

            // CONFIGURAÇÃO H1
            document.getElementById(id1).style.color = '#000'
            document.getElementById(id1).style.zIndex = '1'

            // CONFIGURAÇÃO TABLE
            tabela = document.getElementById(id2).style.opacity = '0'

            // CONFIGURAÇÃO OFUSCAR
            document.getElementById(id3).style.backgroundColor='transparent'
            document.getElementById(id2).style.zIndex = '1'
 
            cont = 0
        break;

        default:
            alert("Algo deu errado!");

    }         
}          
</script>