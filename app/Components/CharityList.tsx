"use client";
import { useState } from 'react';
import { supabase } from "../../backend/client";

const charities = [
  { id: 1, name: "Green Golf Foundation", desc: "Planting trees around golf courses." },
  { id: 2, name: "Junior Pro Support", desc: "Helping kids get their first golf kits." },
  { id: 3, name: "Ocean Clean-up", desc: "Removing plastic from coastal courses." }
];

export default function CharityList() {
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = async (charityName: string) => {
    setLoading(true);
    // 1. Check user
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert("Pehle login kar lo, bacha! ❤️");
      setLoading(false);
      return;
    }

    // 2. Save choice to 'profiles' or 'charity_selections' table
    // Hum user_id ke saath uska choice save kar rahe hain
    const { error } = await supabase
      .from('profiles') 
      .upsert({ id: user.id, selected_charity: charityName });

    if (error) {
      console.log("Error saving charity:", error.message);
      // Agar 'profiles' table abhi nahi banayi, toh sirf UI par select dikhayega
      setSelected(charityName);
      alert(`Selected ${charityName}! (UI Only - Table check pending)`);
    } else {
      setSelected(charityName);
      alert(`Perfect! Now 10% of your scores will support ${charityName}. ✨`);
    }
    setLoading(false);
  };

  return (
    <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#111', borderRadius: '15px', border: '1px solid #4ade80' }}>
      <h3 style={{ color: '#4ade80', marginBottom: '15px' }}>Select Your Charity</h3>
      <div style={{ display: 'grid', gap: '15px' }}>
        {charities.map((charity) => (
          <div 
            key={charity.id}
            onClick={() => handleSelect(charity.name)}
            style={{ 
              padding: '15px', 
              borderRadius: '10px', 
              border: selected === charity.name ? '2px solid #4ade80' : '1px solid #333',
              cursor: 'pointer',
              backgroundColor: selected === charity.name ? '#1a2e1a' : '#000',
              transition: '0.3s'
            }}
          >
            <h4 style={{ margin: '0', color: selected === charity.name ? '#4ade80' : '#fff' }}>{charity.name}</h4>
            <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#71717a' }}>{charity.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}