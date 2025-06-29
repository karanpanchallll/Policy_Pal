🧠 PolicyPal – Real-Time Insurance Advisor
🔗 https://policy-pal-blueprints.vercel.app/

A GenAI-powered platform that revolutionizes how individuals and families discover insurance policies.

Combines real-time web intelligence, LLMs (Gemini), and custom risk modeling to deliver:
Personalized policy recommendations
Monthly premium estimations
Instant customer support

🌟 Overview:
PolicyPal simplifies the insurance journey using cutting-edge technologies:
🔍 Real-time SERP data for live policy options
🤖 Gemini LLM for natural language understanding and summarization
📊 Risk scoring based on lifestyle and demographic inputs
💸 Premium Calculator for monthly cost estimation
💬 AI-powered Support Agent for real-time assistance

🎯 Problem Statement:
The insurance market is saturated with complex policies, overwhelming jargon, and biased agents. Users need a smart, unbiased, real-time recommendation engine that finds the right policy — without manual research or financial expertise.

🔁 How It Works – Core Logic
🔍 Step 1: User Input Collection
Users provide:
Demographics: Age, gender, marital status, education, occupation, location
Lifestyle factors: Smoking habits, driving record, health conditions
Financials: Income
Goal: Preferred policy type (e.g., Term Life, Family Floater)

🧮 Step 2: Risk Scoring Model
A custom Python model calculates a Risk Score (0–100) based on:
Parameter	Impact on Score
🔢 Age	Higher age → Higher risk
💸 Income	Lower income → Higher risk
🚬 Smoker	Yes → +25 points
🚗 Driving record	Poor → +15 points
Simplified formula:
risk_score = base + age_factor + income_factor + smoker_penalty + driving_penalty

🌐 Step 3: Live Policy Search via SerpAPI
We generate a dynamic query from the user profile and pass it to SerpAPI, which returns:
Live policy listings
Benefits summary
Provider names & URLs
🔄 This replaces static insurance datasets with real-time intelligence.

🤖 Step 4: LLM Recommendations using Gemini
We send both the user profile and search results to Gemini Flash or Pro, which returns:
🧾 Underwriting summary
🥇 Best 7 personalized policy recommendations
💡 Suitability scores and plan highlights
Rendered as interactive cards using Markdown + HTML in Streamlit.

💸 Step 5: Premium Calculator (NEW)
Users can now estimate monthly premiums in a dedicated third tab.
Inputs:
Insurance type
Age
Income
Smoking status
Outputs:
₹ Estimated monthly cost
📘 Gemini-generated explanation of pricing rationale

💬 Step 6: GenAI Support Agent
Users can ask anything like:
"What is deductible?"
"Which is better — Term Life or Whole Life?"
The Gemini-powered chatbot simplifies insurance literacy, offering:

🧠 Instant education
✅ Support automation
🌍 Accessibility for non-experts

🔐 Tech Stack
Category	Technologies Used
Frontend	React + Tailwind CSS (Vercel)
Backend	Streamlit (Python)
LLM	Gemini Flash 
Web Search	Serp
Data Handling	Pandas, dotenv, csv, re, markdown
Deployment	Streamlit Cloud, Vercel

🚀 Getting Started
✅ Backend Setup

Copy
git clone https://github.com/karanpanchallll/Policy_Pal.git
cd backend

Create .env file:
Copy
GEMINI_API_KEY=your_gemini_key
SERPAPI_KEY=your_serpapi_key

Install dependencies:
Copy
pip install -r requirements.txt

Run the app:
Copy
streamlit run app.py

✅ Frontend Setup
Copy
cd frontend
npm install
npm run build

📈 Why It’s Scalable & Unique
🔁 Live Search – policies always up-to-date
🤖 LLM-Powered Analysis – unbiased, contextual recommendations
🧮 Custom Risk Scoring – tailored to each user
💸 Premium Estimator – helps assess affordability
💬 GenAI Assistant – 24x7 customer support
🔄 Pluggable LLMs – can swap Gemini with GPT, Claude, LLaMA
📦 Extensible Architecture – easy to add PDF downloads, CRM handoff, WhatsApp bot, etc.
