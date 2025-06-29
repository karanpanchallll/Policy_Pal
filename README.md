
🧠 PolicyPal – Real-Time Insurance Advisor
🔗 https://policy-pal-blueprints.vercel.app/

A GenAI-powered platform that revolutionizes how individuals and families discover insurance policies.
Combines real-time web intelligence with large language models (LLMs) to deliver personalized insurance recommendations, premium cost estimations, and customer support.

🌟 Overview
PolicyPal simplifies the insurance journey using cutting-edge technologies:

🔍 Real-time SERP data for live policy options
🤖 Gemini LLM for natural language analysis and summarization
📊 Risk scoring based on lifestyle and demographic data
💬 AI-powered support agent for user queries
💸 Premium Calculator to estimate monthly costs for selected policy types with GenAI-backed explanations

🎯 Problem Statement
The insurance market is saturated with complex policies, overwhelming jargon, and biased agents.
Users need a smart, unbiased, real-time recommendation engine that finds the right policy — without manual research or financial expertise.

🧠 How It Works – Core Logic
🔍 1. User Input Collection
The user fills out a guided form that includes:
Demographics: Age, gender, marital status, education, occupation, location
Lifestyle Factors: Smoking habits, driving record, pre-existing conditions
Financial Info: Income level
Insurance Goals: Preferred insurance type (e.g., Term Life, Family Floater)

🧮 2. Risk Scoring Model
A custom Python-based model assigns a Risk Score (0–100) based on:

Parameter	Impact on Score
🔢 Age	Higher age → Higher risk
💸 Income	Lower income → Higher risk
🚬 Smoking	Smoker → +25 points
🚗 Driving record	Poor record → +15 points

Simplified formula:
risk_score = base + age_factor + income_factor + smoker_penalty + driving_penalty

🌐 3. Live Policy Search via Serp
Uses the SerpAPI service to search insurance websites in real-time with a custom query built from the user's profile. Results include:

Provider name
Benefits & key highlights
Source URLs
This ensures dynamic, current data instead of static datasets.

🤖 4. LLM Recommendation using Gemini Flash
The Gemini model receives:
The structured user profile
The real-time policy search results
It then generates:
A clear underwriting explanation
A ranked list of Best 7 Policy Recommendations
Provider names, summaries, and suitability insights
All output is rendered as responsive cards using markdown + HTML for easy reading.

💸 5. Premium Calculator – NEW
A dedicated third tab lets users:
Choose an insurance type
Input basic info (age, income, smoking status, number of family members if applicable)
Receive an estimated monthly premium
View a Gemini-generated natural language explanation behind the pricing logic
This bridges the gap between recommendation and real affordability.

💬 6. GenAI Support Agent
A smart AI assistant answers natural language queries like:
"What is deductible?"
"Which is better: Term or Whole Life?"
Powered by Gemini, it enhances:
User education
Instant support
Accessibility for first-time buyers

🔐 Tech Stack
Category	Tech Used
Frontend	React, Tailwind CSS (hosted on Vercel)
Backend	Streamlit (Python)
LLM	Gemini Flash
Live Search	Serp
Data	Pandas, dotenv, csv, re, markdown
Deployment	Streamlit Cloud, Vercel

🚀 Getting Started
git clone https://github.com/karanpanchallll/Policy_Pal.git

✅ Backend Setup:
cd backend

Create a .env file:
GEMINI_API_KEY=your_gemini_key
SERPAPI_KEY=your_serpapi_key

Install dependencies:
pip install -r requirements.txt

Run the app:
streamlit run app.py

✅ Frontend Setup (Landing Page)

cd policy-pal-blueprints

npm install
npm run build

📈 Why It’s Scalable and Unique
🔁 Live recommendations using real-time web data
🤖 LLM-backed personalization via Gemini
🧠 Risk-scored suggestions for smarter insurance matching
💸 Integrated cost estimator with premium breakdowns
💬 GenAI assistant to support, educate, and engage users
🔄 Swappable LLMs (GPT, Claude, Mistral can be integrated easily)
📦 Extendable to add premium comparison tables, CRM integration, PDF download, and lead generation
