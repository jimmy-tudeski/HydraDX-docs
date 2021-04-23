---
id: start_validating 
title: Start validating
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Po [skonfigurowaniu węzła HDX](/ node_setup) należy powiązać tokeny HDX i ustawić klucze walidatora, zanim będzie można rozpocząć walidację.

:::warning

Uruchomienie węzła walidatora wymaga pewnych umiejętności technicznych potrzebnych do prawidłowej konfiguracji węzła i zagwarantowania jego czasu pracy. Wymagamy również, aby walidatory zawsze uruchamiały węzeł przy użyciu najnowszej stabilnej wersji. Jeśli nie jesteś pewien, co tutaj robisz, zalecamy zamiast tego [nominować swoje HDX](/ start_nominating) doświadczonemu walidatorowi. W ten sposób chronisz siebie i swoich nominatorów przed mimowolną utratą środków.
:::

## 01 Wiązanie / Blokowanie tokenów HDX

Aby wziąć udział w sieci jako węzeł walidujący, musisz połączyć pewną ilość tokenów HDX. Jeśli nie masz żadnego HDX, nie możesz uczestniczyć w _wstępnym_ etapie sieci testowej. Jednak w nadchodzących tygodniach zespół ogłosi kilka ekscytujących wiadomości, więc bądź na bieżąco i zapisz się do naszego newslettera.

:::note

Czy nadal jesteś w posiadaniu tokenów xHDX, które kupiłeś podczas wydarzenia Balancer LBP? Przed kontynuowaniem musisz najpierw [odebrać swój HDX](/ claim).

:::

Aby połączyć HDX, otwórz Polkadot / apps i połącz się z jednym z [publicznych węzłów HydraDX RPC](/ polkadotjs_apps_public). Upewnij się, że widzisz [saldo] swojego konta (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts).

:::warning

W grę wchodzi blokowenia tokenów HDX, aby zagwarantować bezpieczeństwo sieci. Niewłaściwe zachowanie węzła walidatora może zostać ukarane cięciem, co może prowadzić do mimowolnej utraty środków. Zdecydowanie zalecamy kontynuowanie tylko wtedy, gdy naprawdę wiesz, co robisz.

:::

Aby przejść do następnego kroku, przejdź do * Sieć *> * Obstawianie *> * Działania na koncie *> * + Skrytka *

<div style = {{textAlign: 'center'}}>
  <img src = {useBaseUrl ('/ validator-guide / bond-hdx-1.png')} />
</div>

Po kliknięciu przycisku Skrytka powinieneś zobaczyć preferencje wiązania z czterema edytowalnymi polami:
* ** konto stash **: konto, na którym znajduje się większość Twoich tokenów HDX. HDX zostanie obstawiony z tego konta.
* ** konto kontrolera **: rachunek posiadający mniejszą część HDX potrzebną do pokrycia opłat związanych z rozpoczęciem i zakończeniem procesu walidacji.
* ** wartość związana **: ilość kleju HDX, który łączysz. Nie wiąż wszystkich HDX, które posiadasz - zamiast tego zostaw część na pokrycie późniejszych opłat transakcyjnych.
* ** miejsce płatności **: konto, na które zostaną wysłane nagrody potwierdzające.

:::warning

Nie wiąż wszystkich dostępnych tokenów HDX. Zostaw niewielką rezerwę na pokrycie opłat transakcyjnych. Jeśli połączysz wszystkie posiadane tokeny HDX, możesz nie być w stanie podpisać transakcji w celu rozpoczęcia procesu walidacji.

:::

Po dostosowaniu preferencji łączenia kliknij _Bond_ i podpisz transakcję, aby zakończyć proces wiązania.

:::note

Ze względów bezpieczeństwa nie zaleca się posiadania tych samych kont w skrytce i kontrolerze. Ponieważ jednak transfery są wyłączone w Snakenet, obecnie nie jest możliwe korzystanie z oddzielnych kont. Zdecydowanie zalecamy przełączenie się na oddzielne konta Skrytki i Kontrolera, gdy tylko stanie się to możliwe w przyszłości.

:::

<div style = {{textAlign: 'center'}}>
  <img src = {useBaseUrl ('/ validator-guide / bond-hdx-2.png')} />
</div>

## 02 Generuj klucze sesji

Drugim krokiem jest wygenerowanie kluczy sesji. Klucze sesji służą do powiązania węzła walidatora z kontem kontrolera i stakowanym HDX. Dlatego ważne jest, aby były prawidłowo skonfigurowane.

Aby wygenerować klucze sesji, uruchom w węźle:

`` bash
$ curl -H "Content-Type: application / json" -d '{"id": 1, "jsonrpc": "2.0", "method": "author_rotateKeys", "params": []}' http: / / localhost: 9933

# Przykładowe dane wyjściowe
{ "JSON-RPC": "2.0", "Wynik": "0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45", "id" 1}
`` ''

Klucze sesji można znaleźć w części _result_ danych wyjściowych („0x9257 ...” w przykładowym wyjściu powyżej).

## 03 Ustaw klucze sesji

Aby powiązać wygenerowane klucze sesji z kontem kontrolera, otwórz w Polkadot / apps:
* Deweloper *> * Extrinsics *

Wypełnij pola:

* _używając wybranego konta_: wybierz swoje konto kontrolera;
* _prześlij następujące zewnętrzne_: wybierz „sesję” po lewej stronie i „setKeys” po prawej;
* _keys_: wprowadź klucze sesji z poprzedniego kroku;
* _proof_: „0”.

Aby zakończyć, kliknij _Prześlij transakcję_ i podpisz transakcję.

<div style = {{textAlign: 'center'}}>
  <img src = {useBaseUrl ('/ validator-guide / set-session-keys-1.png')} />
</div>

## 04 Upewnij się, że twój węzeł jest w pełni zsynchronizowany

Przed kontynuowaniem upewnij się, że węzeł działa i że proces synchronizacji został w pełni zakończony. Najpewniejszym sposobem sprawdzenia stanu synchronizacji jest bezpośrednio w samym węźle:

`` bash

$ journalctl -f -u hydradx-validator.service

# Wynik będzie podobny do tego
22 marca 18:37:38 Ubuntu-2010-groovy-64-minimal hydra-dx [232761]: 2021-03-22 18:37:38 💤
Bezczynny (52 rówieśników), najlepiej: # 622028 (0x5f5a… 1041), sfinalizowany # 622025 (0x5b21… a746), ⬇ 9,1 kB / s ⬆ 6,1 kB / s

`` ''

Możesz porównać numer bloku z danych wyjściowych (w powyższym przykładzie: `# 622025`) z bieżącym numerem bloku, który można znaleźć w [Polkadot / apps Explorer](https://polkadot.js.org/apps/? rpc = wss% 3A% 2F% 2Frpc-01.snakenet.hydradx.io # / explorer). W chwili pisania tego tekstu bieżący blok ma numer „# 622240”, co oznacza, że ​​węzeł użyty w przykładzie nie jest w pełni zsynchronizowany.

Poczekaj, aż numer bloku pokazany w lokalnych dziennikach będzie zgodny z bieżącym numerem bloku w sieci.

## 05 Rozpocznij sprawdzanie poprawności

Aby rozpocząć walidację, przejdź do Polkadot / apps:

* Sieć *> * Obstawianie *> * Działania na koncie *> * Weryfikuj * (przycisk obok powiązanego HDX)

<div style = {{textAlign: 'center'}}>
  <img src = {useBaseUrl ('/ validator-guide / validate-1.png')} />
</div>

Po kliknięciu przycisku * Zatwierdź * powinno pojawić się okienko zatytułowane * ustaw preferencje walidatora *. Tutaj musisz ustawić swój _ procent prowizji od nagrody_. To jest część nagród, które zostaną Ci wypłacone. Pozostałe nagrody zostaną podzielone między twoich nominatorów zgodnie z ich stawką. Jeśli zdecydujesz się nie pobierać żadnej prowizji od nagrody, możesz ustawić procent na 0.

Aby potwierdzić, kliknij * Zatwierdź * i podpisz transakcję.

<div style = {{textAlign: 'center'}}>
  <img src = {useBaseUrl ('/ validator-guide / validate-2.png')} />
</div>

## 06 Sprawdź stan swojego węzła walidatora

Możesz sprawdzić stan swojego węzła walidatora w Polkadot / apps pod:

* Sieć *> * Obstawianie *> * Przegląd obstawiania *

Ta zakładka zawiera przegląd wszystkich aktywnych walidatorów podłączonych do sieci. U góry znajduje się wskazanie liczby dostępnych miejsc walidatora, a także liczby węzłów, które zasygnalizowały zamiar zostania walidatorem. Możesz potwierdzić, czy Twój węzeł znajduje się w kolejce oczekujących, klikając kartę _Waiting_.

Twój węzeł walidatora pozostanie w kolejce oczekiwania, dopóki nie zostanie wybrany do włączenia do zestawu walidatora. Zestaw walidatora jest aktualizowany w każdej epoce, co pozwala na dołączanie nowych węzłów, pod warunkiem, że są puste miejsca.

<div style = {{textAlign: 'center'}}>
  <img src = {useBaseUrl ('/ validator-guide / validate-3.png')} />
</div>

Dziękujemy za wsparcie HydraDX, właśnie zostałeś walidatorem Snakenet! 🎉
