import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      {/* メインコンテンツ */}
      <main style={styles.main}>
        {/* 送信された画像を再現したグラデーションロゴ */}
        <div style={styles.logoWrapper}>
          <span style={styles.logoTextW}>W</span>
          <span style={styles.logoTextH}>H</span>
        </div>

        <h1 style={styles.title}>Welcome to WH Project</h1>
        <p style={styles.subtitle}>次世代のWeb体験へようこそ</p>

        {/* 次の画面へ進むボタン */}
        <Link href="/next-page" style={{ textDecoration: 'none' }}>
          <button style={styles.button}>
            次の画面へ進む
            <span style={styles.arrow}>→</span>
          </button>
        </Link>
      </main>

      {/* フッター */}
      <footer style={styles.footer}>
        © 2026 WH Project. All rights reserved.
      </footer>
    </div>
  );
}

// 画面全体のデザイン（CSSスタイル）
const styles = {
  container: {
    backgroundColor: '#0d0e15', // 深みのあるサイバーダーク
    color: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '0 20px',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    textAlign: 'center',
  },
  // ロゴの土台と光沢感（ネオンエフェクト）
  logoWrapper: {
    fontSize: '120px',
    fontWeight: '900',
    letterSpacing: '-10px',
    lineHeight: '1',
    marginBottom: '20px',
    display: 'flex',
    filter: 'drop-shadow(0 0 25px rgba(0, 229, 255, 0.4)) drop-shadow(0 0 50px rgba(255, 0, 128, 0.2))',
    userSelect: 'none',
  },
  // 画像の左側（鮮やかなシアン・ブルーのグラデーション）
  logoTextW: {
    background: 'linear-gradient(135deg, #00f5ff 30%, #0077ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    paddingRight: '2px',
  },
  // 画像の右側（美しいピンク・マゼンタのグラデーション）
  logoTextH: {
    background: 'linear-gradient(135deg, #ff007f 0%, #aa00ff 70%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginLeft: '-5px', // WとHを少し重ねて一体感を出す
  },
  title: {
    fontSize: '2.5rem',
    margin: '10px 0',
    fontWeight: '700',
    letterSpacing: '1px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#8a8f98',
    marginBottom: '40px',
  },
  // 近未来感のあるボタンデザイン
  button: {
    padding: '14px 32px',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#ffffff',
    background: 'linear-gradient(90deg, #0077ff, #ff007f)',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 4px 15px rgba(255, 0, 128, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  arrow: {
    transition: 'transform 0.2s ease',
  },
  footer: {
    width: '100%',
    height: '60px',
    borderTop: '1px solid #1e2230',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#4a4f5d',
    fontSize: '0.85rem',
  },
};
