export interface ArticleSection {
  type: "intro" | "heading" | "paragraph" | "list" | "callout";
  text?: string;
  items?: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  content: ArticleSection[];
}

export const articles: Record<string, Article> = {
  "what-are-stocks": {
    id: "what-are-stocks",
    title: "What Are Stocks?",
    category: "Investing Basics",
    readTime: "5 min read",
    content: [
      {
        type: "intro",
        text: "Stocks represent ownership in a company. When you buy a stock, you're buying a small piece of that company and become a shareholder."
      },
      {
        type: "heading",
        text: "How Stocks Work"
      },
      {
        type: "paragraph",
        text: "When a company wants to raise money, it can sell shares of stock to the public. Each share represents a fraction of ownership in the company. As a shareholder, you may benefit in two ways:"
      },
      {
        type: "list",
        items: [
          "Capital Appreciation: If the company does well, the value of your shares may increase, allowing you to sell them for a profit.",
          "Dividends: Some companies share their profits with shareholders through regular dividend payments."
        ]
      },
      {
        type: "paragraph",
        text: "For example, if you buy 10 shares of a company at $50 each, you've invested $500. If the stock price rises to $60, your investment is now worth $600—a $100 gain. Plus, if the company pays a quarterly dividend of $0.50 per share, you'd receive $5 every three months just for holding the stock."
      },
      {
        type: "heading",
        text: "The Stock Market"
      },
      {
        type: "paragraph",
        text: "Stocks are bought and sold on stock exchanges like the New York Stock Exchange (NYSE) or NASDAQ. The price of a stock fluctuates based on supply and demand, company performance, economic conditions, and investor sentiment."
      },
      {
        type: "paragraph",
        text: "Think of it like an auction: if many people want to buy a stock (high demand) and few want to sell (low supply), the price goes up. If many want to sell and few want to buy, the price goes down. This happens thousands of times per day during market hours, which is why stock prices constantly change."
      },
      {
        type: "callout",
        text: "Remember: Stock prices can go down as well as up. This is why diversification and long-term thinking are important investing principles. Don't invest money you'll need in the next few years."
      },
      {
        type: "heading",
        text: "Why Women Should Invest in Stocks"
      },
      {
        type: "paragraph",
        text: "Women face unique financial challenges: we typically live longer than men (about 5-7 years), earn less over our lifetimes due to the wage gap, and often take career breaks for caregiving. This means we need our money to work harder and last longer."
      },
      {
        type: "paragraph",
        text: "Historically, stocks have provided returns of 8-10% annually over the long term—far outpacing savings accounts (often under 1%) and inflation (2-3%). While past performance doesn't guarantee future results, this historical trend shows why stocks are essential for building long-term wealth."
      },
      {
        type: "heading",
        text: "Getting Started"
      },
      {
        type: "paragraph",
        text: "To buy stocks, you'll need to open a brokerage account. Many modern brokerages offer commission-free trading and educational resources for beginners. Popular options include Fidelity, Charles Schwab, Vanguard, and newer apps like Robinhood."
      },
      {
        type: "list",
        items: [
          "Start small: You don't need thousands of dollars. Many brokerages allow you to buy fractional shares, meaning you can invest with as little as $10.",
          "Learn as you go: Don't wait until you feel 'ready.' Start with a small amount you're comfortable with and learn through experience.",
          "Think long-term: The stock market has ups and downs, but historically recovers and grows over time. Plan to hold investments for at least 5-10 years.",
          "Never invest money you can't afford to lose: Keep your emergency fund and short-term savings separate from investments."
        ]
      },
      {
        type: "callout",
        text: "Pro tip: Many experts recommend beginning with index funds rather than individual stocks. Index funds spread your investment across hundreds or thousands of companies, reducing risk while still giving you stock market exposure."
      }
    ]
  },
  
  "mutual-funds-explained": {
    id: "mutual-funds-explained",
    title: "Mutual Funds Explained",
    category: "Investing Basics",
    readTime: "6 min read",
    content: [
      {
        type: "intro",
        text: "A mutual fund is an investment vehicle that pools money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities. Think of it as buying a basket of investments instead of picking individual items."
      },
      {
        type: "heading",
        text: "How Mutual Funds Work"
      },
      {
        type: "paragraph",
        text: "Imagine you and 1,000 other people each contribute $1,000 to create a $1 million investment pool. A professional fund manager uses this money to buy a diversified mix of investments—maybe 50 different stocks, 30 bonds, and other securities. Each investor owns a proportional share of everything in the fund."
      },
      {
        type: "paragraph",
        text: "When you invest in a mutual fund, you're buying shares of the fund itself. The price per share (called the Net Asset Value or NAV) is calculated at the end of each trading day based on the total value of all holdings divided by the number of shares outstanding."
      },
      {
        type: "heading",
        text: "Types of Mutual Funds"
      },
      {
        type: "list",
        items: [
          "Stock Funds: Invest primarily in stocks. These can focus on large companies, small companies, specific industries, or geographic regions.",
          "Bond Funds: Invest in bonds and other debt securities. Generally less risky than stock funds but with lower potential returns.",
          "Balanced Funds: Hold a mix of stocks and bonds, aiming for both growth and income.",
          "Index Funds: Track a specific market index like the S&P 500. These are passively managed and typically have lower fees.",
          "Target-Date Funds: Automatically adjust the investment mix based on your planned retirement date, becoming more conservative as you age."
        ]
      },
      {
        type: "heading",
        text: "Benefits of Mutual Funds"
      },
      {
        type: "list",
        items: [
          "Diversification: Your money is spread across many investments, reducing risk. If one company's stock drops, it's only a small part of your total investment.",
          "Professional Management: Experienced managers research and select investments, monitor the portfolio, and make adjustments. This is especially valuable for beginners.",
          "Accessibility: You can start with relatively small amounts of money, often as little as $500-$1,000, or even less with automatic investment plans.",
          "Liquidity: You can typically buy or sell shares on any business day, getting your money back within a few days.",
          "Convenience: Instead of researching and buying dozens of individual securities, you make one investment decision."
        ]
      },
      {
        type: "heading",
        text: "Costs to Consider"
      },
      {
        type: "paragraph",
        text: "Mutual funds charge fees for management and operations. Understanding these costs is crucial because they directly impact your returns."
      },
      {
        type: "list",
        items: [
          "Expense Ratio: The annual fee expressed as a percentage of your investment. A 1% expense ratio means you pay $10 annually for every $1,000 invested.",
          "Load Fees: Some funds charge a sales commission when you buy (front-end load) or sell (back-end load). Many funds are 'no-load,' meaning no sales charges.",
          "Transaction Fees: Some brokerages charge fees to buy or sell mutual fund shares.",
          "12b-1 Fees: Marketing and distribution fees included in the expense ratio."
        ]
      },
      {
        type: "callout",
        text: "Lower costs = higher returns. A fund with a 0.1% expense ratio versus one with a 1% expense ratio can mean tens of thousands of dollars difference over decades. Always compare expense ratios when choosing between similar funds."
      },
      {
        type: "heading",
        text: "Actively Managed vs. Index Funds"
      },
      {
        type: "paragraph",
        text: "Actively managed funds have managers who try to beat the market by picking winning investments. They typically charge higher fees (often 0.5-1.5% or more). Index funds simply track a market index and charge much lower fees (often 0.1% or less)."
      },
      {
        type: "paragraph",
        text: "Here's the surprising truth: most actively managed funds don't beat their index benchmarks over the long term, especially after accounting for their higher fees. This is why many financial experts, including Warren Buffett, recommend low-cost index funds for most investors."
      },
      {
        type: "heading",
        text: "Getting Started with Mutual Funds"
      },
      {
        type: "list",
        items: [
          "Determine your goals: Are you saving for retirement in 30 years or a house down payment in 5 years? This affects which type of fund is right for you.",
          "Assess your risk tolerance: Can you handle seeing your investment value drop 20% in a bad year, knowing it historically recovers?",
          "Start with a broad index fund: A total stock market or S&P 500 index fund gives you diversified exposure at low cost.",
          "Consider target-date funds for retirement: These automatically adjust as you age, becoming more conservative over time.",
          "Set up automatic investments: Many funds allow automatic monthly investments, making it easy to invest consistently."
        ]
      },
      {
        type: "callout",
        text: "Remember: Mutual funds are long-term investments. Don't panic when the market drops—that's when you're buying shares on sale! Stay the course and keep investing regularly."
      }
    ]
  },
  
  "understanding-bonds": {
    id: "understanding-bonds",
    title: "Understanding Bonds",
    category: "Investing Basics",
    readTime: "5 min read",
    content: [
      {
        type: "intro",
        text: "Bonds are loans you make to governments or corporations. In return, they promise to pay you back with interest over time. Think of it as being the bank—you lend money and collect interest payments."
      },
      {
        type: "heading",
        text: "How Bonds Work"
      },
      {
        type: "paragraph",
        text: "When you buy a bond, you're lending money to the issuer (government or company). The bond has three key features:"
      },
      {
        type: "list",
        items: [
          "Face Value (Par Value): The amount borrowed, typically $1,000. This is what you'll receive when the bond matures.",
          "Maturity Date: When the loan must be repaid. This could be anywhere from a few months to 30 years or more.",
          "Coupon Rate: The interest rate paid annually. A 5% coupon on a $1,000 bond pays $50 per year, usually in two $25 installments."
        ]
      },
      {
        type: "paragraph",
        text: "For example, if you buy a 10-year Treasury bond with a $1,000 face value and 4% coupon rate, you'll receive $40 per year (paid as $20 every six months) for 10 years. At the end of 10 years, you get your $1,000 back. Your total earnings: $400 in interest plus your $1,000 principal."
      },
      {
        type: "heading",
        text: "Types of Bonds"
      },
      {
        type: "list",
        items: [
          "Government Bonds (Treasuries): Issued by the federal government. Considered the safest investments because they're backed by the U.S. government's ability to tax. Include Treasury bills (short-term), notes (medium-term), and bonds (long-term).",
          "Municipal Bonds: Issued by cities, states, or local governments to fund public projects like schools or highways. Often tax-exempt, meaning you don't pay federal income tax on the interest.",
          "Corporate Bonds: Issued by companies to raise money for expansion, operations, or other needs. Offer higher interest rates than government bonds but carry more risk since companies can fail.",
          "I Bonds (Inflation-Protected): Special government bonds that adjust for inflation, protecting your purchasing power."
        ]
      },
      {
        type: "heading",
        text: "Bond Ratings and Risk"
      },
      {
        type: "paragraph",
        text: "Bonds are rated by agencies like Moody's and Standard & Poor's to indicate their safety. Ratings range from AAA (safest) to D (in default)."
      },
      {
        type: "list",
        items: [
          "Investment Grade (AAA to BBB): Lower risk, lower interest rates. Considered safe investments.",
          "High-Yield or 'Junk' Bonds (BB and below): Higher risk, higher interest rates. More likely to default but offer better returns if they don't."
        ]
      },
      {
        type: "paragraph",
        text: "The key principle: higher risk = higher potential return. A stable company like Apple might pay 3% on its bonds, while a struggling company might need to pay 8% to attract investors."
      },
      {
        type: "callout",
        text: "For most beginning investors, stick with investment-grade bonds or bond funds. The extra interest from high-yield bonds isn't worth the risk of losing your principal."
      },
      {
        type: "heading",
        text: "Why Include Bonds in Your Portfolio?"
      },
      {
        type: "paragraph",
        text: "Bonds are generally less volatile than stocks and provide steady income through regular interest payments. They serve several important roles in a diversified portfolio:"
      },
      {
        type: "list",
        items: [
          "Stability: When stocks crash, bonds often hold their value or even increase, cushioning your portfolio.",
          "Predictable Income: Regular interest payments provide cash flow, especially important for retirees.",
          "Capital Preservation: High-quality bonds are unlikely to lose value, protecting your principal.",
          "Diversification: Bonds don't always move in sync with stocks, reducing overall portfolio risk."
        ]
      },
      {
        type: "heading",
        text: "The 60/40 Portfolio"
      },
      {
        type: "paragraph",
        text: "A traditional balanced investment strategy allocates 60% to stocks and 40% to bonds. This mix aims to capture stock market growth while bonds provide stability during downturns."
      },
      {
        type: "paragraph",
        text: "However, the right mix depends on your personal situation. Younger investors might go 80/20 or even 90/10 (stocks/bonds) since they have decades to recover from market drops. As you approach retirement, gradually shifting to 50/50 or 40/60 helps protect your savings when you'll soon need to withdraw money."
      },
      {
        type: "heading",
        text: "How to Invest in Bonds"
      },
      {
        type: "list",
        items: [
          "Bond Funds: The easiest option for beginners. A bond fund holds hundreds of different bonds, providing instant diversification.",
          "Individual Bonds: You can buy individual Treasury bonds directly from TreasuryDirect.gov or corporate/municipal bonds through a brokerage.",
          "Bond ETFs: Exchange-traded funds that hold bonds and trade like stocks, offering liquidity and low costs.",
          "I Bonds: Available directly from TreasuryDirect.gov with no fees. Limited to $10,000 per person per year."
        ]
      },
      {
        type: "callout",
        text: "Pro tip: For most investors, a low-cost total bond market index fund is the simplest way to add bonds to your portfolio. It provides broad diversification across government and corporate bonds in one investment."
      },
      {
        type: "heading",
        text: "Interest Rates and Bond Prices"
      },
      {
        type: "paragraph",
        text: "Here's something important to understand: bond prices and interest rates move in opposite directions. When interest rates rise, existing bond prices fall. When rates fall, bond prices rise."
      },
      {
        type: "paragraph",
        text: "Why? Imagine you own a bond paying 3% interest. If new bonds now pay 5%, your 3% bond is less attractive, so its price drops. But if you hold it to maturity, you still get your full face value back—the price change only matters if you sell before maturity."
      },
      {
        type: "callout",
        text: "Don't panic when bond prices drop due to rising rates. If you hold bonds (or bond funds) for the long term, the higher interest rates eventually benefit you as the fund buys new bonds with better yields."
      }
    ]
  },
  
  "etfs-index-funds": {
    id: "etfs-index-funds",
    title: "ETFs & Index Funds",
    category: "Investing Basics",
    readTime: "6 min read",
    content: [
      {
        type: "intro",
        text: "ETFs and index funds are passive investment vehicles that track market indexes, offering low-cost diversification for beginner investors. They're the 'set it and forget it' option that many financial experts recommend."
      },
      {
        type: "heading",
        text: "What Are Index Funds?"
      },
      {
        type: "paragraph",
        text: "An index fund is a type of mutual fund designed to track a specific market index, like the S&P 500 (which represents the 500 largest U.S. companies). Instead of trying to beat the market by picking winners, index funds aim to match market performance."
      },
      {
        type: "paragraph",
        text: "This passive approach means lower costs because there's no expensive team of analysts trying to outsmart the market. The fund simply buys all (or a representative sample) of the stocks in its target index and holds them, adjusting only when the index composition changes."
      },
      {
        type: "paragraph",
        text: "For example, a total stock market index fund might hold over 3,500 different U.S. stocks—from tech giants like Apple to small regional banks. With one investment, you own a tiny piece of the entire U.S. stock market."
      },
      {
        type: "heading",
        text: "What Are ETFs?"
      },
      {
        type: "paragraph",
        text: "Exchange-Traded Funds (ETFs) are similar to index funds but trade on stock exchanges like individual stocks. You can buy and sell them throughout the trading day at current market prices, just like buying shares of Apple or Microsoft."
      },
      {
        type: "paragraph",
        text: "Most ETFs are index funds—they passively track an index. For instance, SPY, VOO, and IVV are all ETFs that track the S&P 500. They give you the same diversified exposure with the added flexibility of intraday trading."
      },
      {
        type: "heading",
        text: "Key Differences"
      },
      {
        type: "list",
        items: [
          "Trading: ETFs trade throughout the day like stocks at fluctuating prices. Index funds trade once per day after market close at the calculated NAV (net asset value).",
          "Minimum Investment: ETFs can be purchased for the price of one share (often $50-$300). Index funds may have minimum investments of $500-$3,000, though many brokerages now offer fractional shares with lower minimums.",
          "Fees: Both typically have very low expense ratios (0.03-0.20%). ETFs may incur small trading commissions at some brokerages, while index funds typically have no transaction fees when bought through the fund company.",
          "Tax Efficiency: ETFs are generally slightly more tax-efficient due to their structure, though this matters more for taxable accounts than retirement accounts.",
          "Automatic Investing: Index funds easily support automatic monthly investments. Setting up automatic ETF purchases can be trickier since you're buying specific share quantities."
        ]
      },
      {
        type: "callout",
        text: "For most beginning investors, the differences are minimal. Choose based on what's available at your brokerage and which has the lowest expense ratio. Both are excellent choices for long-term investing."
      },
      {
        type: "heading",
        text: "Why Index Funds and ETFs Are Perfect for Beginners"
      },
      {
        type: "list",
        items: [
          "Instant Diversification: One investment gives you exposure to hundreds or thousands of companies, spreading your risk.",
          "Low Costs: Expense ratios as low as 0.03% mean you keep more of your returns. Compare this to 1% or more for actively managed funds.",
          "Strong Performance: The S&P 500 has averaged about 10% annual returns over the long term. Most actively managed funds don't beat this benchmark.",
          "Simple to Understand: You're not picking individual stocks or timing the market. You're buying the whole market and holding.",
          "No Expertise Required: You don't need to analyze companies, read financial statements, or follow market news obsessively."
        ]
      },
      {
        type: "heading",
        text: "Warren Buffett's Advice"
      },
      {
        type: "paragraph",
        text: "Warren Buffett, one of history's most successful investors, has repeatedly recommended low-cost index funds for average investors. In his 2013 letter to shareholders, he wrote that when he passes away, he's instructed that 90% of his wife's inheritance should be invested in a low-cost S&P 500 index fund."
      },
      {
        type: "paragraph",
        text: "His reasoning? Even professional investors struggle to beat index fund returns over time, especially after accounting for their higher fees. For most people, trying to pick winning stocks or time the market is a losing game."
      },
      {
        type: "callout",
        text: "If Warren Buffett—who built his fortune picking individual stocks—recommends index funds for his own family, that should tell you something!"
      },
      {
        type: "heading",
        text: "Popular Index Funds and ETFs"
      },
      {
        type: "paragraph",
        text: "Here are some widely-used options to get you started:"
      },
      {
        type: "list",
        items: [
          "S&P 500 Index: Tracks 500 largest U.S. companies. Examples: VFIAX (Vanguard mutual fund), VOO (Vanguard ETF), SPY (SPDR ETF).",
          "Total Stock Market Index: Covers entire U.S. stock market, about 3,500+ companies. Examples: VTSAX (Vanguard mutual fund), VTI (Vanguard ETF).",
          "Total International Stock Index: Exposure to companies outside the U.S. Examples: VTIAX (Vanguard mutual fund), VXUS (Vanguard ETF).",
          "Total Bond Market Index: Diversified bonds for stability. Examples: VBTLX (Vanguard mutual fund), BND (Vanguard ETF).",
          "Target-Date Funds: All-in-one funds that automatically adjust stocks/bonds as you age. Example: Vanguard Target Retirement 2060 Fund."
        ]
      },
      {
        type: "heading",
        text: "Building a Simple Three-Fund Portfolio"
      },
      {
        type: "paragraph",
        text: "Many investors use a 'three-fund portfolio' that covers the entire global investment market:"
      },
      {
        type: "list",
        items: [
          "60% U.S. Total Stock Market Index: Broad exposure to American companies",
          "30% Total International Stock Index: Diversification outside the U.S.",
          "10% Total Bond Market Index: Stability and balance"
        ]
      },
      {
        type: "paragraph",
        text: "Adjust these percentages based on your age and risk tolerance. Younger investors might go 80% stocks (60% U.S., 20% international) and 20% bonds. As you near retirement, gradually increase your bond allocation."
      },
      {
        type: "heading",
        text: "Getting Started"
      },
      {
        type: "paragraph",
        text: "Starting with index funds or ETFs is straightforward:"
      },
      {
        type: "list",
        items: [
          "Open a brokerage account: Choose a reputable firm like Vanguard, Fidelity, or Charles Schwab. Many have no account minimums.",
          "Start with a broad market index fund: A total stock market or S&P 500 fund is perfect for beginners.",
          "Set up automatic investments: Invest a fixed amount monthly—this 'dollar-cost averaging' helps smooth out market volatility.",
          "Don't check daily: Resist the urge to obsessively watch your balance. Check quarterly or less—you're investing for decades, not days.",
          "Add international and bonds over time: As your portfolio grows, add other asset classes for better diversification."
        ]
      },
      {
        type: "callout",
        text: "The best time to start investing was yesterday. The second-best time is today. Don't wait for the 'perfect' moment or until you understand everything—start small and learn as you go!"
      },
      {
        type: "heading",
        text: "The Power of Consistency"
      },
      {
        type: "paragraph",
        text: "Here's a powerful example: If you invest $500 per month in an S&P 500 index fund for 30 years, assuming the historical average return of 10% annually, you'd contribute $180,000 but end up with over $1 million."
      },
      {
        type: "paragraph",
        text: "The magic isn't in picking the right stocks or timing the market—it's in starting early, investing consistently, and letting compound growth do the heavy lifting over decades."
      }
    ]
  }
};