---
id: performance_benchmark
title: Leistungs-Benchmark
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Sie können sicherstellen, dass ihre Hardware die [technischen Mindestanforderungen](/node_setup#00-required-technical-specifications) erfüllt, indem Sie einen Leistungs-Benchmark ausführen.  
Nutzen Sie hierfür Folgenden Befehl:

```bash
# Fetch source of the latest stable release
$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable
$ cd HydraDX-node/

# Prepare for running the benchmark
## Install Rust following https://rustup.rs
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

## Configure Rust
$ ./scripts/init.sh
$ rustup default nightly

## Install additional libraries
$ apt install python3-pip
$ apt install clang

# Run the benchmark
$ ./scripts/check_performance.sh
```

Nachdem Ihr Benchmark ausgeführt wurde sollte ihre Ausgabe ähnlich zu folgedem sein:

```
         Pallet          |   Time comparison (µs)    |  diff* (µs)   |   diff* (%)    |            |   Rerun
amm                      |     773.00 vs 680.00      |      93.00    |      12.03     |     OK     |
exchange                 |     804.00 vs 720.00      |      84.00    |      10.44     |     OK     |
transaction_multi_payment|     218.00 vs 198.00      |      20.00    |       9.17     |     OK     |

Notes:
- in the diff fields you can see the difference between the reference benchmark time and the benchmark time of your machine
- if diff is positive for all three pallets, your machine covers the minimum requirements for running a HydraDX node
- if diff deviates by -10% or more for some of the pallets, your machine might not be suitable to run a node
```

Wenn die Werte in der Spalte `diff` alle drei positive Zahlenwerte sind, ist ihre Hardware geeignet um eine HydraDX Validator Node zu betreiben.
Sie können gerne unserem Discord Channel beitreten wenn sie Ihre Benchmark Ergebnisse diskutieren wollen oder Hilfe brauchen. Unsere Community hilft Ihnen gerne!