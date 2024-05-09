//Seu JavaScript de validação aqui

//Seleciona o input nome pelo ID
let nome = document.getElementById("nome");

//Adiciona um ouvinte de evento para o evento 'blur' (desfoque)
nome.addEventListener("blur", () => {
    let nomeValue = nome.value.trim()
  if (nomeValue !== "" && nomeValue.length < 50) {
    //Se o campo estiver preechido e tiver menos que 50 caracteres, adiciona a classe 'preenchido' e remove 'vazio'
    nome.classList.remove('vazio')
    nome.classList.add('preenchido')
  }else {
    //Se o campo estiver vazio ou se tiver mais que 50 caracteres, adiciona a classe 'vazio' e remove 'preenchido'
    nome.classList.remove('preenchido')
    nome.classList.add('vazio')
    exibirAlerta('O campo nome não pode estar vazio ou exceder 50 caracteres')
  }
});

//Seleciona o input email pelo ID
let email = document.getElementById('email');

//Adiciona um ouvinte de evento para o evento 'blur' (desfoque)
email.addEventListener("blur", () => {
    let emailValue = email.value.trim();
    
    //Verifica se o campo está preenchido
    if(emailValue !== ''){
        //Valida o formato de email usando uma expressão regular
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = regex.test(emailValue);
        
        if(isValidEmail){
            //Se o email for válido, remove 'vazio' e adiciona 'preenchido'
            email.classList.remove('vazio');
            email.classList.add('preenchido');
        }else{
            //Se o email não for válido, exibe uma mensagem de erro, adiciona 'vazio' e remove 'preenchido'
            email.classList.remove('preenchido');
            email.classList.add('vazio');
            exibirAlerta('Deve estar em formato de e-mail contendo o caractere especial @ seguido por um domínio ou provedor seguido por um ponto (.) Exemplo: text@texto.com')
        }
    } else {
        //Se o campo estiver vazio, exibe uma mensagem de erro, adiciona 'vazio' e remove 'preenchido'
        email.classList.remove('preenchido');
        email.classList.add('vazio');
        alert('O campo do e-mail não deve ficar em branco ou vazio.')
    }
})
    
//Seleciona o input assunto pelo ID
let assunto = document.getElementById("assunto");

//Adiciona um ouvinte de evento para o evento 'blur' (desfoque)
assunto.addEventListener("blur", () => {
    let assuntoValue = assunto.value.trim()
  if (assuntoValue !== "" && assuntoValue.length < 50) {
    //Se o campo estiver preechido e tiver menos que 50 caracteres, adiciona a classe 'preenchido' e remove 'vazio'
    assunto.classList.remove('vazio')
    assunto.classList.add('preenchido')
  }else {
    //Se o campo estiver vazio ou se tiver mais que 50 caracteres, adiciona a classe 'vazio' e remove 'preenchido'
    assunto.classList.remove('preenchido')
    assunto.classList.add('vazio')
    exibirAlerta('O campo assunto não pode estar vazio ou exceder 50 caracteres')
  }
});

//Seleciona o input mensagem pelo ID
let mensagem = document.getElementById("mensagem");

//Adiciona um ouvinte de evento para o evento 'blur' (desfoque)
mensagem.addEventListener("blur", () => {
    let mensagemValue = mensagem.value.trim()
  if (mensagemValue !== "" && mensagemValue.length < 300) {
    //Se o campo estiver preechido e tiver menos que 300 caracteres, adiciona a classe 'preenchido' e remove 'vazio'
    mensagem.classList.remove('vazio')
    mensagem.classList.add('preenchido')
  }else {
    //Se o campo estiver vazio ou se tiver mais que 300 caracteres, adiciona a classe 'vazio' e remove 'preenchido'
    mensagem.classList.remove('preenchido')
    mensagem.classList.add('vazio')
    exibirAlerta('O campo mensagem não pode estar vazio ou exceder 300 caracteres')
  }
});

//Seleciona o formulário e o botão pelo ID
let form = document.getElementById('form');
let botao = document.getElementById('submit');

//Adiciona um ouvinte de eventos para o evento 'input' nos campos do formulário
form.addEventListener('input', () => {
    //Verifica se todos os campos do formulário são validos
    if(form.checkValidity()){
        //Se o formulário for válido, habilita o botão de envio
        botao.removeAttribute('disabled')
    }else {
        //Se o formulário não for válido, desabilita o botão de envio
        botao.setAttribute('disabled','disabled');
    }
})


// Adiciona um ouvinte de evento para o evento 'submit' do formulário
form.addEventListener('submit', (event) => {
    // Impede o envio padrão do formulário se ele não for válido
    if (!form.checkValidity()) {
      event.preventDefault(); // Impede o envio do formulário
      // Aqui você pode exibir uma mensagem de erro ou fazer outra ação
      alert('Por favor, preencha todos os campos corretamente.');
    }else {
        exibirAlerta('Formulário enviado!')
    }
  });

  //Estava com um bug de alert que quando aparecia um alert e clickava em outro input gerando outro alert, daí bugava e só saia quando reiniciava a página, então resolvi fazer essa função para resolver o problema
  function exibirAlerta(mensagem) {
    // Desabilitar todos os elementos interativos
    const elementosInterativos = document.querySelectorAll('input, textarea');
    elementosInterativos.forEach(elemento => {
        elemento.disabled = true;
    });

    // Exibir o alerta
    alert(mensagem);

    // Reabilitar todos os elementos interativos após o alerta ser fechado
    elementosInterativos.forEach(elemento => {
        elemento.disabled = false;
    });
}