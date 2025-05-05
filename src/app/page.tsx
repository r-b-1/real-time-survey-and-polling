import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import Footer from "@/components/footer";
import { createClient } from "../../supabase/server";
import {
  ArrowUpRight,
  BarChart3,
  LineChart,
  PieChart,
  CheckCircle2,
  Smartphone,
  Share2,
  Database,
} from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: plans, error } = await supabase.functions.invoke(
    "supabase-functions-get-plans",
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Powerful Polling Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create engaging polls and surveys with our intuitive platform
              designed for real-time feedback and analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Real-time Results",
                description:
                  "Watch responses come in live with animated visualizations",
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Mobile Optimized",
                description:
                  "Perfect experience on any device for creators and respondents",
              },
              {
                icon: <Share2 className="w-6 h-6" />,
                title: "Easy Sharing",
                description: "Distribute via links or QR codes with one click",
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Data Export",
                description:
                  "Download complete response data for further analysis",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Question Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Multiple Question Types</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create diverse and engaging polls with our variety of question
              formats
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <PieChart className="w-16 h-16 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Choice</h3>
              <p className="text-gray-600">
                Create polls with single or multiple selection options for quick
                and clear feedback
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <LineChart className="w-16 h-16 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rating Scales</h3>
              <p className="text-gray-600">
                Gather nuanced feedback with customizable rating scales and
                sentiment analysis
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Open-ended Questions
              </h3>
              <p className="text-gray-600">
                Collect detailed responses with text fields for qualitative
                insights and suggestions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-purple-100">Responses Collected</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-purple-100">Active Polls</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Powerful Analytics Dashboard
              </h2>
              <p className="text-gray-600 mb-6">
                Monitor responses in real-time with our interactive dashboard.
                Filter results, export data, and gain actionable insights
                instantly.
              </p>

              <ul className="space-y-3">
                {[
                  "Live updating charts and graphs",
                  "Detailed response breakdowns",
                  "Demographic filtering options",
                  "One-click data export",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 shadow-md">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Analytics Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your polling needs. No hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans?.map((item: any) => (
              <PricingCard key={item.id} item={item} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Collecting Feedback?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations who use our platform to gather
            insights and make data-driven decisions.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Create Your First Poll
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
