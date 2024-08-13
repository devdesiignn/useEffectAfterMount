/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef } from "react";

export default function useEffectAfterMount(callBackFn: () => void, dependencies: any[] = []) {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    callBackFn();
  }, dependencies);
}
