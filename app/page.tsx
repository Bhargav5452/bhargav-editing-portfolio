export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0d0d0d',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      {/* Replace this with your real homepage content */}
      <h1
        style={{
          fontSize: 'clamp(32px, 6vw, 72px)',
          fontWeight: 900,
          letterSpacing: '10px',
          color: '#FACC15',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}
      >
        PORTFOLIO
      </h1>
      <p style={{ color: '#555', fontSize: 14, letterSpacing: '4px', textTransform: 'uppercase' }}>
        Bhargava Nandan Kammela
      </p>
    </main>
  );
}
