import './index.css';
import './App.css';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './components/RequestAirdrop';
import { Showbalance } from './components/showbalance';
import { SendToken } from './components/SendTokens';

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '5rem',
    backgroundColor: '#E5E7EB', 
};

const buttonStyle = {
    margin: '0.25rem',
};

const outerWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
};

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1rem',
      borderRadius: "8px",
    backgroundColor: '#E5E7EB',
    padding: '1rem',
    flexDirection: 'column',

};


export const ConnectDisconnectbuttons = () => {
    return (
        <div style={buttonContainerStyle}>
            <div style={buttonStyle}><WalletMultiButton /></div>
            <div style={buttonStyle}><WalletDisconnectButton /></div>
        </div>
    );
};

function App() {
    return (
        <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/sNEtTVchX7ZHtgTkL7s6qZfpV-ygp32e"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <ConnectDisconnectbuttons />
                    <div style={outerWrapperStyle}>
                        <div style={gridContainerStyle}>
                            <div><Showbalance /></div>
                            <div><Airdrop /></div>
                            <div><SendToken /></div>
                        </div>
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default App;
