---
id: claim
title: Claim your HDX
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Możesz odebrać swoje tokeny HDX za pomocą tokenów xHDX (ERC-20), które otrzymałeś w okresie, gdy nasz [Balancer LBP](https://hydradx.substack.com/p/lbp-announcement) był aktywny.

:::Uwaga

Nie masz żadnych tokenów xHDX, ale mimo to chcesz otrzymać trochę HDX? Dziękujemy za zainteresowanie, ale w tej chwili nie ma możliwości zakupu tokenów HDX - transfery HDX są zamrożone do mainnet. Jednak w miarę zbliżania się do mainnet będziemy uruchamiać programy motywacyjne dla społeczności, które pozwolą na uzyskanie tokenów HDX. Jeśli jesteś zainteresowany, [zapisz sie do naszego newsletter'a](https://hydradx.substack.com) i dołącz do nas na Discord żeby byc na bieżąco ze wszystkimi informacjami na temat HydraDX

:::

## Wymagania wstępne

Aby odebrać swój HDX, trzeba spełnić dwa warunki wstępne. W pierwszej kolejności należy zainstalować [rozszerzenie przeglądarki Polkadot.js] (https://polkadot.js.org/extension/), które posłuży do utworzenia portfela HDX. W drugiej kolejności potrzebujesz dostępu do swoich tokenów xHDX, które powinny być przechowywane w portfelu wspierającym podpisywanie wiadomości dotyczących tokenów ERC-20 (np. Metamask).

Jeśli twoje tokeny xHDX są przechowywane w Coinbase Wallet lub Trust Wallet, będziesz musiał skorzystać z jednego z poniższych obejść, aby odebrać swój HDX, ponieważ te portfele nie obsługują podpisywania wiadomości:

* Metamask: Możesz użyć rozszerzenia przeglądarki Metamask i zaimportować swój portfel, używając frazy zarodka odzyskiwania.
* 
* MEW (MyEtherWallet): Możesz również użyć MEW, importując swoją frazę początkową odzyskiwania (* Mnemonic Phrase *) lub używając opcji połączenia WalletLink. Obie opcje są dostępne na [stronie dostępu do portfela MEW] (https://www.myetherwallet.com/access-my-wallet). Jeśli korzystasz z portfela Coinbase, możesz użyć WalletLink, w którym znajdziesz Ustawienia portfela Coinbase.

## Proces odbioru tokenów HDX

Po upewnieniu się, że wymagania wstępne opisane powyżej zostały spełnione, możesz przejść do [aplikacji HydraDX Claim] (https://claim.hydradx.io) i kontynuować proces roszczenia.

Podczas procesu odbioru wykorzystasz swoje tokeny xHDX (ERC-20), aby odebrać swój udział w tokenach HDX.

### 00 Autoryzacja

Aplikacja HydraDX Claim zażąda autoryzacji z rozszerzenia przeglądarki Polkadot.js.

:::Ostrzeżenie!!!

Upewnij się, że nie jesteś ofiarą ataku phishingowego i zwróć uwagę na wyskakujące okienko autoryzacji: aplikacja powinna identyfikować się jako ** CLAIM.HYDRADX.IO **, a żądanie powinno pochodzić z ** https: // claim .hydradx.io **.

:::

<img alt="authorize" src={useBaseUrl('/claim/authorize.png')} />

Po autoryzacji zostanie wyświetlony komunikat o zaktualizowanie metadanych rozszerzenia przeglądarki Polkadot.js. Umożliwi to Polkadot.js tworzenie adresów specyficznych dla HydraDX, które są wymagane do zakończenia procesu odbioru tokenów HDX.

<img alt="authorize" src={useBaseUrl('/claim/metadata.png')} />

### 01 Wybierz swój adres ETH

W pierwszym etapie procesu roszczenia zostaniesz poproszony o wybranie konta, na którym znajdują się Twoje tokeny xHDX. Można to zrobić, łącząc się z portfelem, w którym znajdują się tokeny ERC-20 (np. Metamask), lub wpisując ręcznie swój adres ETH w polu wprowadzania (w takim przypadku konieczne będzie później ręczne podpisanie wiadomości).

Po wprowadzeniu adresu ETH powinieneś zobaczyć saldo tokenów HDX, o które możesz ubiegać się, w tym [zwrot opłat za paliwo] (https://hydradx.substack.com/p/first-governance-vote), które wydałeś za zakup xHDX na Balancer.

:::Uwaga

Nie kwalifikujesz się do zwrotu gas'u, jeśli uzyskałeś token xHDX w innym miejscu niż oficjalna pula Balancera (na przykład Uniswap) lub jeśli przeniosłeś swoje tokeny z oryginalnego portfela użytego do zakupów.
:::

### 02 Utwórz i wybierz adres HDX

W drugim kroku zostaniesz poproszony o wybranie adresu HDX.

Aby utworzyć nowy adres HDX, otwórz rozszerzenie przeglądarki Polkadot.js i kliknij znak +, aby utworzyć nowe konto. W pierwszym kroku tworzenia konta zobaczysz 12-działową mnemoniczną frazę, której można użyć do odzyskania konta. Po zapisaniu frazy seed w bezpiecznym miejscu, kliknij * Następny krok *. W tym miejscu należy zmienić ** Sieć **, wybierając opcję ** HydraDX Snakenet **. Wprowadź nazwę i hasło do swojego konta i zakończ tworzenie konta.

<img alt="authorize" src={useBaseUrl('/claim/create-account.png')} />

:::Ostrzeżenie!!!

Upewnij się, że utworzyłeś kopię zapasową frazy odzyskiwania "mnemonic seed", przechowując ją w bezpiecznym miejscu i nigdy nie udostępniaj jej nikomu. Korzystanie z frazy seed to jedyny sposób na odzyskanie konta, a jeśli je zgubisz lub udostępnisz, Twoje fundusze mogą zostać przejęte. Pamiętaj, że musisz zabezpieczyć dostęp do tego portfela do momentu uruchomienia sieci głównej, ponieważ wszystkie salda HDX są obecnie zablokowane. Jeśli stracisz dostęp do swojego portfela HDX, utracisz również swoje tokeny HDX.

:::

Po utworzeniu konta HDX powinno być możliwe wybranie go w aplikacji HydraDX Claim. Po wykonaniu tej czynności aplikacja powinna zapewnić przegląd adresów ETH i HDX używanych w procesie odbioru. Kliknij Dalej, aby przejść do podpisywania wiadomości.

### 03 Podpis

W trzecim etapie procesu odbioru za pomocą aplikacji HydraDX Claim otrzymasz możliwość podpisania wiadomości o użyciu tokenów xHDX w celu odebrania HDX.

:::Uwaga

Pamiętaj, że w tym kroku zobaczysz ** klucz publiczny ** swojego adresu HDX, a nie adres w postaci czytelnej dla człowieka, tak jak został wyświetlony w poprzednim kroku oraz w rozszerzeniu przeglądarki Polkadot.js (aby uzyskać więcej informacji zapoznaj się z [dokumentacją ss58] (https://polkadot.js.org/docs/keyring/start/ss58)). Jeśli wykonałeś wszystkie kroki opisane powyżej, nie ma się czym martwić i można bezpiecznie przystąpić do podpisania wiadomości. Sprawdzimy również, czy konto HDX, którego używasz do podpisania transakcji odbioru na ostatnim etapie, jest zgodne z kontem, na które otrzymujesz odebrany token HDX.

:::

W zależności od wyboru dokonanego w pierwszym kroku masz dwie możliwości podpisania wiadomości o wykorzystaniu tokenów xHDX w procesie odbioru:

* Jeśli używasz ** Metamask **, po kliknięciu przycisku * Sign * zostaniesz poproszony przez Metamask o podpisanie wiadomości. Postępuj zgodnie z instrukcjami w Metamask.

* Jeśli podałeś swój adres ETH ręcznie, będziesz musiał podpisać wiadomość za pośrednictwem zewnętrznego portfela, w którym znajdują się klucze prywatne Twoich tokenów xHDX. Po podpisaniu wiadomości skopiuj podpis (zaczynając od * 0x *) do odpowiedniego pola w aplikacji HydraDX Claim.

### 04 Odbiór tokenów HDX

Po podpisaniu wiadomości z portfelem zawierającym tokeny xHDX, powinno otworzyć się rozszerzenie Polkadot.js i zostaniesz poproszony o podpisanie transakcji w celu odebrania HDX na swoje konto. Wprowadź hasło do konta HDX i kliknij * Podpisz transakcję *.

Zakończyłeś proces odbioru, tym samym oficjalnie stając się właścicielem tokwnów HDX!

Możesz sprawdzić saldo za pomocą [Polkadot / apps] (https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts) podłączonego do HydraDX Sieć Snakenet. Pamiętaj, że nie możesz zobaczyć salda HDX bezpośrednio w rozszerzeniu przeglądarki Polkadot.js.

### 05 Co dalej?

Po zakończeniu procesu roszczenia tokeny HDX pozostaną zablokowane w Twoim portfelu do czasu uruchomienia mainnet.

Tokeny xHDX (które wykorzystałeś do odebrania HDX) pozostaną zablokowane w Twoim portfelu ERC-20 na zawsze, co oznacza, że możesz je ukryć w swoim portfelu (lub zachować je jako widoczne jako odznaka wczesnej adaptacji).

Chcesz wykorzystać swoje tokeny HDX do pracy i pomóc poprawić bezpieczeństwo sieci HydraDX? Możesz wziąć udział w naszej zachęcającej sieci testowej o nazwie ** Snakenet **, obstawiając swój HDX. Jeśli jesteś zainteresowany, możesz kontynuować, zapoznając się z [procesem obstawiania] (/ staking), po którym możesz zdecydować się na udział jako [walidator] (/ start_validating) lub [nominator] (/ start_nominating).

