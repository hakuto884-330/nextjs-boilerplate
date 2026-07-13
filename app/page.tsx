import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0f0f12', // 高級感のある深いブラック
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const, // TypeScriptのエラーを防ぐ対策
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '"Times New Roman", Times, serif', // ロゴに合わせたセリフ体ベース
      padding: '0 20px',
    }}>
      {/* メインコンテンツ */}
      <main style={{
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        textAlign: 'center',
      }}>
        
        {/* 画像のロゴを忠実に再現 */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          userSelect: 'none',
          marginBottom: '5px',
        }}>
          {/* 左側の斜めになったW */}
          <span style={{
            fontSize: '110px',
            fontWeight: 'normal',
            fontFamily: '"Times New Roman", Times, serif',
            fontStyle: 'italic',
            transform: 'skewX(-10deg)',
            marginRight: '-25px',
            display: 'inline-block',
            color: '#f7f7f7',
          }}>W</span>
          
          {/* 右側のまっすぐなH */}
          <span style={{
            fontSize: '120px',
            fontWeight: 'normal',
            fontFamily: '"Times New Roman", Times, serif',
            display: 'inline-block',
            color: '#f7f7f7',
          }}>H</span>
        </div>

        {/* ロゴの下のブランド名テキスト */}
        <div style={{
          fontSize: '14px',
          fontWeight: '500',
          letterSpacing: '6px',
          textTransform: 'uppercase',
          color: '#e2e2e5',
          marginBottom: '50px',
          paddingLeft: '6px', // 文字間隔（letterSpacing）のズレ調整
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          HAYASHI HAKUTO
        </div>

        {/* 次の画面へ進むボタン */}
        <Link href="/next-page" style={{ textDecoration: 'none' }}>
          <button style={{
            padding: '12px 36px',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '2px',
            color: '#000000',
            backgroundColor: '#ffffff', // 白ベースのミニマルなボタン
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}>
            ENTER
            <span>→</span>
          </button>
        </Link>
      </main>

      {/* フッター */}
      <footer style={{
        width: '100%',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#44444a',
        fontSize: '12px',
        letterSpacing: '1px',
        fontFamily: 'sans-serif'
      }}>
        © 2026 HAYASHI HAKUTO. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
