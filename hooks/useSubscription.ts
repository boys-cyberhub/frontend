import * as React from 'react'

/**
 * Placeholder subscription hook.
 *
 * When the Soroban RPC integration is wired up, replace the body of this hook
 * with real event polling against the network configured in shared/contracts.ts.
 */
export function useSubscription(
  _contractId: string,
  _topic: string,
  _onEvent: (event: unknown) => void,
  _pollInterval = 5000
) {
  // Stabilise the callback so callers can safely pass inline functions without
  // triggering the effect on every render.
  const onEventRef = React.useRef(_onEvent);
  React.useEffect(() => { onEventRef.current = _onEvent });

  React.useEffect(() => {
    // TODO: implement Soroban event polling via @stellar/stellar-sdk
  }, [_contractId, _topic, _pollInterval])
}
