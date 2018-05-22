/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cucumbertests;

import cofre.CofrePM;
import cofre.Memoria;
import cofre.SensorPorta;
import cofre.ValidacaoHelper;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.*;

/**
 *
 * @author guimat
 */
public class CofreSteps {

    SensorPorta sensorMock;
    Memoria memoriaMock;
    CofrePM cofrePM;

    @Dado("^que o cofre acabou de ser incializado$")
    public void que_o_cofre_acabou_de_ser_incializado() throws Exception {
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);
    }

    @Então("^deve destravar a porta$")
    public void deve_destravar_a_porta() throws Exception {
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);

        verify(sensorMock).destravar();
    }

    @Dado("^que porta está fechada e travada$")
    public void que_porta_está_fechada_e_travada() throws Exception {
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);

        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        when(sensorMock.travada())
                .thenReturn(Boolean.TRUE);
        when(memoriaMock.getSenha())
                .thenReturn("123456");
    }

    @Dado("^que porta esta aberta e destravada$")
    public void que_porta_esta_aberta_e_destravada() throws Exception {
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);

        when(sensorMock.fechada())
                .thenReturn(Boolean.FALSE);
        when(sensorMock.travada())
                .thenReturn(Boolean.FALSE);
        when(memoriaMock.getSenha())
                .thenReturn("123456");
    }

    @Dado("^que porta esta fechada e destravada$")
    public void que_porta_esta_fechada_e_destravada() throws Exception {
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);

        when(sensorMock.fechada())
                .thenReturn(Boolean.TRUE);
        when(sensorMock.travada())
                .thenReturn(Boolean.FALSE);
        when(memoriaMock.getSenha())
                .thenReturn("123456");
    }

    @Dado("^que porta esta destravada$")
    public void que_porta_esta_destravada() throws Exception {
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);

        when(sensorMock.travada())
                .thenReturn(Boolean.FALSE);
    }

    @Dado("^que porta esta fechada$")
    public void que_porta_esta_fechada() throws Exception {
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);

        when(sensorMock.fechada()).thenReturn(Boolean.TRUE);
    }

    @Quando("^eu abro a porta$")
    public void eu_abro_a_porta() throws Exception {
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);

        when(sensorMock.fechada()).thenReturn(Boolean.FALSE);
    }

    @Quando("^eu fecho a porta$")
    public void eu_fecho_a_porta() throws Exception {
        sensorMock = mock(SensorPorta.class);
        memoriaMock = mock(Memoria.class);
        cofrePM = new CofrePM(sensorMock, memoriaMock);

        when(sensorMock.fechada()).thenReturn(Boolean.TRUE);
    }

    @Quando("^eu aperto o botao limpar no cofre$")
    public void eu_aperto_o_botao_limpar_no_cofre() throws Exception {
        cofrePM.clear();
    }

    @Quando("^eu digito o botao (\\d+) no cofre$")
    public void eu_digito_o_botao_no_cofre(int arg1) throws Exception {
        cofrePM.pressButton(arg1);
    }

    @Quando("^eu aperto o botão ok$")
    public void eu_aperto_o_botão_ok() throws Exception {
        cofrePM.ok();
    }

    @Então("^deve aparecer a mensagem \"([^\"]*)\"$")
    public void deve_aparecer_a_mensagem(String arg1) throws Exception {
        Assert.assertEquals(arg1, cofrePM.getDisplay());
    }

    @Então("^o cofre deve ser destravado$")
    public void o_cofre_deve_ser_destravado() throws Exception {
        verify(sensorMock, times(2)).destravar();
    }

    @Então("^um valor so com digitos deve ser um numero$")
    public void um_valor_so_com_digitos_deve_ser_um_numero() throws Exception {
        assertTrue(ValidacaoHelper.ehNumero("123"));
    }

    @Então("^uma senha com apenas numeros deve ser valida$")
    public void uma_senha_com_apenas_numeros_deve_ser_valida() throws Exception {
        assertTrue(ValidacaoHelper.ehSenhaValida("123342"));
    }

    @Então("^um valor vazio nao deve ser um numero$")
    public void um_valor_vazio_nao_deve_ser_um_numero() throws Exception {
        assertFalse(ValidacaoHelper.ehNumero(""));
    }

    @Então("^uma senha com letras nao deve ser valida$")
    public void uma_senha_com_letras_nao_deve_ser_valida() throws Exception {
        assertFalse(ValidacaoHelper.ehSenhaValida("123a"));
    }
}
