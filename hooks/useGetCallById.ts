import { useEffect, useState } from "react"
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"

export const useGetCallById = (id: string | string[]) => {
  const [call, setCall] = useState<Call>()
  const [isCallLoading, setIsCallLoading] = useState(true)

  const Client = useStreamVideoClient();

  useEffect(() => {
    if(!Client) return;

    const loadCall = async () => {
      const { calls } = await Client.queryCalls({
        filter_conditions: {
          id
        }
      })

      if(calls.length > 0) {
        setCall(calls[0]);
        setIsCallLoading(false);
      }
    }

    loadCall();
  }, [Client, id]);

  return { call, isCallLoading };
}