# language: pt
# Source: http://github.com/aslakhellesoy/cucumber/blob/master/examples/i18n/pt/features/adicao.feature
# Updated: Tue May 25 15:52:12 +0200 2010
Funcionalidade: Cofre Destravado
  Para evitar problemas com o cofre destravado
  Como um cara desconfiado
  Eu quero saber se o cofre aceita senha inválida

  Cenário: Testar a inicializacao do cofre
    Dado que o cofre acabou de ser incializado
    Então deve aparecer a mensagem "Entre com a senha 6 digitos"
    E deve destravar a porta

  Cenário: Tentar digitar senha com porta aberta
    Dado que porta esta aberta e destravada
    Quando eu digito o botao 1 no cofre
    E eu digito o botao 2 no cofre
    E eu digito o botao 3 no cofre
    E eu digito o botao 4 no cofre
    E eu digito o botao 6 no cofre
    E eu digito o botao 6 no cofre
    E eu aperto o botão ok
    Então deve aparecer a mensagem "Feche a porta antes de digitar a senha"

  Cenário: Tentar digitar senha com porta fechada e destravada
    Dado que porta esta fechada e destravada
    Quando eu digito o botao 0 no cofre   
    Então deve aparecer a mensagem "0"

  Cenário: Limpar o display
    Dado que porta esta destravada
    Quando eu aperto o botao limpar no cofre   
    Então deve aparecer a mensagem ""

  Cenário: Gravar senha valida com porta fechada destravada
    Dado que porta esta fechada e destravada
    Quando eu digito o botao 1 no cofre
    E eu digito o botao 2 no cofre
    E eu digito o botao 3 no cofre
    E eu digito o botao 4 no cofre
    E eu digito o botao 5 no cofre
    E eu digito o botao 6 no cofre
    E eu aperto o botão ok
    Então deve aparecer a mensagem "Senha salva. Cofre trancado"

  Cenário: Digitar senha com menos de seis digitos
    Dado que porta esta fechada
    Quando eu digito o botao 1 no cofre
    E eu aperto o botão ok
    Então deve aparecer a mensagem "senha precisa de 6 digitos. Tente novamente"

  Cenário: Digitar numeros com a porta fechada depois abrir a porta e digitar novamente
    Dado que porta esta fechada
    Quando eu digito o botao 1 no cofre
    E eu digito o botao 2 no cofre
    Então deve aparecer a mensagem "12"
    Quando eu abro a porta
    E eu digito o botao 5 no cofre
    Então deve aparecer a mensagem "Feche a porta antes de digitar a senha"
    Quando eu fecho a porta
    E eu digito o botao 7 no cofre
    Então deve aparecer a mensagem "7"

  Cenário: Nao digitar senha e apertar ok
    Dado que porta esta fechada
    Quando eu aperto o botão ok
    Então deve aparecer a mensagem "senha precisa de 6 digitos. Tente novamente"