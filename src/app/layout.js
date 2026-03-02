import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Rishabh Singh | Product Manager — Agentic AI Portfolio",
  description:
    "Portfolio of Rishabh Singh — a Customer Service professional turned Product Manager specializing in Agentic AI. Explore PM projects, skills, and career journey.",
  keywords: [
    "Product Manager",
    "Agentic AI",
    "Portfolio",
    "Rishabh Singh",
    "PM",
    "AI Product Management",
  ],
  openGraph: {
    title: "Rishabh Singh | Product Manager — Agentic AI Portfolio",
    description:
      "Customer Service → Product Manager. 6 hands-on PM projects in Agentic AI, NLP, and workflow automation.",
    url: "https://rishabh-pm-portfolio.vercel.app",
    siteName: "Rishabh Singh Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Singh | PM Portfolio",
    description:
      "From Customer Service to Product Management in Agentic AI. See my projects and journey.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
