import type { Page } from '../App'
import NavOverlay from '../components/NavOverlay'
import ResponsiveCanvas from '../components/ResponsiveCanvas.tsx'
import HomeImport from '../imports/Test2/index'

interface Props {
  navigate: (page: Page) => void
}

export default function HomePage({ navigate }: Props) {
  return (
    <ResponsiveCanvas baseWidth={1440} baseHeight={5140}>
        <HomeImport />
        <NavOverlay navigate={navigate} current="home" />

        <div id="about" style={{ position: 'absolute', top: 3071 }} />
        <div id="services" style={{ position: 'absolute', top: 1489 }} />
        <div id="gallery" style={{ position: 'absolute', top: 1061 }} />
        <div id="contact" style={{ position: 'absolute', top: 4714 }} />

        <ServiceButtons />
    </ResponsiveCanvas>
  )
}

function ServiceButtons() {
  const whatsappUrl = 'https://wa.me/971558159040'

  const buttons = [
    {
      left: 143,
      top: 1951,
      width: 265,
      height: 38,
      title: 'Contact Decor team on WhatsApp',
    },
    {
      left: 134,
      top: 2447,
      width: 361,
      height: 45,
      title: 'Contact Air Conditioning team on WhatsApp',
    },
    {
      left: 134,
      top: 2929,
      width: 265,
      height: 39,
      title: 'Contact Steel team on WhatsApp',
    },
    {
      left: 914,
      top: 3844,
      width: 179,
      height: 63,
      title: 'Contact us on WhatsApp',
    },
  ]

  return (
    <>
      {buttons.map((button) => (
        <a
          key={button.title}
          style={{ position: 'absolute', left: button.left, top: button.top, width: button.width, height: button.height, zIndex: 50, background: 'transparent' }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
          title={button.title}
        />
      ))}
    </>
  )
}
