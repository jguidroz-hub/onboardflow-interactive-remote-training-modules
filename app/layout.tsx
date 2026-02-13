import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OnboardFlow - Interactive Remote Training Modules',
  description: 'Value Proposition: Helps HR teams and managers quickly create engaging, interactive training modules and quizzes for remote employee onboarding, ensuring consistent learning and compliance without extensive development.

Target Customer: HR departments, training managers, and small to medium-sized businesses with remote or hybrid workforces looking to streamline onboarding.

---
Category: Micro-SaaS
Target Market: HR departments, training managers, and small to medium-sized businesses with remote or hybrid workforces looking to streamline onboarding.
Source Hypothesis ID: 0cd0b342-73c1-4c14-b816-b80629f6ee64
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">OnboardFlow - Interactive Remote Training Modules</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
