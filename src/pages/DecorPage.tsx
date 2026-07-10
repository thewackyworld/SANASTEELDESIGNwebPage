import type { Page } from '../App'
import SubPageNavOverlay from '../components/SubPageNavOverlay'
import ResponsiveCanvas from '../components/ResponsiveCanvas'
import DecorImport from '../imports/Test2DecorPage/index'

interface Props {
  navigate: (page: Page) => void
}

export default function DecorPage({ navigate }: Props) {
  return (
    <ResponsiveCanvas baseWidth={1440} baseHeight={3450}>
        <DecorImport />
        <SubPageNavOverlay
          navigate={navigate}
          current="decor"
          primaryWhatsappBtn={{ left: 65, top: 1264, width: 265, height: 63, url: 'https://wa.me/971558159040' }}
          secondaryWhatsappBtn={{ left: 65, top: 1351, width: 262, height: 49 }}
        />
    </ResponsiveCanvas>
  )
}