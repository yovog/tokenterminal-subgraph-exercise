import { Transfer, ENSToken } from '../generated/ENSToken/ENSToken'
import { TransferEvent } from '../generated/schema'

export function handleTransfer(event: Transfer): void {
  // Create a new TransferEvent entity based on the transaction hash of the event
  // let ...
  let transferEvent=new TransferEvent(event.transaction.hash.toString());

  let contract = ENSToken.bind(event.address)
  
  // Populate transferEvent fields based on event metadata
  // transferEvent.timestamp = 
  transferEvent.id = event.transaction.hash.toString()
  transferEvent.timestamp= event.block.timestamp.toI32()
  transferEvent.block = event.block.number
  transferEvent.fromAddress = event.params.from
  transferEvent.toAddress = event.params.to
  transferEvent.transferAmount=event.params.value
  transferEvent.fromBalance = contract.balanceOf(event.params.from)
  transferEvent.toBalance = contract.balanceOf(event.params.to)
  transferEvent.save()
  

  // Use the balanceOf public read-only function of the ENSToken 
  // contract to query the balance of the "from" and "to" addresses
  // and polulate the fromBalance and toBalance fields
  // Note that you'll have to bind the ENSToken contract to the address
  // that emitted the event     
  // Check this section in The Graph docs:
  // https://thegraph.com/docs/developer/assemblyscript-api#access-to-smart-contract-state
  

  // Save the entity to the store
    
}
