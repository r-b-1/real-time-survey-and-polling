import Link from "next/link";
import { ArrowUpRight, Check, BarChart3, QrCode } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Real-time
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {" "}
                  Polling{" "}
                </span>
                & Survey Platform
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Create interactive polls, gather instant feedback, and visualize
                results in real-time with our powerful survey platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center px-8 py-4 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors text-lg font-medium"
                >
                  Create Your Poll
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  href="#pricing"
                  className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
                >
                  View Pricing
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-500" />
                  <span>Multiple question types</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-500" />
                  <span>Real-time results</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-500" />
                  <span>Mobile optimized</span>
                </div>
              </div>
            </div>

            <div className="relative mt-12 md:mt-0">
              <div className="bg-white rounded-xl shadow-xl p-4 relative z-10">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold">Live Poll Results</span>
                    </div>
                    <div className="bg-purple-100 p-2 rounded-md">
                      <QrCode className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Option A</span>
                        <span>64%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-500 rounded-full"
                          style={{ width: "64%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Option B</span>
                        <span>28%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: "28%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Option C</span>
                        <span>8%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-500 rounded-full"
                          style={{ width: "8%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center text-sm text-gray-500">
                    125 responses • Updated just now
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-2xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-100 rounded-full opacity-50 blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
