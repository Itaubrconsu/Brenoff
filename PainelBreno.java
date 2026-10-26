package com.breno.sensixff;

/** Exemplo Java separado para um projeto Android nativo.
 * Não é usado pela versão web nem constitui um APK compilado.
 */
public final class PainelBreno {
    private PainelBreno() {}
    public static boolean validarSenha(String senhaDigitada) {
        return "1804".equals(senhaDigitada);
    }
    public static String nomePainel() {
        return "Sensi X FF — Breno";
    }
}