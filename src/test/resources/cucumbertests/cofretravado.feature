# language: pt
# Source: http://github.com/aslakhellesoy/cucumber/blob/master/examples/i18n/pt/features/adicao.feature
# Updated: Tue May 25 15:52:12 +0200 2010
Funcionalidade: Cofre Travado
  Para evitar problemas com o cofre travado
  Como um cara desconfiado
  Eu quero saber se o cofre trata senhas inválidas e aceita senhas válidas

  Cenário: Tentar abrir com senha inválida
    Dado que porta está fechada e travada
    Quando eu digito o botao 1 no cofre
    E eu digito o botao 2 no cofre
    E eu digito o botao 3 no cofre
    E eu digito o botao 4 no cofre
    E eu digito o botao 6 no cofre
    E eu digito o botao 6 no cofre
    E eu aperto o botão ok
    Então deve aparecer a mensagem "senha errada. Tente novamente"

  Cenário: Tentar abrir com senha menor que seis digitos
    Dado que porta está fechada e travada
    Quando eu digito o botao 1 no cofre
    E eu digito o botao 1 no cofre
    E eu aperto o botão ok
    Então deve aparecer a mensagem "senha errada. Tente novamente"

  Cenário: Tentar abrir com senha valida
    Dado que porta está fechada e travada
    Quando eu digito o botao 1 no cofre
    E eu digito o botao 2 no cofre
    E eu digito o botao 3 no cofre
    E eu digito o botao 4 no cofre
    E eu digito o botao 5 no cofre
    E eu digito o botao 6 no cofre
    E eu aperto o botão ok
    Então deve aparecer a mensagem "senha correta. Cofre aberto"
    E o cofre deve ser destravado