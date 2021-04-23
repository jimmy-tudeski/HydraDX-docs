---
id: start_nominating
title: Become a nominator
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Zostając nominatorem, stawiasz część swoich tokenów HDX, aby pomóc zabezpieczyć sieć HydraDX i zdobyć nagrody. W przeciwieństwie do uruchamiania węzła walidatora, proces nominowania nie wymaga zaawansowanych umiejętności technicznych, co czyni go zalecanym wyborem dla każdego, kto nie jest w pełni przekonany o zostaniu walidatorem.

Podczas nominowania, nominatorzy wyznaczają swój udział wybranemu przez siebie walidatorowi. W ten sposób nominatorzy wybierają aktywny zestaw walidatorów i otrzymują nagrody za swój udział. Ilość nagród, które otrzymasz jako nominator, zależy od procentu prowizji od wybranego walidatora - im wyższa prowizja od nagrody walidatora, tym mniej nagród otrzymasz za swoją stawkę.

:::warning

Nominowanie jest bardziej przystępną formą udziału w procesie obstawiania, ale wiąże się również z pewnym ryzykiem. Jeśli wyznaczony przez Ciebie walidator zachowuje się niewłaściwie (np. Nie utrzymuje wymaganego czasu pracy), może nastąpić cięcie "slashing", które może doprowadzić do częściowej mimowolnej utraty postawionych środków. Zdecydowanie zalecamy przeprowadzenie należytej staranności przed wyznaczeniem walidatora.

:::

## 00 Interfejs Stejkingu

Aby uzyskać dostęp do interfejsu obstawiania, musisz najpierw otworzyć Polkadot / apps, podłączyć go do jednego z [publicznych węzłów HydraDX RPC](/polkadotjs_apps_public) i upewnić się, że widzisz swoje konto [saldo](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts)

:::note

Czy nadal jesteś w posiadaniu tokenów xHDX, które kupiłeś podczas wydarzenia Balancer LBP? Przed kontynuowaniem musisz najpierw [odebrać swój HDX](/claim).

:::

Po upewnieniu się, że widzisz saldo HDX, możesz przejść do interfejsu Obstawiania:

* Sieć *> * Obstawianie *

Interfejs obstawiania zawiera następujące zakładki menu:

* ** Przegląd obstawiania **: tutaj znajdziesz listę wszystkich aktywnych walidatorów i podstawowe informacje o każdym walidatorze, takie jak kwota HDX postawiona na węźle, kwota własnej stawki walidatora i wysokość nagrody pobierana jest prowizja. Ponadto możesz zobaczyć liczbę punktów ery zdobytych przez każdego walidatora w bieżącej erze oraz liczbę ostatnich bloków wyprodukowanych przez walidator.
* ** Działania na koncie **: tutaj możesz postawić i nominować.
* ** Wypłaty **: tutaj możesz odebrać swoje nagrody za obstawianie.
* ** Cele **: tutaj możesz oszacować swoje zarobki. Jest to dobre miejsce do rozpoczęcia wybierania węzła walidatora do nominacji.
* ** Waiting **: tutaj możesz znaleźć kolejkę oczekujących, w której umieszczane są nieaktywne walidatory przed dołączeniem do aktywnego zestawu walidatorów. Walidator pozostanie w kolejce oczekiwania, dopóki nie otrzyma wystarczającej ilości postawionych HDX, aby wejść do aktywnego zestawu walidatorów.
* ** Statystyki walidatora **: tutaj możesz zapytać o adres skrytki walidatora, aby zobaczyć szczegółowe informacje historyczne o zdobytych punktach ery, wybranej stawce, nagrodach i ukośnikach. Zdecydowanie zalecamy zapoznanie się z tymi informacjami przed powierzeniem swojej nominacji walidatorowi.

## 01 Wiązanie / Blokowanie tokenów HDX

:::warning

Chodzi tutaj o zablokowanie tokenów HDX, aby zagwarantować bezpieczeństwo sieci. Niewłaściwe zachowanie wyznaczonego przez Ciebie węzła walidatora może zostać ukarane cięciem, co może doprowadzić do mimowolnej utraty środków. Zdecydowanie zalecamy dołożenie należytej staranności przy wyborze walidatora do nominacji.

:::

Aby powiązać tokeny HDX, przejdź do * Działania na koncie * w interfejsie obstawiania:

* Sieć *> * Obstawianie *> * Działania na koncie *> * + Skrytka *

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/bond-hdx-1.png')} />
</div>

Po kliknięciu przycisku * Skrytka *, powinieneś zobaczyć preferencje łączenia z czterema edytowalnymi polami:
* ** konto stash **: konto, na którym znajduje się większość Twoich tokenów HDX. HDX zostanie obstawiony z tego konta.
* ** konto kontrolera **: rachunek posiadający mniejszą część HDX potrzebną do pokrycia opłat związanych z rozpoczęciem i zakończeniem procesu nominacji.
* ** wartość związana **: ilość kleju HDX, który łączysz. Nie wiąż wszystkich HDX, które posiadasz - zamiast tego zostaw część na pokrycie późniejszych opłat transakcyjnych.
* ** miejsce płatności **: konto, na które zostaną wysłane nagrody za obstawianie.

:::warning

Nie wiąż wszystkich dostępnych tokenów HDX. Zostaw niewielką rezerwę na pokrycie opłat transakcyjnych. Jeśli połączysz wszystkie posiadane tokeny HDX, możesz nie być w stanie podpisać transakcji w celu rozpoczęcia procesu nominacji.

:::

Po dostosowaniu preferencji łączenia kliknij ** Wiązanie ** i podpisz transakcję, aby zakończyć proces wiązania.

:::note

Ze względów bezpieczeństwa nie zaleca się posiadania tych samych kont w skrytce i kontrolerze. Ponieważ jednak transfery są wyłączone w Snakenet, obecnie nie jest możliwe korzystanie z oddzielnych kont. Zdecydowanie zalecamy przełączenie się na oddzielne konta Skrytki i Kontrolera, gdy tylko stanie się to możliwe w przyszłości.

:::

<div style={{textAlign:'center'}}>
  <img src={useBaseUrl('/ nominator-guide/bond-hdx-2.png')} />
</div>

## 02 Wyznacz walidatora

Po związaniu HDX możesz teraz wyznaczyć walidatora. Przed kontynuowaniem należy przeprowadzić należytą staranność i zdecydować, których walidatorów chcesz wyznaczyć na podstawie ich (wcześniejszych) wyników. Aby to zrobić, zapoznaj się z informacjami w interfejsie obstawiania [omówionym powyżej](# 00-staking-ui).

:::note

HydraDX Snakenet ma ** limit 64 liczników na węzeł walidujący **. Wybierając węzeł do nominacji, upewnij się, że walidator nie osiągnął maksymalnej liczby nominacji, w przeciwnym razie Twoja nominacja będzie nieważna i nie otrzymasz nagrody za swoją stawkę. Liczbę nominacji dla każdego walidatora można znaleźć w zakładce menu * Oczekujące * w interfejsie Staking UI.

:::

Aby wyznaczyć jednego lub więcej walidatorów, przejdź do:

* Sieć *> * Obstawianie *> * Działania na koncie *> * Nominuj * (przycisk obok powiązanego HDX)

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-1.png')} />
</div>

Po kliknięciu przycisku * Nominuj * powinieneś zobaczyć wyskakujące okienko o nazwie * nominuj walidatorów *. Tutaj możesz wybrać jednego lub więcej walidatorów do nominacji z listy dostępnych walidatorów. Zdecydowanie zaleca się wyznaczenie wielu walidatorów, aby zapobiec byciu nieaktywnymi, jeśli nie uzyskasz miejsca w jednym walidatorze (np. Walidator jest przepełniony lub nie został wybrany do aktywnego zestawu walidatorów). Możesz wyznaczyć do 16 walidatorów. W każdej epoce tylko jedna z Twoich nominacji może być aktywna, nie możesz zostać wybrany przez wielu walidatorów jednocześnie. Twoja stawka zostanie automatycznie przypisana do jednego z wybranych przez Ciebie walidatorów w sposób maksymalizujący decentralizację i zyski. Po prostu wybrałeś ilość klejonego HDX i weryfikatory, którym ufasz.

Aby wyznaczyć wybranych walidatorów, kliknij _Nominuj_ i podpisz transakcję.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-2.png')} />
</div>


## 03 Sprawdź status swoich nominacji

Po zakończeniu procesu nominacji Twoje nominacje będą nieaktywne do końca bieżącej ery. Gdy rozpocznie się kolejna era, Twoje nominacje staną się aktywne, pod warunkiem, że co najmniej jeden z nominowanych przez Ciebie węzłów walidatora jest uwzględniony w aktywnym zestawie walidatorów i nie jest przepełniony, co Cię nie wyklucza. Jeśli wszyscy wybrani przez Ciebie walidatorzy pozostaną w kolejce oczekujących, Twoje nominacje również pozostaną nieaktywne i nie zdobędziesz żadnych nagród w tej erze.

Aby sprawdzić status swoich nominacji, przejdź do:

* Sieć *> * Obstawianie *> * Działania na koncie *

Możesz zobaczyć swoje nieaktywne nominacje w sekcji * Oczekujące nominacje *:

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-3.png')} />
</div>

Gdy nominacja stanie się aktywna, powinieneś znaleźć ją na liście * Aktywnych nominacji *

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/nominator-guide/nominate-validator-4.png')} />
</div>

:::note

Upewnij się, że od czasu do czasu wracasz do swoich nominacji. Możliwe, że niektórzy z Twoich walidatorów zmienią procent prowizji, co będzie miało negatywny wpływ na Twoje nagrody. Często sprawdzając status swoich nominacji, będziesz mógł zareagować, aktualizując listę nominowanych walidatorów.

:::

Dziękujemy za wsparcie HydraDX, Zostałeś nominatorem i przyczyniasz się od teraz do wsparcia i zabezpieczenia sieci Snakenet! 🎉
