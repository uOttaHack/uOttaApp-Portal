import '@styles/globals.css';
import Navbar from '@components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'uOttaApp',
  description: 'Application web app for uottahack',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className="flex min-h-screen ">
          <Navbar className='w-80 fixed h-full' /> {/* Set the height to full to match the screen height */}
          <main className='flex-1 ml-80 p-8'> {/* Adjust the margin-left to the width of your navbar */}
            <div className='max-w-7xl mx-auto'> {/* This will center the content in the available space */}
              {children}
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
