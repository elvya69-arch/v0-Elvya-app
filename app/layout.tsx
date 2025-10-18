import "../styles/globals.css"; // or wherever your CSS file with @tailwind is
import "../styles/fontStyles.scss";
// app/layout.tsx (for app directory)
import 'leaflet/dist/leaflet.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="__next">
          {children}
        </div>
      </body>
    </html>
  )
}
