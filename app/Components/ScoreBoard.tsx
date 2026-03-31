"use client";
import { useState, useEffect } from 'react';
import { supabase } from "../../backend/client";

export default function ScoreBoard() {
  const [inputValue, setInputValue] = useState('');
  const [scores, setScores] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Home page load hote hi purane scores fetch karega
  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data } = await supabase
        .from('scores')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);
      if (data) setScores(data);
    }
  };

  const addScore = async () => {
    const scoreNum = parseInt(inputValue);
    
    if (scoreNum >= 1 && scoreNum <= 45) {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        alert("Pehle login toh kar lo, bacha! ❤️");
        setLoading(false);
        return;
      }

      // Database mein save ho raha hai
      const { error } = await supabase
        .from('scores')
        .insert([{ 
          score_value: scoreNum, 
          user_id: user.id 
        }]);

      if (error) {
        alert("Oops! Error: " + error.message);
      } else {
        alert("Score saved forever! ✨");
        setInputValue('');
        fetchScores(); // List update karne ke liye
      }
      setLoading(false);
    } else {
      alert("Score 1-45 ke beech rakho!");
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#111', borderRadius: '15px', border: '1px solid #4ade80', color: 'white' }}>
      <h3 style={{ color: '#4ade80', marginBottom: '15px' }}>Enter Golf Scores</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="number" 
          placeholder="1-45" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: '10px', borderRadius: '8px', border: 'none', width: '100px', backgroundColor: '#222', color: '#fff' }}
        />
        <button 
          onClick={addScore} 
          disabled={loading}
          style={{ padding: '10px 20px', backgroundColor: '#4ade80', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          {loading ? "Saving..." : "Add Score"}
        </button>
      </div>

      <div>
        <h4 style={{ fontSize: '14px', color: '#71717a', marginBottom: '10px' }}>Rolling Last 5 Scores:</h4>
        {scores.length === 0 ? <p style={{ fontSize: '12px', color: '#444' }}>No scores yet.</p> : null}
        {scores.map((s, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #222' }}>
            <span>Score: <strong style={{ color: '#4ade80' }}>{s.score_value}</strong></span>
            <span style={{ color: '#444', fontSize: '12px' }}>{new Date(s.created_at).toLocaleDateString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}