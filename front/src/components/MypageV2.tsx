// src/components/Mypage.tsx
import React, { useState } from 'react';

const MypageV2: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // ここでフォームの送信処理を実装
        console.log({ name, phone });
    };

    return (
        <div className="mypage-container" style={{ padding: '20px' }}>
            <h1>マイページV2</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>
                        名前：
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>
                        電話番号：
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">保存</button>
            </form>
        </div>
    );
};

export default MypageV2;
