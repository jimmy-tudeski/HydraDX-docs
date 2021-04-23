---
id: start_validating 
title: Become a validator
---

import useBaseUrl from '@docusaurus/useBaseUrl';

After [setting up your HydraDX node](/node_setup), you need to bond HDX tokens and set the validator keys before you can start validating.

:::warning

Running a validator node requires a certain technical skillset needed for the proper setup of the node, and for guaranteeing its uptime. We also require validators to be always running the node using the latest stable release. If you are not sure what you are doing here, we recommend that you [nominate your HDX](/start_nominating) to an experienced validator instead. By doing so, you protect yourself and your nominators against an involuntary loss of funds.

:::

## 01 Bond HDX tokens {#01-bond-hdx-tokens}

In order to take part at the network as a validator node, you need to bond some amount of HDX tokens. If you do not have any HDX, it is not possible to participate in the _initial_ stage of the testnet. However, some exciting news will be announced by the team in the upcoming weeks so stay posted and subscribe to our newsletter.

:::note

Are you still in possession of xHDX tokens that you bought during the Balancer LBP event? You first need to [claim your HDX](/claim) before continuing.

:::

To bond HDX, open Polkadot/apps, and connect to one of the [public HydraDX RPC nodes](/polkadotjs_apps_public). Make sure that you can see your account [balance](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts).

:::warning

Bonded HDX tokens are at stake for guaranteeing the security of the network. Improper behavior of the validator node may be punished by slashing which can lead to an involuntary loss of funds. We strongly recommend that you only proceed if you really know what you are doing.

:::

For the next step, go to *Network* > *Staking* > *Account actions* > *+ Stash*

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/bond-hdx-1.png')} />
</div>

After clicking the Stash button, you should see the bonding preferences with four editable fields:
* **stash account**: the account holding the majority of your HDX tokens. HDX will be staked from this account.
* **controller account**: an account holding a smaller portion of HDX needed to cover the fees associated with starting and stopping the process of validating.
* **value bonded**: the amount of HDX you are bonding. Do not bond all HDX that you have - instead, leave some to cover the transaction fees which occur later.
* **payment destination**: the account to which the validating rewards will be sent.

:::warning

Do not bond all your available HDX tokens. Leave a small reserve for covering the transactions fees. If you bond all HDX tokens that you have, you may not be able to sign the transaction for starting the validation process.

:::

After adjusting the bonding preferences, click _Bond_ and sign transaction to complete the bonding process.

:::caution

For security reasons, it is not recommended to have the same Stash and Controller accounts. However, since transfers are disabled on Snakenet, it is currently not possible to use separate accounts. We highly recommend that you switch to separate Stash and Controller accounts as soon as this becomes possible in the future.

:::

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/bond-hdx-2.png')} />
</div>

## 02 Generate session keys {#02-generate-session-keys}

The second step is to generate your session keys. The session keys are used to associate the validator node with your Controller account and the staked HDX. It is therefore important that they are set up correctly.

To generate your session keys, run on the node:

```bash
$ curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933

# Example output
{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}
```

You can find your session keys under the _result_ part of the output (`0x9257...` in the example output above).

## 03 Set your session keys {#03-set-your-session-keys}

To associate the generated session keys with your Controller account, navigate to the following menu item in the Polkadot/apps:
*Developer* > *Extrinsics*

Fill in the fields:

* _using selected account_: select your Controller account;
* _submit the following extrinsic_: select `session` on the left side and `setKeys` on the right;
* _keys_: enter your session keys from the previous step;
* _proof_: `0`.

To complete, click _Submit Transaction_ and sign the transaction.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/set-session-keys-1.png')} />
</div>

## 04 Make sure that your node is fully synced {#04-make-sure-that-your-node-is-fully-synced}

Before you continue, you should make sure that your node is running and that the synchronization process is fully complete. The most certain way to check the state of synchronization is directly on the node itself:

```bash

$ journalctl -f -u hydradx-validator.service

# The output will be similar to this
Mar 22 18:37:38 Ubuntu-2010-groovy-64-minimal hydra-dx[232761]: 2021-03-22 18:37:38  💤 
Idle (52 peers), best: #622028 (0x5f5a…1041), finalized #622025 (0x5b21…a746), ⬇ 9.1kiB/s ⬆ 6.1kiB/s

```

You can compare the block number from the output (in the example above: `#622025`) with the current block number which you can find in [Polkadot/apps Explorer](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/explorer). At the time of writing, the current block is `#622240`, meaning that the node used for the example is not fully synced.

Please wait until the block number shown in your local logs matches the current block number of the network.

## 05 Start validating {#05-start-validating}

To start validating, navigate in Polkadot/apps:

*Network* > *Staking* > *Account actions* > *Validate* (button next to your bonded HDX)

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-1.png')} />
</div>

After clicking on the *Validate* button you should see a popup called *set validator preferences*. Here, you need to set your _reward commission percentage_. This is the proportion of the rewards which will be paid out to you. The remaining rewards will be split across your nominators in accordance with their stake. If you decide to not take any reward commission, you can set the percentage to 0.

To confirm, click *Validate* and sign the transaction.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-2.png')} />
</div>

## 06 Check the status of your validator node {#06-check-the-status-of-your-validator-node}

You can check the status of your validator node in the Polkadot/apps under:

*Network* > *Staking* > *Staking overview*

This tab provides an overview of all active validators connected to the network. At the top, there is an indication of the amount of validator slots available, as well as the number of nodes that have signaled their intention to be a validator. You can confirm whether your node is in the waiting queue by clicking on the _Waiting_ tab.

Your validator node will remain in the waiting queue until it has been selected to be included in the validator set. The validator set is updated every era which allows for new nodes to be included, provided there are empty slots.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/validator-guide/validate-3.png')} />
</div>

Thank you for supporting HydraDX by becoming a Snakenet validator! 🎉
