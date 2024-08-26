"use server";

import { getContract } from "~/api/contracts/get-contract";

export async function fulfillContract(contractId: string) {
  // get the contract
  const contract = await getContract(contractId);
  // if that fails, return the error
  if (!contract.success) {
    return contract;
  }
}
