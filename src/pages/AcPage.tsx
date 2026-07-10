import type { Page } from '../App'
import SubPageNavOverlay from '../components/SubPageNavOverlay'
import ResponsiveCanvas from '../components/ResponsiveCanvas'
import AcImport from '../imports/Test2AcPage/index'

interface Props {
  navigate: (page: Page) => void
}

export default function AcPage({ navigate }: Props) {
  return (
    <ResponsiveCanvas baseWidth={1440} baseHeight={3450}>
        <AcImport />
        <SubPageNavOverlay
          navigate={navigate}
          current="ac"
          primaryWhatsappBtn={{ left: 65, top: 1264, width: 361, height: 63, url: 'https://wa.me/971553250470' }}
          secondaryWhatsappBtn={{ left: 65, top: 1351, width: 262, height: 49 }}
        />
    </ResponsiveCanvas>
  )
}
