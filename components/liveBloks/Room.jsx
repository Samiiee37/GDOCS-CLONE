"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }) {
  const params = useParams()
  return (
    <LiveblocksProvider publicApiKey="pk_dev_ZsyrfaS6gYUoFoOGDPk7mz99oipfNAW5NPd6SAMtb60zbsVLI27AYJVOWFUa_FWv">
      <RoomProvider id={params.documentId}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}