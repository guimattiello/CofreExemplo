# language: pt
# Source: http://github.com/aslakhellesoy/cucumber/blob/master/examples/i18n/pt/features/adicao.feature
# Updated: Tue May 25 15:52:12 +0200 2010
Funcionalidade: Helper
  Para evitar validacões erradas
  Como é um sistema critico
  Eu quero verificar se o sistema reconhece senhas válidas

  Cenário: Reconhecer um numero
    Então um valor so com digitos deve ser um numero
    E um valor vazio nao deve ser um numero

  Cenário: Reconhecer senha valida
    Então uma senha com apenas numeros deve ser valida
    E uma senha com letras nao deve ser valida
