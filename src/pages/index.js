import Module from "domains/dashboard/dashboard";
import SessionProvider from "common/utils/session/session-provider";

export default function Home() {
  return (
    <SessionProvider>
      <Module />
    </SessionProvider>
  );
}
