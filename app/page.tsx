"use client";
import ScoreBoard from './Components/ScoreBoard';
import CharityList from './Components/CharityList';

export default function HomePage() {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', padding: '40px 20px', color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* Header with Subscription Status */}
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', margin: 0, color: '#4ade80' }}>Golf Hero Dashboard</h1>
          <p style={{ color: '#71717a', margin: '5px 0' }}>Welcome back, Champion!</p>
        </div>
        <div style={{ backgroundColor: 'rgba(74, 222, 128, 0.1)', border: '1px solid #4ade80', padding: '8px 15px', borderRadius: '20px' }}>
          <span style={{ color: '#4ade80', fontSize: '14px', fontWeight: 'bold' }}>● Premium Member (Yearly)</span>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px' }}>
        
        {/* Left Column: Stats & Draw */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* PRD Draw Engine Section */}
          <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #333' }}>
            <h3 style={{ color: '#4ade80', marginTop: 0 }}>Next Monthly Draw</h3>
            <div style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>£500 Golf Voucher</div>
            <p style={{ color: '#71717a', fontSize: '14px' }}>Date: 15th April 2026</p>
            <div style={{ width: '100%', height: '8px', backgroundColor: '#222', borderRadius: '4px', marginTop: '10px' }}>
              <div style={{ width: '65%', height: '100%', backgroundColor: '#4ade80', borderRadius: '4px' }}></div>
            </div>
            <p style={{ fontSize: '12px', color: '#4ade80', marginTop: '5px' }}>65% entries filled</p>
          </div>

          {/* Admin Stats Preview */}
          <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #333' }}>
            <h4 style={{ margin: 0, color: '#71717a' }}>Community Impact</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>1,240</div>
                <div style={{ fontSize: '11px', color: '#71717a' }}>Total Members</div>
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>£5,420</div>
                <div style={{ fontSize: '11px', color: '#71717a' }}>Charity Raised</div>
              </div>
            </div>
          </div>

          <CharityList />
        </div>

        {/* Right Column: Scoreboard */}
        <div>
          <ScoreBoard />
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '10px', fontSize: '13px', color: '#71717a' }}>
            ℹ️ PRD Compliance: Scores are stored in Stableford format (1-45 range) and linked to your unique User ID.
          </div>
        </div>

      </div>

      {/* Footer / Admin Link */}
      <footer style={{ maxWidth: '900px', margin: '60px auto 0', textAlign: 'center', borderTop: '1px solid #222', paddingTop: '20px' }}>
        <a href="/ABC" style={{ color: '#444', textDecoration: 'none', fontSize: '12px' }}>Admin Portal Access</a>
      </footer>
    </main>
  );
}