import React from 'react';

const SummaryCard = React.memo(function SummaryCard({ count }) {
  return (
    <section style={{ marginBottom: 24, padding: 16, background: '#f9f9ff', borderRadius: 8 }}>
      <strong>Filtered posts:</strong> {count}
    </section>
  );
});

export default SummaryCard;
