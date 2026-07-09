import type { Page } from '../App'

interface NavOverlayProps {
  navigate: (page: Page) => void
  current: Page
}

// Transparent navigation overlay that sits on top of each page's imported layout.
// Targets match the touch-field positions baked into the Figma exports.
export default function NavOverlay({ navigate, current }: NavOverlayProps) {
  const whatsappUrl = 'https://wa.me/971558159040'
  const emailUrl = 'mailto:sanasteeldesign@gmail.com'

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 50 }}>
      {/* Home icon button */}
      <button
        className="absolute pointer-events-auto cursor-pointer"
        style={{ left: 68, top: 97, width: 72, height: 72, background: 'transparent', border: 'none', opacity: current === 'home' ? 0.3 : 1 }}
        onClick={() => navigate('home')}
        title="Home"
      />

      {/* STEEL tab */}
      <button
        className="absolute pointer-events-auto cursor-pointer transition-opacity hover:opacity-70"
        style={{ left: 144, top: 97, width: 204, height: 72, background: current === 'steel' ? 'rgba(141,140,140,0.0)' : 'transparent', border: 'none' }}
        onClick={() => navigate('steel')}
        title="Steel"
      />

      {/* DECOR tab */}
      <button
        className="absolute pointer-events-auto cursor-pointer transition-opacity hover:opacity-70"
        style={{ left: 604, top: 97, width: 204, height: 72, background: 'transparent', border: 'none' }}
        onClick={() => navigate('decor')}
        title="Decor"
      />

      {/* AIR CON tab */}
      <button
        className="absolute pointer-events-auto cursor-pointer transition-opacity hover:opacity-70"
        style={{ left: 1118, top: 97, width: 204, height: 72, background: 'transparent', border: 'none' }}
        onClick={() => navigate('ac')}
        title="Air Conditioning"
      />

      {/* Menu bar nav links — scroll to sections on home page or navigate home */}
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ left: 816, top: 0, width: 120, height: 81, background: 'transparent', border: 'none' }}
        onClick={() => { navigate('home'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100) }}
        title="About Us"
      />
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ left: 938, top: 0, width: 120, height: 81, background: 'transparent', border: 'none' }}
        onClick={() => { navigate('home'); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100) }}
        title="Services"
      />
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ left: 1060, top: 0, width: 100, height: 81, background: 'transparent', border: 'none' }}
        onClick={() => { navigate('home'); setTimeout(() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }), 100) }}
        title="Gallery"
      />
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ left: 1166, top: 0, width: 130, height: 81, background: 'transparent', border: 'none' }}
        onClick={() => { navigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100) }}
        title="Contact Us"
      />

      {/* INQUIRE button in menu bar */}
      <a
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{ left: 1306, top: 22, width: 119, height: 33, background: 'transparent' }}
        href={emailUrl}
        title="Inquire"
      />

      {/* Logo / brand name click → home */}
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{ left: 15, top: 0, width: 317, height: 81, background: 'transparent', border: 'none' }}
        onClick={() => navigate('home')}
        title="Sana Steel Design — Home"
      />

      {/* WhatsApp contact us button (appears at bottom of home page hero) */}
      <a
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{ left: 40, top: 973, width: 179, height: 63, background: 'transparent' }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Contact us on WhatsApp"
      />
    </div>
  )
}
