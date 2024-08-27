/**
 * Get the status of the contract & return the appropriate message
 *
 * - If the contract is expired, return the expired message
 * - If the contract is accepted,
 *    - If the contract is fulfilled, return the fulfilled message
 *    - Otherwise, return the accepted message
 * - Otherwise, return the default message
 *
 * @param isAccepted
 * @param isFulfilled
 * @param isExpired
 * @param acceptedMsg
 * @param fulfilledMsg
 * @param expiredMsg
 * @param defaultMsg
 */
export function calculateAcceptance({
  isAccepted,
  isFulfilled,
  isExpired,
  acceptedMsg,
  fulfilledMsg,
  expiredMsg,
  defaultMsg,
}: {
  isAccepted: boolean;
  isFulfilled: boolean;
  isExpired: boolean;
  acceptedMsg: string;
  fulfilledMsg: string;
  expiredMsg: string;
  defaultMsg: string;
}) {
  return isExpired
    ? expiredMsg
    : isAccepted
      ? isFulfilled
        ? fulfilledMsg
        : acceptedMsg
      : defaultMsg;
}
