import { ReactNode } from "react";
import { NameEnabler } from './NameEnabler'
import { EnablerProvider } from "./Enabler"

interface ProvidersProps {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
    return (
      <>
        <NameEnabler>
          <EnablerProvider>
          {children}
          </EnablerProvider>
        </NameEnabler>
      </>
    )
}

export default Providers;