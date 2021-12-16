# Task 5: Create a subgraph that tracks premiums and settlement fees from ETH call options traded on Hegic

## Background

- The ETH calls pool contract is at [`0xb9ed94c6d594b2517c4296e24A8c517FF133fb6d`](https://etherscan.io/address/0xb9ed94c6d594b2517c4296e24a8c517ff133fb6d). 
- You will index (cumulatively) the `settlementFee` and `premium` parameters of the `Acquired` event.

Your subgraph should have a `Pool` entity with the following fields: 

- `id`: pool smart contract address
- `name`: name of the pool (tip: you can get this from the contract's `name` public function)
- `cumulativePremium`
- `cumulativeSettlementFee`

## The task

Create and deploy a subgraph that indexes the _cumulative_ settlement fees and _cumulative_ premiums from ETH call options traded on [Hegic](https://www.hegic.co/).

## Benchmarking

Querying your subgraph at block `13797319` should return (not corrected for decimals):

- Total cumulative premiums: 1017799470361301981038.
- Total cumulative settlement fees: 344931487286394106001.
