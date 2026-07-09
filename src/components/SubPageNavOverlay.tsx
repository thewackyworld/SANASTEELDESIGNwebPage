import type { Page } from '../App'

interface Props {
  navigate: (page: Page) => void
  current: Page
  // WhatsApp button dimensions vary by sub-page
  primaryWhatsappBtn?: { left: number; top: number; width: number; height: number }
  secondaryWhatsappBtn?: { left: number; top: number; width: number; height: number }
}

const WHATSAPP_URL = 'https://wa.me/971558159040'
const EMAIL_URL = 'mailto:sanasteeldesign@gmail.com'

export default function SubPageNavOverlay({ navigate, primaryWhatsappBtn, secondaryWhatsappBtn }: Props) {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 50 }}>
      {/* Home icon */}
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ left: 68, top: 97, width: 72, height: 72, background: 'transparent', border: 'none' }}
        onClick={() => navigate('home')}
        title="Home"
      />

      {/* STEEL tab */}
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ left: 144, top: 97, width: 204, height: 72, background: 'transparent', border: 'none' }}
        onClick={() => navigate('steel')}
        title="Steel"
      />

      {/* DECOR tab */}
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ left: 604, top: 97, width: 204, height: 72, background: 'transparent', border: 'none' }}
        onClick={() => navigate('decor')}
        title="Decor"
      />

      {/* AIR CON tab */}
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ left: 1118, top: 97, width: 204, height: 72, background: 'transparent', border: 'none' }}
        onClick={() => navigate('ac')}
        title="Air Conditioning"
      />

      {/* Logo → home */}
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{ left: 15, top: 0, width: 317, height: 81, background: 'transparent', border: 'none' }}
        onClick={() => navigate('home')}
        title="Home"
      />

      {/* Menu bar nav links */}
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ left: 816, top: 0, width: 120, height: 81, background: 'transparent', border: 'none' }}
        onClick={() => navigate('home')}
        title="About Us"
      />
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ left: 938, top: 0, width: 120, height: 81, background: 'transparent', border: 'none' }}
        onClick={() => navigate('home')}
        title="Services"
      />
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ left: 1060, top: 0, width: 100, height: 81, background: 'transparent', border: 'none' }}
        onClick={() => navigate('home')}
        title="Gallery"
      />
      <button
        className="absolute pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ left: 1166, top: 0, width: 130, height: 81, background: 'transparent', border: 'none' }}
        onClick={() => navigate('home')}
        title="Contact Us"
      />

      {/* INQUIRE */}
      <a
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{ left: 1306, top: 22, width: 119, height: 33, background: 'transparent' }}
        href={EMAIL_URL}
        title="Inquire"
      />

      {/* Primary CTA WhatsApp button (large colored button) */}
      {primaryWhatsappBtn && (
        <a
          className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
          style={{ ...primaryWhatsappBtn, background: 'transparent', zIndex: 51 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Contact on WhatsApp"
        />
      )}

      {/* Secondary smaller WhatsApp button */}
      {secondaryWhatsappBtn && (
        <a
          className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
          style={{ ...secondaryWhatsappBtn, background: 'transparent', zIndex: 51 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Contact Sana Steel Design"
        />
      )}

      {/* Footer contact links */}
      <a
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{ left: 864, top: 3179, width: 264, height: 30, background: 'transparent' }}
        href={EMAIL_URL}
        title="Email"
      />
      <a
        className="absolute pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
        style={{ left: 865, top: 3212, width: 150, height: 30, background: 'transparent' }}
        href="tel:+971558159040"
        title="Call"
      />
    </div>
  )
}
