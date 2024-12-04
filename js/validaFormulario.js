document.getElementById("form1").addEventListener("submit",
    function(event){
        let valido = true
        let mensagem = []

        // validar o nome com pelo menos duas palavras
        const nome = document.getElementById("nome").value
        if (nome.split(" ").length < 2){
            valido = false
            mensagem.push("O nome deve conter pelo menos duas palavras")
        }

        // validar o campo sexo
        const sexoMasc = document.getElementById("masculino").checked
        const sexoFem = document.getElementById("feminino").checked
        if (!sexoMasc && !sexoFem){
            valido = false
            mensagem.push("selecione o campo gênero")
        }

        // validar o comentário
        const comentario = document.getElementById("comentario").value
        if (comentario.length < 100){
            valido = false
            mensagem.push("O comentário deve ter pelo menos 100 caracteres")
        }

        if (!valido) /* ! "== false" */{
            event.preventDefault()  /* impede o envio do formulário */
            alert(mensagem.join("\n"))
        }
    }
)