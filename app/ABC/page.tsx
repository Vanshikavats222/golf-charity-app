
   "use client";
import { useState } from 'react';
import { supabase } from "../../backend/client";

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
    } else {
      alert("Account created! Now you can Login.");
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert(error.message);
    } else {
      alert("Logged in successfully! Redirecting to Home...");
      // Ye line aapko automatic home page par bhej degi
      window.location.href = "/"; 
    }
    setLoading(false);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#000' 
    }}>
      <div style={{ 
        maxWidth: '400px', 
        width: '100%',
        padding: '40px', 
        backgroundColor: '#111', 
        borderRadius: '15px', 
        border: '1px solid #4ade80',
        boxShadow: '0 0 20px rgba(74, 222, 128, 0.1)'
      }}>
        <h2 style={{ color: '#4ade80', textAlign: 'center', marginBottom: '30px', fontSize: '24px' }}>
          Golf Member Login
        </h2>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#71717a', fontSize: '14px', display: 'block', marginBottom: '5px' }}>Email</label>
          <input 
            type="email" 
            placeholder="your@email.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '12px', 
              backgroundColor: '#000', 
              color: '#fff', 
              border: '1px solid #333',
              borderRadius: '8px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ color: '#71717a', fontSize: '14px', display: 'block', marginBottom: '5px' }}>Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '12px', 
              backgroundColor: '#000', 
              color: '#fff', 
              border: '1px solid #333',
              borderRadius: '8px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button 
            onClick={handleLogin} 
            disabled={loading} 
            style={{ 
              padding: '12px', 
              backgroundColor: '#4ade80', 
              color: '#000', 
              border: 'none', 
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <button 
            onClick={handleSignUp} 
            disabled={loading} 
            style={{ 
              padding: '12px', 
              border: '1px solid #4ade80', 
              color: '#4ade80', 
              backgroundColor: 'transparent', 
              borderRadius: '8px',
              cursor: 'pointer' 
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}