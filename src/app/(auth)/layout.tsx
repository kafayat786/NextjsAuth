import { Providers } from "../Providers";

export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="h-screen w-full flex items-center justify-center">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
