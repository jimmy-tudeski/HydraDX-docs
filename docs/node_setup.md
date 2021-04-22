---
id: node_setup
title: Set up a HydraDX node
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Ta sekcja przeprowadzi Cię przez proces konfigurowania i uruchamiania noda HydraDX.

:::Uwaga

Uruchomienie noda walidatora wymaga pewnych umiejętności technicznych potrzebnych do prawidłowej konfiguracji noda i zagwarantowania jego ciągłej pracy. Jeśli nie jesteś pewien, czy dasz sobie radę, zalecamy zamiast tego stakowanie swoich tokenów HDX [nominuj_swoje_HDX](/start_nominating) u doświadczonego walidatora. W ten sposób chronisz siebie i nominatorów przed przypadkową utratą środków.
:::

## 00 Wymagane specyfikacje techniczne

Do uruchomienia noda walidatora HydraDX wymagane są co najmniej następujące specyfikacje techniczne:

* System Operacyjny: Ubuntu 20.04
* Procesor: Intel Core i7-7700K @ 4.5Ghz (or equivalent single core performance)
* Pamięć ram: 64GB RAM
* Przestrzeń dyskowa: NVMe SSD with a capacity of at least 200GB (the data footprint will grow over time)

:::Uwaga

Są to minimalne wymagania techniczne, które zostały zweryfikowane przez zespół. Chcesz się upewnić, że Twój komputer ma wystarczające zasoby do uruchomienia węzła? Przeprowadź test porównawczy wydajności [test wydajności](/performance_benchmark).

:::


## 01 Sprawdź, czy zegar systemowy jest zsynchronizowany

Przed uruchomieniem noda należy upewnić się, że zegar systemowy jest zsynchronizowany - jest to ważne, ponieważ walidatorzy współpracują ze sobą. W systemie Ubuntu 20.04 zegar systemowy powinien być domyślnie synchronizowany. Aby sprawdzić, uruchom następujące polecenie i sprawdź dane wyjściowe:

```bash
$ timedatectl | grep "System clock"
System clock synchronized: yes
```

Jeśli wynik jest inny, możesz zainstalować NTP ręcznie i ponownie sprawdzić, czy zegar systemowy jest zsynchronizowany:

```bash
$ apt install ntp
$ ntpq -p
```

## 02 Dostosuj ustawienia zapory sieciowej
Port '30333' jest używany do połączeń peer-to-peer z innymi nodami. Jeśli używasz noda jako walidator, zalecamy skonfigurowanie zapory i skonfigurowanie tak, aby udostępniać tylko ten port dla połączeń zdalnych.

Jeśli nie używasz noda jako walidator, możesz również rozważyć udostępnienie portu '9944' (dla połączeń RPC websocket z zewnętrznymi aplikacjami) i portu '9933' (dla żądań HTTP do Twojego noda). Możesz użyć portu 9944, aby połączyć się ze swoim nodem za pomocą [Polkadot/apps](/polkadotjs_apps_local)

## 03 Pobierz lub utwórz plik binarny
Możesz pobrać plik binarny naszego najnowszego wydania na [github](https://github.com/galacticcouncil/HydraDX-node/releases).

Alternatywnie możesz zbudować plik binarny ze źródła:

```bash
# Zainstaluj zależności
$ curl https://getsubstrate.io -sSf | bash -s -- --fast

# Pobierz źródło najnowszej stabilnej wersji
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable

# Zbuduj plik binarny
$ cd HydraDX-node/
$ cargo build --release
```

Jeśli utworzyłeś plik binarny postępując zgodnie z powyższymi krokami, ścieżka do pliku binarnego jest następująca:
```
target/release/hydra-dx
```

## 04 Uruchom plik binarny
Możesz uruchomić plik binarny, wykonując następujące polecenie:

```bash
$ {ŚCIEŻKA_DO_TWOJEGO_PLIKU_BINARNEGO} --chain lerna --name {NAZWA_TWOJEGO_NODA} --validator
```

:::Uwaga

Nody walidatorów wymagają całej bazy danych łańcucha. Jeśli wcześniej uruchomiłeś węzeł bez flagi --validator, będziesz musiał ponownie zsynchronizować bazę danych przez wyczyszczenie łańcucha przed uruchomieniem noda.

```bash
$ {ŚCIEŻKA_DO_TWOJEGO_PLIKU_BINARNEGO} purge-chain --chain lerna
```

:::

Oprócz ścieżki do pliku binarnego (patrz powyżej), musisz określić nazwę noda, która będzie używana do identyfikowania twojego noda w telemetrii [Telemetria](https://telemetry.polkadot.io/#list/HydraDX%20Snakenet) gdzie możesz znaleźć listę wszystkich nodów działających w HydraDX Snakenet.

## 05 Uruchamianie z systemd
Aby upewnić się, że node jest automatycznie uruchamiany po ponownym uruchomieniu komputera, zalecamy uruchomienie noda HydraDX jako procesu systemowego. Aby to zrobić, utwórz następujący plik i wstaw zawartość, zastępując zmienne wskazane jako `{ZMIENNA}`:

```bash
$ touch /etc/systemd/system/hydradx-validator.service
```

```
[Unit]
Description=HydraDX validator

[Service]
Type=exec
User={NAZWA_UŻYTKOWNIKA}
ExecStart={ŚCIEŻKA_DO_TWOJEGO_PLIKU_BINARNEGO} --chain lerna --name {NAZWA_TWOJEGO_NODA} --validator
Restart=always
RestartSec=120

[Install]
WantedBy=multi-user.target
```

:::uWAGA
Ustawienie RestartSec jest zalecane, ponieważ opóźnia restart węzła w przypadku awarii. Pozwala to na zapisanie wszelkich nieutrwalonych danych (takich jak głosy konsensusu) na dysku przed ponownym uruchomieniem noda. Ponowne uruchomienie noda natychmiast po awarii może spowodować niejednoznaczność lub podwójne podpisywanie, ostatecznie skutkujące karą (slash).
:::

Po utworzeniu pliku konfiguracyjnego możesz używać nod HydraDX jako procesu systemowego:
```bash
# Uruchom noda podczas rozruchu systemu
$ systemctl enable hydradx-validator.service

# Uruchom noda ręcznie
$ systemctl start hydradx-validator.service

# Sprawdź stan noda
$ systemctl status hydradx-validator.service

# Sprawdź dzienniki noda
$ journalctl -f -u hydradx-validator.service
```

Twój węzeł HydraDX jest teraz skonfigurowany i działa!

Możesz teraz wykonać ostatnie kroki, aby rozpocząć walidację. [rozpocznij walidację](/start_validating)
