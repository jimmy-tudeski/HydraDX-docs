---
id: polkadotjs_apps_local 
title: Connect to a local node 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Możesz użyć Polkadot / apps, aby połączyć się z lokalnym węzłem HydraDX. W tym celu musisz mieć dostęp do portu `9944`, który jest używany do połączeń RPC websocket.

:::Ostrzeżenie

Jeśli używasz węzła jako walidatora, zdecydowanie zalecamy umieszczenie na czarnej liście portu `9944` dla połączeń zdalnych. Ten port może być nadużywany przez osoby trzecie w celu obniżenia wydajności Twojego węzła, co może skutkować obcięciem i mimowolną utratą środków. Do łączenia się z węzłem walidatora należy używać portu „9944” tylko wtedy, gdy węzeł znajduje się w sieci lokalnej.
:::

### Dostęp do lokalnego węzła za pomocą Polkadot / apps

Aby uzyskać dostęp do węzła, otwórz [Polkadot / apps] (https://polkadot.js.org/apps/) i kliknij w lewym górnym rogu, aby zmienić sieć.

<div>
  <img src={useBaseUrl('/polkadotjs-apps/PolkadotJS-APPS-1.png')} />
</div>

Po otwarciu menu kliknij ** Rozwój ** i wybierz ** Węzeł lokalny **.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/local-1.png')} />
</div>

W razie potrzeby dostosuj adres IP i kliknij *** Przełącz ***, aby przełączyć się na lokalny węzeł.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/polkadotjs-apps/local-2.png')} />
</div>

Teraz powinieneś być połączony z lokalnym węzłem i mieć możliwość interakcji z nim.
