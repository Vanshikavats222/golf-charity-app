"use client";
import { useState, useEffect } from 'react';
import { supabase } from "../../backend/client";

export default function AdminDashboard() {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', padding: '40px', color: '#fff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ color: '#4ade80', marginBottom: '30px' }}>Admin Control Center</h1>
        
        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
          {[
            { label: 'Total Users', value: '1,240' },
            { label: 'Active Subscriptions', value: '1,150' },
            { label: 'Total Charity Pool', value: '£5,420' },
            { label: 'Next Draw Entries', value: '845' }
          ].map((stat, i) => (
            <div key={i} style={{ backgroundColor: '#111', padding: '20px', borderRadius: '12px', border: '1px solid #333' }}>
              <div style={{ color: '#71717a', fontSize: '14px' }}>{stat.label}</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '5px' }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Management Sections */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
          <div style={{ backgroundColor: '#111', padding: '25px', borderRadius: '15px', border: '1px solid #333' }}>
            <h3 style={{ marginTop: 0 }}>Recent User Scores (Verification Pending)</h3>
            <div style={{ color: '#71717a', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #222' }}>
                <span>User: vatsv3441@gmail.com</span>
                <span>Score: 28</span>
                <span style={{ color: '#4ade80' }}>Verify</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #222' }}>
                <span>User: test@golf.com</span>
                <span>Score: 13</span>
                <span style={{ color: '#4ade80' }}>Verify</span>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#111', padding: '25px', borderRadius: '15px', border: '1px solid #333' }}>
            <h3 style={{ marginTop: 0 }}>Draw Management</h3>
            <button style={{ width: '100%', padding: '10px', backgroundColor: '#4ade80', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginBottom: '10px' }}>
              Run Draw Simulation
            </button>
            <button style={{ width: '100%', padding: '10px', border: '1px solid #4ade80', color: '#4ade80', backgroundColor: 'transparent', borderRadius: '8px' }}>
              Publish Results
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}