---
id: performance_benchmark
title: Performance benchmark
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Upewnij sie że Twoj serwer spełnia [niezbędne wymagania techniczne](/node_setup#00-required-technical-specifications) wykonując testy wydajnościowe, w następujących krokach:

```bash
# Pobierz źródło najnowszej stabilnej wersji
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable
$ cd HydraDX-node/

# Przygotuj się do uruchomienia testu porównawczego
$ ./scripts/init.sh
$ rustup default nightly
$ apt install python3-pip
$ pip3 install bench-wizard

# Rozpocznij test porównawczy
$ ./scripts/check_performance.sh
```

Po wykonaniu testu wynik powinien wylądac podobnie do tego poniżej:

```
         Pallet          |   Time comparison (µs)    |     diff*     |            |   Rerun
amm                      |    1066.00 vs 1045.80     |      20       |     OK     |
exchange                 |    1105.00 vs 1049.10     |      55       |     OK     |
transaction_multi_payment|     289.00 vs 279.96      |       9       |     OK     |
```

- w polach 'diff' możesz zobaczyć różnicę między referencyjnym czasem odniesienia a czasem odniesienia twojej maszyny
- jeśli różnica 'diff' jest dodatnia dla wszystkich trzech palet, Twoja maszyna spełnia minimalne wymagania dotyczące obsługi węzła HydraDX
- jeśli różnica 'diff' różni się o -10% lub więcej dla niektórych palet, Twoja maszyna może nie nadawać się do uruchomienia węzła HydraDX

Dołącz do nas na Discordzie, jeśli chcesz omówić wyniki testów porównawczych, nasza społeczność zawsze chętnie Ci pomoże.
