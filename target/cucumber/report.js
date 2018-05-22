$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/cucumbertests/cofredestravado.feature");
formatter.feature({
  "name": "Cofre Destravado",
  "description": "  Para evitar problemas com o cofre destravado\n  Como um cara desconfiado\n  Eu quero saber se o cofre aceita senha inválida",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Testar a inicializacao do cofre",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que o cofre acabou de ser incializado",
  "keyword": "Dado "
});
formatter.match({
  "location": "CofreSteps.que_o_cofre_acabou_de_ser_incializado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"Entre com a senha 6 digitos\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve destravar a porta",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.deve_destravar_a_porta()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar digitar senha com porta aberta",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que porta esta aberta e destravada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CofreSteps.que_porta_esta_aberta_e_destravada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 1 no cofre",
  "keyword": "Quando "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 2 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 3 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 4 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 6 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 6 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aperto o botão ok",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_aperto_o_botão_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"Feche a porta antes de digitar a senha\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar digitar senha com porta fechada e destravada",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que porta esta fechada e destravada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CofreSteps.que_porta_esta_fechada_e_destravada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 0 no cofre",
  "keyword": "Quando "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"0\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Limpar o display",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que porta esta destravada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CofreSteps.que_porta_esta_destravada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aperto o botao limpar no cofre",
  "keyword": "Quando "
});
formatter.match({
  "location": "CofreSteps.eu_aperto_o_botao_limpar_no_cofre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Gravar senha valida com porta fechada destravada",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que porta esta fechada e destravada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CofreSteps.que_porta_esta_fechada_e_destravada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 1 no cofre",
  "keyword": "Quando "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 2 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 3 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 4 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 5 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 6 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aperto o botão ok",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_aperto_o_botão_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"Senha salva. Cofre trancado\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Digitar senha com menos de seis digitos",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que porta esta fechada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CofreSteps.que_porta_esta_fechada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 1 no cofre",
  "keyword": "Quando "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aperto o botão ok",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_aperto_o_botão_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"senha precisa de 6 digitos. Tente novamente\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Digitar numeros com a porta fechada depois abrir a porta e digitar novamente",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que porta esta fechada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CofreSteps.que_porta_esta_fechada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 1 no cofre",
  "keyword": "Quando "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 2 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"12\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu abro a porta",
  "keyword": "Quando "
});
formatter.match({
  "location": "CofreSteps.eu_abro_a_porta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 5 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"Feche a porta antes de digitar a senha\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu fecho a porta",
  "keyword": "Quando "
});
formatter.match({
  "location": "CofreSteps.eu_fecho_a_porta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 7 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"7\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Nao digitar senha e apertar ok",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que porta esta fechada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CofreSteps.que_porta_esta_fechada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aperto o botão ok",
  "keyword": "Quando "
});
formatter.match({
  "location": "CofreSteps.eu_aperto_o_botão_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"senha precisa de 6 digitos. Tente novamente\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/cucumbertests/cofretravado.feature");
formatter.feature({
  "name": "Cofre Travado",
  "description": "  Para evitar problemas com o cofre travado\n  Como um cara desconfiado\n  Eu quero saber se o cofre trata senhas inválidas e aceita senhas válidas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Tentar abrir com senha inválida",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que porta está fechada e travada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CofreSteps.que_porta_está_fechada_e_travada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 1 no cofre",
  "keyword": "Quando "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 2 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 3 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 4 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 6 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 6 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aperto o botão ok",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_aperto_o_botão_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"senha errada. Tente novamente\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar abrir com senha menor que seis digitos",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que porta está fechada e travada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CofreSteps.que_porta_está_fechada_e_travada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 1 no cofre",
  "keyword": "Quando "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 1 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aperto o botão ok",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_aperto_o_botão_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"senha errada. Tente novamente\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tentar abrir com senha valida",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que porta está fechada e travada",
  "keyword": "Dado "
});
formatter.match({
  "location": "CofreSteps.que_porta_está_fechada_e_travada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 1 no cofre",
  "keyword": "Quando "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 2 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 3 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 4 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 5 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digito o botao 6 no cofre",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_digito_o_botao_no_cofre(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aperto o botão ok",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.eu_aperto_o_botão_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve aparecer a mensagem \"senha correta. Cofre aberto\"",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.deve_aparecer_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o cofre deve ser destravado",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.o_cofre_deve_ser_destravado()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/cucumbertests/validacaohelper.feature");
formatter.feature({
  "name": "Helper",
  "description": "  Para evitar validacões erradas\n  Como é um sistema critico\n  Eu quero verificar se o sistema reconhece senhas válidas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Reconhecer um numero",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "um valor so com digitos deve ser um numero",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.um_valor_so_com_digitos_deve_ser_um_numero()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "um valor vazio nao deve ser um numero",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.um_valor_vazio_nao_deve_ser_um_numero()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Reconhecer senha valida",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "uma senha com apenas numeros deve ser valida",
  "keyword": "Então "
});
formatter.match({
  "location": "CofreSteps.uma_senha_com_apenas_numeros_deve_ser_valida()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "uma senha com letras nao deve ser valida",
  "keyword": "E "
});
formatter.match({
  "location": "CofreSteps.uma_senha_com_letras_nao_deve_ser_valida()"
});
formatter.result({
  "status": "passed"
});
});