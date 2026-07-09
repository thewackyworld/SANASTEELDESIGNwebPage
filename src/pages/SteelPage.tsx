import type { Page } from '../App'
import SubPageNavOverlay from '../components/SubPageNavOverlay'
import ResponsiveCanvas from '../components/ResponsiveCanvas'
import SteelImport from '../imports/Test2SteelPage/index'

interface Props {
  navigate: (page: Page) => void
}

export default function SteelPage({ navigate }: Props) {
  return (
    <ResponsiveCanvas baseWidth={1440} baseHeight={3450}>
        <SteelImport />
        <SubPageNavOverlay
          navigate={navigate}
          current="steel"
          primaryWhatsappBtn={{ left: 65, top: 1264, width: 265, height: 63 }}
          secondaryWhatsappBtn={{ left: 65, top: 1351, width: 262, height: 49 }}
        />
    </ResponsiveCanvas>
  )
}
