import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Markdown 預覽器

## 功能說明

這是一個 **Markdown** 轉 *HTML* 的預覽工具。

### 支援的語法

- 標題（#、##）
- **粗體文字**
- *斜體文字*
- \`行內程式碼\`
- [超連結](https://example.com)

### 程式碼區塊

\`\`\`javascript
function hello() {
  console.log('Hello, World!');
}
\`\`\`

開始編輯左側的 Markdown 文字，右側會即時顯示預覽結果。`);

  return (
    <div className="app-container">
      <div className="editor-panel">
        <h2 className="panel-title">Markdown 輸入</h2>
        <textarea
          className="markdown-input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="在此輸入 Markdown 文字..."
        />
      </div>
      <div className="preview-panel">
        <h2 className="panel-title">HTML 預覽</h2>
        <div className="markdown-preview">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
