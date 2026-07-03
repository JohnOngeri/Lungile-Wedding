import { useEffect, useState } from 'react'
import qrcode from 'qrcode-generator'

export interface QrColors {
  dark: string
  light: string
}

/**
 * Generates a QR code for `url` as a PNG data URL.
 * With `colors`, the code is drawn on a canvas in custom colours
 * (used by the emerald card: deep green on cream).
 */
export function useQrCode(url: string, cellSize = 8, colors?: QrColors): string {
  const [dataUrl, setDataUrl] = useState('')

  useEffect(() => {
    try {
      const qr = qrcode(0, 'M')
      qr.addData(url)
      qr.make()

      if (!colors) {
        setDataUrl(qr.createDataURL(cellSize, 0))
        return
      }

      const n = qr.getModuleCount()
      const canvas = document.createElement('canvas')
      canvas.width = n * cellSize
      canvas.height = n * cellSize
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.fillStyle = colors.light
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = colors.dark
      for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
          if (qr.isDark(r, c)) ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize)
        }
      }
      setDataUrl(canvas.toDataURL('image/png'))
    } catch {
      // URL too long for auto-sized QR — leave the placeholder visible.
    }
  }, [url, cellSize, colors?.dark, colors?.light])

  return dataUrl
}
