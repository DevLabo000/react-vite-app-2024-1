import { ThemeProvider } from '@/context/ThemeProvider';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="mt-20 flex items-center justify-center">{children}</div>
    </ThemeProvider>
  );
}

export default Layout;
