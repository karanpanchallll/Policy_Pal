
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Shield, Brain, TrendingUp, Star, Users, Award, CheckCircle, Zap, Target, Globe } from "lucide-react";

const Index = () => {
  const handleGetRecommendation = () => {
    window.open('https://insuranceai-recommendation-dsw.streamlit.app/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-600/8 rounded-full blur-2xl animate-bounce delay-3000"></div>
        <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-blue-400/12 rounded-full blur-2xl animate-pulse delay-4000"></div>
      </div>

      {/* Enhanced Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Shield className="absolute top-32 left-20 w-8 h-8 text-blue-300/40 animate-bounce delay-300" />
        <Brain className="absolute top-80 right-32 w-6 h-6 text-blue-400/40 animate-bounce delay-700" />
        <TrendingUp className="absolute bottom-96 left-1/4 w-7 h-7 text-blue-500/40 animate-bounce delay-1000" />
        <Star className="absolute top-40 right-1/4 w-5 h-5 text-blue-400/40 animate-bounce delay-500" />
        <Zap className="absolute top-1/3 left-16 w-6 h-6 text-blue-500/30 animate-pulse delay-1500" />
        <Target className="absolute bottom-1/3 right-16 w-5 h-5 text-blue-400/35 animate-spin delay-2000" style={{animationDuration: '8s'}} />
        <Globe className="absolute top-2/3 left-1/3 w-7 h-7 text-blue-300/30 animate-bounce delay-2500" />
        <CheckCircle className="absolute bottom-80 right-1/4 w-6 h-6 text-blue-500/35 animate-pulse delay-3000" />
        <Award className="absolute top-96 left-1/2 w-5 h-5 text-blue-400/30 animate-bounce delay-3500" />
      </div>

      {/* Decorative Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-4 h-4 bg-blue-400/20 rotate-45 animate-spin delay-1000" style={{animationDuration: '12s'}}></div>
        <div className="absolute bottom-1/4 left-12 w-6 h-6 bg-blue-500/15 rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-blue-300/25 rotate-45 animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 right-8 w-5 h-5 bg-blue-600/10 rounded-full animate-bounce delay-3000"></div>
        <div className="absolute bottom-1/2 left-8 w-4 h-16 bg-blue-400/8 rounded-full animate-pulse delay-2500"></div>
        <div className="absolute top-16 left-1/2 w-2 h-2 bg-blue-500/30 rotate-45 animate-spin delay-4000" style={{animationDuration: '15s'}}></div>
      </div>

      {/* Floating Dots Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Header Section */}
      <header className="text-center py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <div className="relative">
              <Shield className="w-12 h-12 text-blue-600 mr-3 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400/50 rounded-full animate-pulse delay-1000"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent relative">
              PolicyPal
              <div className="absolute -top-2 -right-4 w-2 h-2 bg-blue-500/40 rounded-full animate-bounce delay-500"></div>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-700 mb-10 font-light animate-fade-in delay-300 relative">
            AI-powered Insurance Recommendations Made Easy.
            <div className="absolute -left-8 top-1/2 w-1 h-1 bg-blue-400/30 rounded-full animate-ping delay-2000"></div>
            <div className="absolute -right-8 top-1/4 w-1 h-1 bg-blue-500/30 rounded-full animate-pulse delay-3000"></div>
          </p>
          <div className="relative inline-block">
            <Button 
              onClick={handleGetRecommendation}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in delay-500 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">🔍 Get Insurance Recommendation</span>
            </Button>
            <div className="absolute -top-3 -right-3 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -bottom-3 -left-3 w-2 h-2 bg-blue-500/40 rounded-full animate-pulse delay-1500"></div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12 animate-fade-in">
              Why Choose PolicyPal?
              <div className="absolute -top-4 left-1/2 w-1 h-1 bg-blue-400/40 rounded-full animate-ping delay-1000"></div>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group bg-white/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative mb-4">
                  <Brain className="w-12 h-12 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-blue-200/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-colors duration-300"></div>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-blue-500/30 rounded-full animate-bounce delay-500"></div>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">AI-Powered</h3>
                <p className="text-blue-700">Smart algorithms analyze your profile to find the perfect insurance match</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group bg-white/90 backdrop-blur-sm relative overflow-hidden delay-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative mb-4">
                  <TrendingUp className="w-12 h-12 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-blue-200/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-colors duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse delay-700"></div>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Real-Time Data</h3>
                <p className="text-blue-700">Get up-to-date recommendations based on current market conditions</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group bg-white/90 backdrop-blur-sm relative overflow-hidden delay-200">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse delay-1500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative mb-4">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-blue-200/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-colors duration-300"></div>
                  <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-500/30 rounded-full animate-bounce delay-1200"></div>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Comprehensive</h3>
                <p className="text-blue-700">Coverage for term life, health, and group insurance policies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 animate-fade-in">
              About PolicyPal
              <div className="absolute -top-3 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse delay-2000"></div>
            </h2>
          </div>
          <div className="relative">
            <p className="text-lg text-blue-700 leading-relaxed bg-white/60 p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-blue-200/50 relative">
              PolicyPal uses real-time AI and web intelligence to recommend the best insurance policies based on your profile. 
              Whether you're looking for term life, health, or group insurance, PolicyPal helps you make smarter, faster decisions. 
              Our advanced algorithms analyze thousands of policies to find the perfect match for your needs and budget, 
              making insurance selection simple and stress-free.
              <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
            </p>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full blur-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-300/20 rounded-full blur-lg"></div>
            <div className="absolute top-1/2 -left-6 w-2 h-2 bg-blue-500/25 rounded-full animate-bounce delay-1500"></div>
            <div className="absolute top-1/4 -right-6 w-2 h-2 bg-blue-400/25 rounded-full animate-pulse delay-2000"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-4 relative z-10 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-4 left-8 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 right-8 w-2 h-2 bg-blue-300/20 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-500/30 rounded-full animate-ping delay-2000"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-blue-200">© 2025 PolicyPal. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 relative">
              <a 
                href="https://www.linkedin.com/in/karan-panchal-" 
                className="text-blue-200 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 relative"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-1 h-1 bg-blue-400/30 rounded-full animate-ping delay-500"></div>
              </a>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
