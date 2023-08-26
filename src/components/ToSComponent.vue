<template>
  <b-container>
    <b-row>
      <b-col style="padding: 20px">
        <h1>Regulamin Sklepu Internetowego Meble-Domowe</h1>

        <h2>§1. Postanowienia ogólne</h2>
        <p>Sklep internetowy Meble-Domowe, dostępny pod adresem internetowym www.meble-domowe.com, prowadzony jest przez Meble-Domowe Sp. z o.o. z siedzibą w Warszawie.</p>

        <h2>§2. Definicje</h2>
        <ul>
          <li><strong>Sklep internetowy</strong> - serwis internetowy dostępny pod adresem www.meble-domowe.com, przez który Klient może dokonać Zakupu.</li>
          <li><strong>Klient</strong> - osoba fizyczna, prawna lub jednostka organizacyjna, która dokonuje Zakupu przez Sklep.</li>
          <li><strong>Towar</strong> - meble dostępne do zakupu przez Sklep.</li>
          <li><strong>Zakup</strong> - umowa sprzedaży zawarta między Klientem a Sklepem.</li>
        </ul>

        <h2>§3. Warunki korzystania ze Sklepu</h2>
        <ol>
          <li>Klient jest zobowiązany do korzystania ze Sklepu w sposób zgodny z prawem i dobrymi obyczajami.</li>
          <li>Zakazane jest dostarczanie treści o charakterze bezprawnym.</li>
        </ol>

        <h2>§4. Procedura zakupu</h2>
        <ol>
          <li>Zakup następuje poprzez dodanie Towaru do koszyka i złożenie zamówienia.</li>
          <li>Zawarcie umowy następuje po potwierdzeniu zamówienia przez Klienta i akceptacji zamówienia przez Sklep.</li>
          <li>Ceny towarów są podane w polskich złotych i zawierają podatek VAT.</li>
          <li>Do zamówień mogą być doliczone koszty dostawy, które są podawane przed finalizacją zakupu.</li>
        </ol>

        <h2>§5. Prawo do odstąpienia od umowy</h2>
        <p>Klient ma prawo odstąpić od umowy w terminie 14 dni bez podania przyczyny. Szczegóły dotyczące praw Konsumenta są dostępne na stronie "Odstąpienie od umowy".</p>

        <h2>§6. Reklamacje i zwroty</h2>
        <p>Procedura reklamacyjna jest opisana na stronie "Reklamacje i zwroty".</p>

        <h2>§7. Ochrona danych osobowych</h2>
        <p>Informacje na temat ochrony danych osobowych są dostępne w "Polityce prywatności".</p>

        <h2>§8. Postanowienia końcowe</h2>
        <p>Wszelkie spory wynikłe z realizacji zakupów będą rozstrzygane przez sąd właściwy dla siedziby Sklepu.</p>
      </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
  name: "ToSComponent"
}
</script>

<style scoped>
h2, h1 {
  margin-top: 30px;
}

li {
  margin-left: 30px;
}

p {
  margin-left: 10px;
}


</style>